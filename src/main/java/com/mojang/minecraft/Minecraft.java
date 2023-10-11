package com.mojang.minecraft;

import com.mojang.minecraft.character.Vec3;
import com.mojang.minecraft.character.Zombie;
import com.mojang.minecraft.character.ZombieModel;
import com.mojang.minecraft.gui.ChatScreen;
import com.mojang.minecraft.gui.ErrorScreen;
import com.mojang.minecraft.gui.Font;
import com.mojang.minecraft.gui.InGameHud;
import com.mojang.minecraft.gui.InventoryScreen;
import com.mojang.minecraft.gui.PauseScreen;
import com.mojang.minecraft.gui.Screen;
import com.mojang.minecraft.level.Level;
import com.mojang.minecraft.level.LevelIO;
import com.mojang.minecraft.level.levelgen.LevelGen;
import com.mojang.minecraft.level.liquid.Liquid;
import com.mojang.minecraft.level.tile.Tile;
import com.mojang.minecraft.particle.ParticleEngine;
import com.mojang.minecraft.phys.AABB;
import com.mojang.minecraft.player.Inventory;
import com.mojang.minecraft.player.MovementInputFromOptions;
import com.mojang.minecraft.player.Player;
import com.mojang.minecraft.renderer.Chunk;
import com.mojang.minecraft.renderer.DirtyChunkSorter;
import com.mojang.minecraft.renderer.Frustum;
import com.mojang.minecraft.renderer.LevelRenderer;
import com.mojang.minecraft.renderer.RenderHelper;
import com.mojang.minecraft.renderer.Textures;
import com.mojang.minecraft.renderer.texture.TextureFX;
import com.mojang.minecraft.renderer.texture.TextureLavaFX;
import com.mojang.minecraft.renderer.texture.TextureWaterFX;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.IntBuffer;
import java.util.Iterator;
import java.util.TreeSet;
import org.lwjgl.BufferUtils;
import org.lwjgl.input.Keyboard;
import org.lwjgl.input.Mouse;
import org.lwjgl.opengl.Display;
import org.lwjgl.opengl.GL11;

public final class Minecraft implements Runnable {
	public int width;
	public int height;
	private Timer timer = new Timer(20.0F);
	public Level level;
	public LevelRenderer levelRenderer;
	public Player player;
	public ParticleEngine particleEngine;
	public User user = null;
	public String minecraftUri;
	public volatile boolean pause = false;
	public Textures textures;
	public Font font;
	public int editMode = 0;
	public Screen screen = null;
	public ProgressListener loadingScreen = new ProgressListener(this);
	public RenderHelper renderHelper = new RenderHelper(this);
	public LevelIO levelIo = new LevelIO(this.loadingScreen);
	private LevelGen levelGen = new LevelGen(this.loadingScreen);
	private int ticksRan = 0;
	public String loadMapUser = null;
	public int loadMapId = 0;
	public InGameHud hud;
	public boolean hideGui = false;
	public ZombieModel playerModel = new ZombieModel();
	public HitResult hitResult = null;
	public Options options;
	String server = null;
	int port = 0;
	volatile boolean running = false;
	public String fpsString = "";
	public boolean mouseGrabbed = false;
	private int prevFrameTime = 0;

	public Minecraft(int var2, int var3) {
		new SleepThread(this);
		this.width = var2;
		this.height = var3;
		this.textures = new Textures();
		this.textures.registerTextureFX(new TextureLavaFX());
		this.textures.registerTextureFX(new TextureWaterFX());
	}

	public final void setScreen(Screen var1) {
		if(!(this.screen instanceof ErrorScreen)) {
			if(this.screen != null) {
				this.screen.closeScreen();
			}

			this.screen = var1;
			if(var1 != null) {
				if(this.mouseGrabbed) {
					this.player.releaseAllKeys();
					this.mouseGrabbed = false;
					Mouse.setNativeCursor(false);
				}

				int var2 = this.width * 240 / this.height;
				int var3 = this.height * 240 / this.height;
				var1.init(this, var2, var3);
				this.hideGui = false;
			} else {
				this.grabMouse();
			}
		}
	}

