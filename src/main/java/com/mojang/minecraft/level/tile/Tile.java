package com.mojang.minecraft.level.tile;

import com.mojang.minecraft.Entity;
import com.mojang.minecraft.level.Level;
import com.mojang.minecraft.level.liquid.Liquid;
import com.mojang.minecraft.particle.Particle;
import com.mojang.minecraft.particle.ParticleEngine;
import com.mojang.minecraft.phys.AABB;
import com.mojang.minecraft.renderer.Tesselator;
import java.util.Random;

public class Tile {
	protected static Random random = new Random();
	public static final Tile[] tiles = new Tile[256];
	public static final boolean[] shouldTick = new boolean[256];
	private static int[] tickSpeed = new int[256];
	public static final Tile rock = (new Tile(1, 1)).setSoundAndGravity(Tile.SoundType.stone, 1.0F, 1.0F);
	public static final Tile grass = (new GrassTile(2)).setSoundAndGravity(Tile.SoundType.grass, 0.9F, 1.0F);
	public static final Tile dirt = (new DirtTile(3, 2)).setSoundAndGravity(Tile.SoundType.grass, 0.8F, 1.0F);
	public static final Tile wood = (new Tile(4, 16)).setSoundAndGravity(Tile.SoundType.stone, 1.0F, 1.0F);
	public static final Tile stoneBrick = (new Tile(5, 4)).setSoundAndGravity(Tile.SoundType.wood, 1.0F, 1.0F);
	public static final Tile bush = (new Bush(6, 15)).setSoundAndGravity(Tile.SoundType.none, 0.7F, 1.0F);
	public static final Tile unbreakable = (new Tile(7, 17)).setSoundAndGravity(Tile.SoundType.stone, 1.0F, 1.0F);
	public static final Tile water = (new LiquidTile(8, Liquid.water)).setSoundAndGravity(Tile.SoundType.none, 1.0F, 1.0F);
	public static final Tile calmWater = (new CalmLiquidTile(9, Liquid.water)).setSoundAndGravity(Tile.SoundType.none, 1.0F, 1.0F);
	public static final Tile lava = (new LiquidTile(10, Liquid.lava)).setSoundAndGravity(Tile.SoundType.none, 1.0F, 1.0F);
	public static final Tile calmLava = (new CalmLiquidTile(11, Liquid.lava)).setSoundAndGravity(Tile.SoundType.none, 1.0F, 1.0F);
	public static final Tile sand = (new FallingTile(12, 18)).setSoundAndGravity(Tile.SoundType.gravel, 0.8F, 1.0F);
	public static final Tile gravel = (new FallingTile(13, 19)).setSoundAndGravity(Tile.SoundType.gravel, 0.8F, 1.0F);
	public static final Tile oreGold = (new Tile(14, 32)).setSoundAndGravity(Tile.SoundType.stone, 1.0F, 1.0F);
	public static final Tile oreIron = (new Tile(15, 33)).setSoundAndGravity(Tile.SoundType.stone, 1.0F, 1.0F);
	public static final Tile oreCoal = (new Tile(16, 34)).setSoundAndGravity(Tile.SoundType.stone, 1.0F, 1.0F);
	public static final Tile log = (new LogTile(17)).setSoundAndGravity(Tile.SoundType.wood, 1.0F, 1.0F);
	public static final Tile leaf = (new LeafTile(18, 22, true)).setSoundAndGravity(Tile.SoundType.grass, 1.0F, 0.4F);
	public static final Tile sponge = (new SpongeTile(19)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 0.9F);
	public static final Tile glass = (new GlassTile(20, 49, false)).setSoundAndGravity(Tile.SoundType.metal, 1.0F, 1.0F);
	public static final Tile clothRed = (new Tile(21, 64)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothOrange = (new Tile(22, 65)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothYellow = (new Tile(23, 66)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothChartreuse = (new Tile(24, 67)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothGreen = (new Tile(25, 68)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothSpringGreen = (new Tile(26, 69)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothCyan = (new Tile(27, 70)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothCapri = (new Tile(28, 71)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothUltramarine = (new Tile(29, 72)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothViolet = (new Tile(30, 73)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothPurple = (new Tile(31, 74)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothMagenta = (new Tile(32, 75)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothRose = (new Tile(33, 76)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothDarkGray = (new Tile(34, 77)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothGray = (new Tile(35, 78)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile clothWhite = (new Tile(36, 79)).setSoundAndGravity(Tile.SoundType.cloth, 1.0F, 1.0F);
	public static final Tile plantYellow = (new Bush(37, 13)).setSoundAndGravity(Tile.SoundType.none, 0.7F, 1.0F);
	public static final Tile plantRed = (new Bush(38, 12)).setSoundAndGravity(Tile.SoundType.none, 0.7F, 1.0F);
	public static final Tile mushroomBrown = (new Bush(39, 29)).setSoundAndGravity(Tile.SoundType.none, 0.7F, 1.0F);
	public static final Tile mushroomRed = (new Bush(40, 28)).setSoundAndGravity(Tile.SoundType.none, 0.7F, 1.0F);
	public static final Tile blockGold = (new Tile(41, 40)).setSoundAndGravity(Tile.SoundType.metal, 0.7F, 1.0F);
	public int tex;
	public final int id;
	public Tile.SoundType soundType;
	private float xx0;
	private float yy0;
	private float zz0;
	private float xx1;
	private float yy1;
	private float zz1;
	public float particleGravity;

	protected Tile(int var1) {
		tiles[var1] = this;
		this.id = var1;
		this.setShape(0.0F, 0.0F, 0.0F, 1.0F, 1.0F, 1.0F);
	}

	protected final Tile setSoundAndGravity(Tile.SoundType var1, float var2, float var3) {
		this.particleGravity = var3;
		this.soundType = var1;
		return this;
	}

	protected final void setTicking(boolean var1) {
		shouldTick[this.id] = var1;
	}

	protected final void setShape(float var1, float var2, float var3, float var4, float var5, float var6) {
		this.xx0 = var1;
		this.yy0 = var2;
		this.zz0 = var3;
		this.xx1 = var4;
		this.yy1 = var5;
		this.zz1 = var6;
	}

	protected Tile(int var1, int var2) {
		this(var1);
		this.tex = var2;
	}

	public final void setTickSpeed(int var1) {
		tickSpeed[this.id] = 16;
	}

	public boolean render(Tesselator var1, Level var2, int var3, int var4, int var5, int var6) {
		boolean var7 = false;
		float var8 = 0.5F;
		float var9 = 0.8F;
		float var10 = 0.6F;
		float var11;
		if(this.shouldRenderFace(var2, var4, var5 - 1, var6, var3, 0)) {
			var11 = this.getBrightness(var2, var4, var5 - 1, var6);
			var1.color(var8 * var11, var8 * var11, var8 * var11);
			this.renderFace(var1, var4, var5, var6, 0);
			var7 = true;
		}

		if(this.shouldRenderFace(var2, var4, var5 + 1, var6, var3, 1)) {
			var11 = this.getBrightness(var2, var4, var5 + 1, var6);
			var1.color(var11 * 1.0F, var11 * 1.0F, var11 * 1.0F);
			this.renderFace(var1, var4, var5, var6, 1);
			var7 = true;
		}

		if(this.shouldRenderFace(var2, var4, var5, var6 - 1, var3, 2)) {
			var11 = this.getBrightness(var2, var4, var5, var6 - 1);
			var1.color(var9 * var11, var9 * var11, var9 * var11);
			this.renderFace(var1, var4, var5, var6, 2);
			var7 = true;
		}

		if(this.shouldRenderFace(var2, var4, var5, var6 + 1, var3, 3)) {
			var11 = this.getBrightness(var2, var4, var5, var6 + 1);
			var1.color(var9 * var11, var9 * var11, var9 * var11);
			this.renderFace(var1, var4, var5, var6, 3);
			var7 = true;
		}

		if(this.shouldRenderFace(var2, var4 - 1, var5, var6, var3, 4)) {
			var11 = this.getBrightness(var2, var4 - 1, var5, var6);
			var1.color(var10 * var11, var10 * var11, var10 * var11);
			this.renderFace(var1, var4, var5, var6, 4);
			var7 = true;
		}

		if(this.shouldRenderFace(var2, var4 + 1, var5, var6, var3, 5)) {
			var11 = this.getBrightness(var2, var4 + 1, var5, var6);
			var1.color(var10 * var11, var10 * var11, var10 * var11);
			this.renderFace(var1, var4, var5, var6, 5);
			var7 = true;
		}

		return var7;
	}

	protected float getBrightness(Level var1, int var2, int var3, int var4) {
		return var1.getBrightness(var2, var3, var4);
	}

	protected boolean shouldRenderFace(Level var1, int var2, int var3, int var4, int var5, int var6) {
		return var5 == 1 ? false : !var1.isSolidTile(var2, var3, var4);
	}

	protected int getTexture(int var1) {
		return this.tex;
	}

	public void renderFace(Tesselator var1, int var2, int var3, int var4, int var5) {
		int var6 = this.getTexture(var5);
		int var7 = var6 % 16 << 4;
		var6 = var6 / 16 << 4;
		float var8 = (float)var7 / 256.0F;
		float var17 = ((float)var7 + 15.99F) / 256.0F;
		float var9 = (float)var6 / 256.0F;
		float var16 = ((float)var6 + 15.99F) / 256.0F;
		float var10 = (float)var2 + this.xx0;
		float var14 = (float)var2 + this.xx1;
		float var11 = (float)var3 + this.yy0;
		float var15 = (float)var3 + this.yy1;
		float var12 = (float)var4 + this.zz0;
		float var13 = (float)var4 + this.zz1;
		if(var5 == 0) {
			var1.vertexUV(var10, var11, var13, var8, var16);
			var1.vertexUV(var10, var11, var12, var8, var9);
			var1.vertexUV(var14, var11, var12, var17, var9);
			var1.vertexUV(var14, var11, var13, var17, var16);
		} else if(var5 == 1) {
			var1.vertexUV(var14, var15, var13, var17, var16);
			var1.vertexUV(var14, var15, var12, var17, var9);
			var1.vertexUV(var10, var15, var12, var8, var9);
			var1.vertexUV(var10, var15, var13, var8, var16);
		} else if(var5 == 2) {
			var1.vertexUV(var10, var15, var12, var17, var9);
			var1.vertexUV(var14, var15, var12, var8, var9);
			var1.vertexUV(var14, var11, var12, var8, var16);
			var1.vertexUV(var10, var11, var12, var17, var16);
		} else if(var5 == 3) {
			var1.vertexUV(var10, var15, var13, var8, var9);
			var1.vertexUV(var10, var11, var13, var8, var16);
			var1.vertexUV(var14, var11, var13, var17, var16);
			var1.vertexUV(var14, var15, var13, var17, var9);
		} else if(var5 == 4) {
			var1.vertexUV(var10, var15, var13, var17, var9);
			var1.vertexUV(var10, var15, var12, var8, var9);
			var1.vertexUV(var10, var11, var12, var8, var16);
			var1.vertexUV(var10, var11, var13, var17, var16);
		} else if(var5 == 5) {
			var1.vertexUV(var14, var11, var13, var8, var16);
			var1.vertexUV(var14, var11, var12, var17, var16);
			var1.vertexUV(var14, var15, var12, var17, var9);
			var1.vertexUV(var14, var15, var13, var8, var9);
		}
	}

	public final void renderBackFace(Tesselator var1, int var2, int var3, int var4, int var5) {
		int var6 = this.getTexture(var5);
		float var7 = (float)(var6 % 16) / 16.0F;
		float var8 = var7 + 0.999F / 16.0F;
		float var16 = (float)(var6 / 16) / 16.0F;
		float var9 = var16 + 0.999F / 16.0F;
		float var10 = (float)var2 + this.xx0;
		float var14 = (float)var2 + this.xx1;
		float var11 = (float)var3 + this.yy0;
		float var15 = (float)var3 + this.yy1;
		float var12 = (float)var4 + this.zz0;
		float var13 = (float)var4 + this.zz1;
		if(var5 == 0) {
			var1.vertexUV(var14, var11, var13, var8, var9);
			var1.vertexUV(var14, var11, var12, var8, var16);
			var1.vertexUV(var10, var11, var12, var7, var16);
			var1.vertexUV(var10, var11, var13, var7, var9);
		}

		if(var5 == 1) {
			var1.vertexUV(var10, var15, var13, var7, var9);
			var1.vertexUV(var10, var15, var12, var7, var16);
			var1.vertexUV(var14, var15, var12, var8, var16);
			var1.vertexUV(var14, var15, var13, var8, var9);
		}

		if(var5 == 2) {
			var1.vertexUV(var10, var11, var12, var8, var9);
			var1.vertexUV(var14, var11, var12, var7, var9);
			var1.vertexUV(var14, var15, var12, var7, var16);
			var1.vertexUV(var10, var15, var12, var8, var16);
		}

		if(var5 == 3) {
			var1.vertexUV(var14, var15, var13, var8, var16);
			var1.vertexUV(var14, var11, var13, var8, var9);
			var1.vertexUV(var10, var11, var13, var7, var9);
			var1.vertexUV(var10, var15, var13, var7, var16);
		}

		if(var5 == 4) {
			var1.vertexUV(var10, var11, var13, var8, var9);
			var1.vertexUV(var10, var11, var12, var7, var9);
			var1.vertexUV(var10, var15, var12, var7, var16);
			var1.vertexUV(var10, var15, var13, var8, var16);
		}

		if(var5 == 5) {
			var1.vertexUV(var14, var15, var13, var7, var16);
			var1.vertexUV(var14, var15, var12, var8, var16);
			var1.vertexUV(var14, var11, var12, var8, var9);
			var1.vertexUV(var14, var11, var13, var7, var9);
		}

	}

	public static void renderFaceNoTexture(Entity var0, Tesselator var1, int var2, int var3, int var4, int var5) {
		float var6 = (float)var2;
		float var7 = (float)var2 + 1.0F;
		float var8 = (float)var3;
		float var9 = (float)var3 + 1.0F;
		float var10 = (float)var4;
		float var11 = (float)var4 + 1.0F;
		if(var5 == 0 && (float)var3 > var0.y) {
			var1.vertex(var6, var8, var11);
			var1.vertex(var6, var8, var10);
			var1.vertex(var7, var8, var10);
			var1.vertex(var7, var8, var11);
		}

		if(var5 == 1 && (float)var3 < var0.y) {
			var1.vertex(var7, var9, var11);
			var1.vertex(var7, var9, var10);
			var1.vertex(var6, var9, var10);
			var1.vertex(var6, var9, var11);
		}

		if(var5 == 2 && (float)var4 > var0.z) {
			var1.vertex(var6, var9, var10);
			var1.vertex(var7, var9, var10);
			var1.vertex(var7, var8, var10);
			var1.vertex(var6, var8, var10);
		}

		if(var5 == 3 && (float)var4 < var0.z) {
			var1.vertex(var6, var9, var11);
			var1.vertex(var6, var8, var11);
			var1.vertex(var7, var8, var11);
			var1.vertex(var7, var9, var11);
		}

		if(var5 == 4 && (float)var2 > var0.x) {
			var1.vertex(var6, var9, var11);
			var1.vertex(var6, var9, var10);
			var1.vertex(var6, var8, var10);
			var1.vertex(var6, var8, var11);
		}

		if(var5 == 5 && (float)var2 < var0.x) {
			var1.vertex(var7, var8, var11);
			var1.vertex(var7, var8, var10);
			var1.vertex(var7, var9, var10);
			var1.vertex(var7, var9, var11);
		}

	}

	public AABB getTileAABB(int var1, int var2, int var3) {
		return new AABB((float)var1, (float)var2, (float)var3, (float)(var1 + 1), (float)(var2 + 1), (float)(var3 + 1));
	}

	public boolean blocksLight() {
		return true;
	}

	public boolean isSolid() {
		return true;
	}

	public void tick(Level var1, int var2, int var3, int var4, Random var5) {
	}

	public final void destroy(Level var1, int var2, int var3, int var4, ParticleEngine var5) {
		for(int var6 = 0; var6 < 4; ++var6) {
			for(int var7 = 0; var7 < 4; ++var7) {
				for(int var8 = 0; var8 < 4; ++var8) {
					float var9 = (float)var2 + ((float)var6 + 0.5F) / (float)4;
					float var10 = (float)var3 + ((float)var7 + 0.5F) / (float)4;
					float var11 = (float)var4 + ((float)var8 + 0.5F) / (float)4;
					Particle var12 = new Particle(var1, var9, var10, var11, var9 - (float)var2 - 0.5F, var10 - (float)var3 - 0.5F, var11 - (float)var4 - 0.5F, this);
					var5.particles.add(var12);
				}
			}
		}

	}

	public Liquid getLiquidType() {
		return Liquid.none;
	}

	public void neighborChanged(Level var1, int var2, int var3, int var4, int var5) {
	}

	public void onBlockAdded(Level var1, int var2, int var3, int var4) {
	}

	public int getTickDelay() {
		return 0;
	}

	public void onTileAdded(Level var1, int var2, int var3, int var4) {
	}

	public void onTileRemoved(Level var1, int var2, int var3, int var4) {
	}

	public static enum SoundType {
		none("-", 0.0F, 0.0F),
		grass("grass", 0.6F, 1.0F),
		cloth("grass", 0.7F, 1.2F),
		gravel("gravel", 1.0F, 1.0F),
		stone("stone", 1.0F, 1.0F),
		metal("stone", 1.0F, 2.0F),
		wood("wood", 1.0F, 1.0F);

		public final String name;
		private final float volume;
		private final float pitch;

		private SoundType(String var3, float var4, float var5) {
			this.name = var3;
			this.volume = var4;
			this.pitch = var5;
		}

		public final float getVolume() {
			return this.volume / (Tile.random.nextFloat() * 0.4F + 1.0F) * 0.5F;
		}

		public final float getPitch() {
			return this.pitch / (Tile.random.nextFloat() * 0.2F + 0.9F);
		}
	}
}