	private static void checkGlError(String var0) {
		int var1 = GL11.glGetError();
		if(var1 != 0) {
			String var2 = GL11.gluErrorString(var1);
			System.out.println("########## GL ERROR ##########");
			System.out.println("@ " + var0);
			System.out.println(var1 + ": " + var2);
			Exception e = new Exception(var0);
			e.printStackTrace();
		}

	}

	public final void destroy() {
		Minecraft var5 = this;
		try {
			LevelIO.save(var5.level, new FileOutputStream(new File("level.dat")));
		} catch (Exception var2) {
			var2.printStackTrace();
		}
	}

	public final void run() {
		this.running = true;
		this.width = Display.getWidth();
		this.height = Display.getHeight();

		checkGlError("Pre startup");
		GL11.glEnable(GL11.GL_TEXTURE_2D);
		GL11.glShadeModel(GL11.GL_SMOOTH);
		GL11.glClearDepth((float)1.0D);
		GL11.glEnable(GL11.GL_DEPTH_TEST);
		GL11.glDepthFunc(GL11.GL_LEQUAL);
		GL11.glEnable(GL11.GL_ALPHA_TEST);
		GL11.glAlphaFunc(GL11.GL_GREATER, 0.0F);
		GL11.glCullFace(GL11.GL_BACK);
		GL11.glMatrixMode(GL11.GL_PROJECTION);
		GL11.glLoadIdentity();
		GL11.glMatrixMode(GL11.GL_MODELVIEW);
		checkGlError("Startup");
		this.font = new Font("/default.png", this.textures);
		IntBuffer var7 = BufferUtils.createIntBuffer(256);
		var7.clear().limit(256);
		GL11.glViewport(0, 0, this.width, this.height);

		boolean var8 = false;

		try {
			if(loadMapUser != null) {
				var8 = loadLevel(loadMapUser, loadMapId);
			} else {
				Level var9 = null;
				var9 = levelIo.load(new FileInputStream(new File("level.dat")));
				var8 = var9 != null;
				if(!var8) {
					var9 = levelIo.loadLegacy(new FileInputStream(new File("level.dat")));
				}

				var8 = var9 != null;
				if(var8) {
					setLevel(var9);
				}
			}
		} catch (Exception var35) {
			var35.printStackTrace();
			var8 = false;
		}

		if(!var8) {
			this.generateLevel(1);
		}

		this.levelRenderer = new LevelRenderer(this.textures);
		this.particleEngine = new ParticleEngine(this.level, this.textures);
		String var11 = "minecraft";
		String var12 = "PeytonPlayz585/";
		File var13 = new File(var12, var11 + '/');

		if(!var13.exists() && !var13.mkdirs()) {
			throw new RuntimeException("The working directory could not be created: " + var13);
		}

		File var52 = var13;
		this.options = new Options(this, var13);
		this.player = new Player(this.level, new MovementInputFromOptions(this.options));
		this.player.resetPos();
		if(this.level != null) {
			this.setLevel(this.level);
		}

		checkGlError("Post startup");
		this.hud = new InGameHud(this, this.width, this.height);

		long var1 = System.currentTimeMillis();
		int var3 = 0;

		try {
			while(this.running) {
				if(this.pause) {
					Thread.sleep(100L);
				} else {
					try {
						Timer var44 = this.timer;
						long var49 = System.currentTimeMillis();
						long var53 = var49 - var44.lastSyncSysClock;
						long var59 = System.nanoTime() / 1000000L;
						double var73;
						if(var53 > 1000L) {
							long var71 = var59 - var44.lastSyncHRClock;
							var73 = (double)var53 / (double)var71;
							var44.timeSyncAdjustment += (var73 - var44.timeSyncAdjustment) * (double)0.2F;
							var44.lastSyncSysClock = var49;
							var44.lastSyncHRClock = var59;
						}

						if(var53 < 0L) {
							var44.lastSyncSysClock = var49;
							var44.lastSyncHRClock = var59;
						}

						double var74 = (double)var59 / 1000.0D;
						var73 = (var74 - var44.lastHRTime) * var44.timeSyncAdjustment;
						var44.lastHRTime = var74;
						if(var73 < 0.0D) {
							var73 = 0.0D;
						}

						if(var73 > 1.0D) {
							var73 = 1.0D;
						}

						var44.fps = (float)((double)var44.fps + var73 * (double)var44.timeScale * (double)var44.ticksPerSecond);
						var44.ticks = (int)var44.fps;
						if(var44.ticks > 100) {
							var44.ticks = 100;
						}

						var44.fps -= (float)var44.ticks;
						var44.a = var44.fps;

						for(int var45 = 0; var45 < this.timer.ticks; ++var45) {
							++this.ticksRan;
							this.tick();
						}

						checkGlError("Pre render");
						float var50 = this.timer.a;
						RenderHelper var46 = this.renderHelper;
						if(var46.displayActive && !Display.isActive()) {
							var46.a.pauseGame();
						}

						var46.displayActive = Display.isActive();
						int var54;
						int var56;
						int var61;
						int var66;
						if(var46.a.mouseGrabbed) {
							var54 = 0;
							var56 = 0;
							var54 = Mouse.getDX();
							var56 = Mouse.getDY();
							byte var57 = 1;
							if(var46.a.options.invertMouse) {
								var57 = -1;
							}

							var46.a.player.turn((float)var54, (float)(var56 * var57));
						}

						if(!var46.a.hideGui) {
							var54 = var46.a.width * 240 / var46.a.height;
							var56 = var46.a.height * 240 / var46.a.height;
							int var60 = Mouse.getX() * var54 / var46.a.width;
							var61 = var56 - Mouse.getY() * var56 / var46.a.height - 1;
							if(var46.a.level != null) {
								Player var16 = var46.a.player;
								Level var5 = var46.a.level;
								LevelRenderer var6 = var46.a.levelRenderer;
								ParticleEngine var51 = var46.a.particleEngine;
								GL11.glViewport(0, 0, var46.a.width, var46.a.height);
								Level var67 = var46.a.level;
								Player var76 = var46.a.player;
								float var17 = 1.0F / (float)(4 - var46.a.options.renderDistance);
								var17 = (float)Math.pow((double)var17, 0.25D);
								var46.fogColorRed = 0.6F * (1.0F - var17) + var17;
								var46.fogColorGreen = 0.8F * (1.0F - var17) + var17;
								var46.fogColorBlue = 1.0F * (1.0F - var17) + var17;
								var46.fogColorRed *= var46.fogColorMultiplier;
								var46.fogColorGreen *= var46.fogColorMultiplier;
								var46.fogColorBlue *= var46.fogColorMultiplier;
								Tile var18 = Tile.tiles[var67.getTile((int)var76.x, (int)(var76.y + 0.12F), (int)var76.z)];
								if(var18 != null && var18.getLiquidType() != Liquid.none) {
									Liquid var19 = var18.getLiquidType();
									if(var19 == Liquid.water) {
										var46.fogColorRed = 0.02F;
										var46.fogColorGreen = 0.02F;
										var46.fogColorBlue = 0.2F;
									} else if(var19 == Liquid.lava) {
										var46.fogColorRed = 0.6F;
										var46.fogColorGreen = 0.1F;
										var46.fogColorBlue = 0.0F;
									}
								}

								GL11.glClearColor(var46.fogColorRed, var46.fogColorGreen, var46.fogColorBlue, 0.0F);
								GL11.glClear(GL11.GL_DEPTH_BUFFER_BIT | GL11.GL_COLOR_BUFFER_BIT);
								var76 = var46.a.player;
								var17 = var76.xRotO + (var76.xRot - var76.xRotO) * var50;
								float var80 = var76.yRotO + (var76.yRot - var76.yRotO) * var50;
								float var83 = var76.xo + (var76.x - var76.xo) * var50;
								float var62 = var76.yo + (var76.y - var76.yo) * var50;
								float var69 = var76.zo + (var76.z - var76.zo) * var50;
								Vec3 var64 = new Vec3(var83, var62, var69);
								var69 = (float)Math.cos((double)(-var80) * Math.PI / 180.0D + Math.PI);
								float var77 = (float)Math.sin((double)(-var80) * Math.PI / 180.0D + Math.PI);
								var80 = (float)Math.cos((double)(-var17) * Math.PI / 180.0D);
								var17 = (float)Math.sin((double)(-var17) * Math.PI / 180.0D);
								var77 *= var80;
								var69 *= var80;
								var80 = 5.0F;
								float var10001 = var77 * var80;
								float var10002 = var17 * var80;
								var80 = var69 * var80;
								var17 = var10002;
								var77 = var10001;
								Vec3 var70 = new Vec3(var64.x + var77, var64.y + var17, var64.z + var80);
								var46.a.hitResult = var46.a.level.clip(var64, var70);
								var46.fogColorMultiplier = 1.0F;
								var46.renderDistance = (float)(512 >> (var46.a.options.renderDistance << 1));
								GL11.glMatrixMode(GL11.GL_PROJECTION);
								GL11.glLoadIdentity();
								GL11.gluPerspective(70.0F, (float)var46.a.width / (float)var46.a.height, 0.05F, var46.renderDistance);
								GL11.glMatrixMode(GL11.GL_MODELVIEW);
								GL11.glLoadIdentity();
								Player var84 = var46.a.player;
								GL11.glTranslatef(0.0F, 0.0F, -0.3F);
								GL11.glRotatef(var84.xRotO + (var84.xRot - var84.xRotO) * var50, 1.0F, 0.0F, 0.0F);
								GL11.glRotatef(var84.yRotO + (var84.yRot - var84.yRotO) * var50, 0.0F, 1.0F, 0.0F);
								var83 = var84.xo + (var84.x - var84.xo) * var50;
								var62 = var84.yo + (var84.y - var84.yo) * var50;
								var69 = var84.zo + (var84.z - var84.zo) * var50;
								GL11.glTranslatef(-var83, -var62, -var69);
								GL11.glEnable(GL11.GL_CULL_FACE);
								Frustum var68 = Frustum.getFrustum();
								Frustum var72 = var68;
								LevelRenderer var65 = var46.a.levelRenderer;

								int var79;
								for(var79 = 0; var79 < var65.f.length; ++var79) {
									var65.f[var79].isInFrustum(var72);
								}

								var65 = var46.a.levelRenderer;
								TreeSet var81 = new TreeSet(new DirtyChunkSorter(var16));
								var81.addAll(var65.e);
								int var82 = 4;
								Iterator var85 = var81.iterator();

								while(var85.hasNext()) {
									Chunk var86 = (Chunk)var85.next();
									var86.rebuild();
									var65.e.remove(var86);
									--var82;
									if(var82 == 0) {
										break;
									}
								}

								boolean var47 = var5.isSolid(var16.x, var16.y, var16.z, 0.1F);
								var46.setupFog();
								GL11.glEnable(GL11.GL_FOG);
								var6.render(var16, 0);
								int var48;
								if(var47) {
									var48 = (int)var16.x;
									var56 = (int)var16.y;
									var66 = (int)var16.z;

									for(var79 = var48 - 1; var79 <= var48 + 1; ++var79) {
										for(var82 = var56 - 1; var82 <= var56 + 1; ++var82) {
											for(int var87 = var66 - 1; var87 <= var66 + 1; ++var87) {
												var6.render(var79, var82, var87);
											}
										}
									}
								}

								var46.toggleLight(true);
								var6.renderEntities(var68, var50);
								var46.toggleLight(false);
								var46.setupFog();
								var51.render(var16, var50);
								GL11.glCallList(var6.surroundLists);
								GL11.glDisable(GL11.GL_LIGHTING);
								var46.setupFog();
								var6.renderClouds(var50);
								var46.setupFog();
								GL11.glEnable(GL11.GL_LIGHTING);
								if(var46.a.hitResult != null) {
									GL11.glDisable(GL11.GL_LIGHTING);
									GL11.glDisable(GL11.GL_ALPHA_TEST);
									var6.renderHit(var16, var46.a.hitResult, var46.a.editMode, var16.inventory.getSelected());
									LevelRenderer.renderHitOutline(var46.a.hitResult, var46.a.editMode);
									GL11.glEnable(GL11.GL_ALPHA_TEST);
									GL11.glEnable(GL11.GL_LIGHTING);
								}

								GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA);
								var46.setupFog();
								GL11.glCallList(var6.surroundLists + 1);
								GL11.glEnable(GL11.GL_BLEND);
								GL11.glColorMask(false, false, false, false);
								var48 = var6.render(var16, 1);
								GL11.glColorMask(true, true, true, true);
								if(var48 > 0) {
									GL11.glEnable(GL11.GL_TEXTURE_2D);
									GL11.glBindTexture(GL11.GL_TEXTURE_2D, var6.textures.getTextureId("/terrain.png"));
									GL11.glCallLists(var6.d);
									GL11.glDisable(GL11.GL_TEXTURE_2D);
								}

								GL11.glDepthMask(true);
								GL11.glDisable(GL11.GL_BLEND);
								GL11.glDisable(GL11.GL_LIGHTING);
								GL11.glDisable(GL11.GL_FOG);
								GL11.glDisable(GL11.GL_TEXTURE_2D);
								if(var46.a.hitResult != null) {
									GL11.glDepthFunc(GL11.GL_LESS);
									GL11.glDisable(GL11.GL_ALPHA_TEST);
									var6.renderHit(var16, var46.a.hitResult, var46.a.editMode, var16.inventory.getSelected());
									LevelRenderer.renderHitOutline(var46.a.hitResult, var46.a.editMode);
									GL11.glEnable(GL11.GL_ALPHA_TEST);
									GL11.glDepthFunc(GL11.GL_LEQUAL);
								}

								var46.a.hud.render(var46.a.screen != null, var60, var61);
							} else {
								GL11.glViewport(0, 0, var46.a.width, var46.a.height);
								GL11.glClearColor(0.0F, 0.0F, 0.0F, 0.0F);
								GL11.glClear(GL11.GL_DEPTH_BUFFER_BIT | GL11.GL_COLOR_BUFFER_BIT);
								GL11.glMatrixMode(GL11.GL_PROJECTION);
								GL11.glLoadIdentity();
								GL11.glMatrixMode(GL11.GL_MODELVIEW);
								GL11.glLoadIdentity();
								var46.initGui();
							}

							if(var46.a.screen != null) {
								var46.a.screen.render(var60, var61);
							}

							Thread.yield();
							Display.update();
						}

						Thread.sleep(5L);
						checkGlError("Post render");
						++var3;
					} catch (Exception var39) {
						this.setScreen(new ErrorScreen("Client error", "The game broke! [" + var39 + "]"));
						var39.printStackTrace();
					}

					while(System.currentTimeMillis() >= var1 + 1000L) {
						this.fpsString = var3 + " fps, " + Chunk.updates + " chunk updates";
						Chunk.updates = 0;
						var1 += 1000L;
						var3 = 0;
					}
				}
			}

			return;
		} catch (StopGameException var40) {
		} catch (Exception var41) {
			var41.printStackTrace();
			return;
		} finally {
			this.destroy();
		}

	}

	public final void grabMouse() {
		if(!this.mouseGrabbed) {
			this.mouseGrabbed = true;
			Mouse.setNativeCursor(true);
			this.setScreen((Screen)null);
			this.prevFrameTime = this.ticksRan + 10000;
		}
	}

	public final void pauseGame() {
		if(!(this.screen instanceof PauseScreen)) {
			this.setScreen(new PauseScreen());
		}
	}

	private void clickMouse() {
		if(this.hitResult != null) {
			int var1 = this.hitResult.x;
			int var2 = this.hitResult.y;
			int var3 = this.hitResult.z;
			if(this.editMode != 0) {
				if(this.hitResult.f == 0) {
					--var2;
				}

				if(this.hitResult.f == 1) {
					++var2;
				}

				if(this.hitResult.f == 2) {
					--var3;
				}

				if(this.hitResult.f == 3) {
					++var3;
				}

				if(this.hitResult.f == 4) {
					--var1;
				}

				if(this.hitResult.f == 5) {
					++var1;
				}
			}

			Tile var4 = Tile.tiles[this.level.getTile(var1, var2, var3)];
			if(this.editMode == 0) {
				if(var4 != Tile.unbreakable || this.player.userType >= 100) {
					boolean var8 = this.level.netSetTile(var1, var2, var3, 0);
					if(var4 != null && var8) {
						if(var4.soundType != Tile.SoundType.none) {
							//this.level.playSound("step." + var4.soundType.name, (float)var1, (float)var2, (float)var3, (var4.soundType.getVolume() + 1.0F) / 2.0F, var4.soundType.getPitch() * 0.8F);
							var4.destroy(this.level, var1, var2, var3, this.particleEngine);
						}
					}

					return;
				}
			} else {
				int var5 = this.player.inventory.getSelected();
				var4 = Tile.tiles[this.level.getTile(var1, var2, var3)];
				if(var4 == null || var4 == Tile.water || var4 == Tile.calmWater || var4 == Tile.lava || var4 == Tile.calmLava) {
					AABB var7 = Tile.tiles[var5].getTileAABB(var1, var2, var3);
					if(var7 == null || (this.player.bb.intersects(var7) ? false : this.level.isFree(var7))) {
						this.level.netSetTile(var1, var2, var3, this.player.inventory.getSelected());
						Tile.tiles[var5].onBlockAdded(this.level, var1, var2, var3);
					}
				}
			}

		}
	}

	private void tick() {
		InGameHud var14 = this.hud;

		int var17;
		for(var17 = 0; var17 < var14.messages.size(); ++var17) {
			++((ChatLine)var14.messages.get(var17)).counter;
		}

		GL11.glBindTexture(GL11.GL_TEXTURE_2D, this.textures.getTextureId("/terrain.png"));
		Textures var15 = this.textures;

		for(var17 = 0; var17 < var15.textureList.size(); ++var17) {
			TextureFX var3 = (TextureFX)var15.textureList.get(var17);
			var3.onTick();
			var15.textureBuffer.clear();
			var15.textureBuffer.put(var3.imageData);
			var15.textureBuffer.position(0).limit(var3.imageData.length);
			GL11.glTexSubImage2D(GL11.GL_TEXTURE_2D, 0, var3.iconIndex % 16 << 4, var3.iconIndex / 16 << 4, 16, 16, GL11.GL_RGBA, GL11.GL_UNSIGNED_BYTE, (ByteBuffer)var15.textureBuffer);
		}

		int var27;
		if(this.screen == null || this.screen.allowUserInput) {
			int var18;
			while(Mouse.next()) {
				var18 = Mouse.getEventDWheel();
				if(var18 != 0) {
					this.player.inventory.scrollHotbar(var18);
				}

				if(this.screen == null) {
					if(!this.mouseGrabbed && Mouse.getEventButtonState()) {
						this.grabMouse();
					} else {
						if(Mouse.getEventButton() == 0 && Mouse.getEventButtonState()) {
							this.clickMouse();
							this.prevFrameTime = this.ticksRan;
						}

						if(Mouse.getEventButton() == 1 && Mouse.getEventButtonState()) {
							this.editMode = (this.editMode + 1) % 2;
						}

						if(Mouse.getEventButton() == 2 && Mouse.getEventButtonState() && this.hitResult != null) {
							var17 = this.level.getTile(this.hitResult.x, this.hitResult.y, this.hitResult.z);
							if(var17 == Tile.grass.id) {
								var17 = Tile.dirt.id;
							}

							Inventory var24 = this.player.inventory;
							var27 = var24.containsTileAt(var17);
							if(var27 >= 0) {
								var24.selectedSlot = var27;
							} else if(var17 > 0 && User.creativeTiles.contains(Tile.tiles[var17])) {
								var24.setTile(Tile.tiles[var17]);
							}
						}
					}
				}

				if(this.screen != null) {
					this.screen.updateMouseEvents();
				}
			}

			label278:
			while(true) {
				do {
					do {
						if(!Keyboard.next()) {
							if(this.screen == null && Mouse.isButtonDown(0) && (float)(this.ticksRan - this.prevFrameTime) >= this.timer.ticksPerSecond / 4.0F && this.mouseGrabbed) {
								this.clickMouse();
								this.prevFrameTime = this.ticksRan;
							}
							break label278;
						}

						this.player.setKey(Keyboard.getEventKey(), Keyboard.getEventKeyState());
					} while(!Keyboard.getEventKeyState());

					if(this.screen != null) {
						this.screen.updateKeyboardEvents();
					}

					if(this.screen == null) {
						if(Keyboard.getEventKey() == 1) {
							this.pauseGame();
						}

						if(Keyboard.getEventKey() == this.options.load.key) {
							this.player.resetPos();
						}

						if(Keyboard.getEventKey() == this.options.save.key) {
							this.level.setSpawnPos((int)this.player.x, (int)this.player.y, (int)this.player.z, this.player.yRot);
							this.player.resetPos();
						}

						if(Keyboard.getEventKey() == 34 && this.level.entities.size() < 256) {
							this.level.entities.add(new Zombie(this.level, this.player.x, this.player.y, this.player.z));
						}

						if(Keyboard.getEventKey() == this.options.build.key) {
							this.setScreen(new InventoryScreen());
						}
					}

					for(var18 = 0; var18 < 9; ++var18) {
						if(Keyboard.getEventKey() == var18 + 2) {
							this.player.inventory.selectedSlot = var18;
						}
					}
				} while(Keyboard.getEventKey() != this.options.toggleFog.key);

				this.options.setOption(4, !Keyboard.isKeyDown(42) && !Keyboard.isKeyDown(54) ? 1 : -1);
			}
		}

		if(this.screen != null) {
			this.prevFrameTime = this.ticksRan + 10000;
		}

		if(this.screen != null) {
			this.screen.updateEvents();
			if(this.screen != null) {
				this.screen.tick();
			}
		}

		if(this.level != null) {
			LevelRenderer var22 = this.levelRenderer;
			++var22.cloudTickCounter;
			this.level.tickEntities();
			this.level.tick();
			this.particleEngine.tick();
			this.player.tick();
		}

	}

	public final void generateLevel(int var1) {
		String var2 = this.user != null ? this.user.name : "anonymous";
		this.setLevel(this.levelGen.generateLevel(var2, 128 << var1, 128 << var1, 64));
	}

	public final boolean loadLevel(String var1, int var2) {
		Level var3 = this.levelIo.load(this.minecraftUri, var1, var2);
		boolean var4 = var3 != null;
		if(!var4) {
			return false;
		} else {
			this.setLevel(var3);
			return true;
		}
	}

	public final void setLevel(Level var1) {
		this.level = var1;
		if(var1 != null) {
			var1.rendererContext = this;
		}

		if(this.levelRenderer != null) {
			LevelRenderer var2 = this.levelRenderer;
			if(var2.level != null) {
				var2.level.removeListener(var2);
			}

			var2.level = var1;
			if(var1 != null) {
				var1.addListener(var2);
				var2.compileSurroundingGround();
			}
		}

		if(this.particleEngine != null) {
			ParticleEngine var4 = this.particleEngine;
			var4.particles.clear();
		}

		if(this.player != null) {
			this.player.setLevel(var1);
			this.player.resetPos();
		}

		System.gc();
	}
}
