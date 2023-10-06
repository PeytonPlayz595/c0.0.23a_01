package net.minecraft.src;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import org.lwjgl.opengl.GL11;
import org.lwjgl.opengl.GL12;

public class GuiIngame extends Gui {
	private static RenderItem itemRenderer = new RenderItem();
	private List chatMessageList = new ArrayList();
	private Random rand = new Random();
	private Minecraft mc;
	public String testMessage = null;
	private int updateCounter = 0;
	public float damageGuiPartialTime;
	float prevVignetteBrightness = 1.0F;

	public GuiIngame(Minecraft var1) {
		this.mc = var1;
	}

	public void renderGameOverlay(float var1, boolean var2, int var3, int var4) {
		ScaledResolution var5 = new ScaledResolution(this.mc.displayWidth, this.mc.displayHeight);
		int var6 = var5.getScaledWidth();
		int var7 = var5.getScaledHeight();
		FontRenderer var8 = this.mc.fontRenderer;
		this.mc.entityRenderer.setupOverlayRendering();
		GL11.glEnable(GL11.GL_BLEND);
		if(this.mc.gameSettings.fancyGraphics) {
			this.renderVignette(this.mc.thePlayer.getEntityBrightness(var1), var6, var7);
		}

		GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
		GL11.glBindTexture(GL11.GL_TEXTURE_2D, this.mc.renderEngine.getTexture("/gui/gui.png"));
		InventoryPlayer var9 = this.mc.thePlayer.inventory;
		this.zLevel = -90.0F;
		this.drawTexturedModalRect(var6 / 2 - 91, var7 - 22, 0, 0, 182, 22);
		this.drawTexturedModalRect(var6 / 2 - 91 - 1 + var9.currentItem * 20, var7 - 22 - 1, 0, 22, 24, 22);
		GL11.glBindTexture(GL11.GL_TEXTURE_2D, this.mc.renderEngine.getTexture("/gui/icons.png"));
		GL11.glEnable(GL11.GL_BLEND);
		GL11.glBlendFunc(GL11.GL_ONE_MINUS_DST_COLOR, GL11.GL_ONE_MINUS_SRC_COLOR);
		this.drawTexturedModalRect(var6 / 2 - 7, var7 / 2 - 7, 0, 0, 16, 16);
		GL11.glDisable(GL11.GL_BLEND);
		boolean var10 = this.mc.thePlayer.heartsLife / 3 % 2 == 1;
		if(this.mc.thePlayer.heartsLife < 10) {
			var10 = false;
		}

		int var11 = this.mc.thePlayer.health;
		int var12 = this.mc.thePlayer.prevHealth;
		this.rand.setSeed((long)(this.updateCounter * 312871));
		int var13;
		int var14;
		int var15;
		if(this.mc.playerController.shouldDrawHUD()) {
			var13 = this.mc.thePlayer.getPlayerArmorValue();

			int var16;
			for(var14 = 0; var14 < 10; ++var14) {
				var15 = var7 - 32;
				if(var13 > 0) {
					var16 = var6 / 2 + 91 - var14 * 8 - 9;
					if(var14 * 2 + 1 < var13) {
						this.drawTexturedModalRect(var16, var15, 34, 9, 9, 9);
					}

					if(var14 * 2 + 1 == var13) {
						this.drawTexturedModalRect(var16, var15, 25, 9, 9, 9);
					}

					if(var14 * 2 + 1 > var13) {
						this.drawTexturedModalRect(var16, var15, 16, 9, 9, 9);
					}
				}

				byte var25 = 0;
				if(var10) {
					var25 = 1;
				}

				int var17 = var6 / 2 - 91 + var14 * 8;
				if(var11 <= 4) {
					var15 += this.rand.nextInt(2);
				}

				this.drawTexturedModalRect(var17, var15, 16 + var25 * 9, 0, 9, 9);
				if(var10) {
					if(var14 * 2 + 1 < var12) {
						this.drawTexturedModalRect(var17, var15, 70, 0, 9, 9);
					}

					if(var14 * 2 + 1 == var12) {
						this.drawTexturedModalRect(var17, var15, 79, 0, 9, 9);
					}
				}

				if(var14 * 2 + 1 < var11) {
					this.drawTexturedModalRect(var17, var15, 52, 0, 9, 9);
				}

				if(var14 * 2 + 1 == var11) {
					this.drawTexturedModalRect(var17, var15, 61, 0, 9, 9);
				}
			}

			if(this.mc.thePlayer.isInsideOfMaterial(Material.water)) {
				var14 = (int)Math.ceil((double)(this.mc.thePlayer.air - 2) * 10.0D / 300.0D);
				var15 = (int)Math.ceil((double)this.mc.thePlayer.air * 10.0D / 300.0D) - var14;

				for(var16 = 0; var16 < var14 + var15; ++var16) {
					if(var16 < var14) {
						this.drawTexturedModalRect(var6 / 2 - 91 + var16 * 8, var7 - 32 - 9, 16, 18, 9, 9);
					} else {
						this.drawTexturedModalRect(var6 / 2 - 91 + var16 * 8, var7 - 32 - 9, 25, 18, 9, 9);
					}
				}
			}
		}

		GL11.glDisable(GL11.GL_BLEND);
		GL11.glEnable(GL12.GL_RESCALE_NORMAL);
		GL11.glPushMatrix();
		GL11.glRotatef(180.0F, 1.0F, 0.0F, 0.0F);
		RenderHelper.enableStandardItemLighting();
		GL11.glPopMatrix();

		for(var13 = 0; var13 < 9; ++var13) {
			var14 = var6 / 2 - 90 + var13 * 20 + 2;
			var15 = var7 - 16 - 3;
			this.renderInventorySlot(var13, var14, var15, var1);
		}

		RenderHelper.disableStandardItemLighting();
		GL11.glDisable(GL12.GL_RESCALE_NORMAL);
		if(this.mc.gameSettings.showFPS) {
			var8.drawStringWithShadow("Minecraft Infdev (" + this.mc.debug + ")", 2, 2, 16777215);
			var8.drawStringWithShadow(this.mc.debugInfoRenders(), 2, 12, 16777215);
			var8.drawStringWithShadow(this.mc.getEntityDebug(), 2, 22, 16777215);
			var8.drawStringWithShadow(this.mc.debugInfoEntities(), 2, 32, 16777215);
			long var22 = Runtime.getRuntime().maxMemory();
			long var26 = Runtime.getRuntime().totalMemory();
			long var27 = Runtime.getRuntime().freeMemory();
			long var19 = var26 - var27;
			String var21 = "Used memory: " + var19 * 100L / var22 + "% (" + var19 / 1024L / 1024L + "MB) of " + var22 / 1024L / 1024L + "MB";
			this.drawString(var8, var21, var6 - var8.getStringWidth(var21) - 2, 2, 14737632);
			var21 = "Allocated memory: " + var26 * 100L / var22 + "% (" + var26 / 1024L / 1024L + "MB)";
			this.drawString(var8, var21, var6 - var8.getStringWidth(var21) - 2, 12, 14737632);
		} else {
			var8.drawStringWithShadow("Minecraft Infdev", 2, 2, 16777215);
		}

		byte var23 = 10;
		boolean var24 = false;

		for(var15 = 0; var15 < this.chatMessageList.size() && var15 < var23; ++var15) {
			if(((ChatLine)this.chatMessageList.get(var15)).updateCounter < 200 || var24) {
				var8.drawStringWithShadow(((ChatLine)this.chatMessageList.get(var15)).message, 2, var7 - 8 - var15 * 9 - 20, 16777215);
			}
		}

	}

	private void renderVignette(float var1, int var2, int var3) {
		var1 = 1.0F - var1;
		if(var1 < 0.0F) {
			var1 = 0.0F;
		}

		if(var1 > 1.0F) {
			var1 = 1.0F;
		}

		this.prevVignetteBrightness = (float)((double)this.prevVignetteBrightness + (double)(var1 - this.prevVignetteBrightness) * 0.01D);
		GL11.glDisable(GL11.GL_DEPTH_TEST);
		GL11.glDepthMask(false);
		GL11.glBlendFunc(GL11.GL_ZERO, GL11.GL_ONE_MINUS_SRC_COLOR);
		GL11.glColor4f(this.prevVignetteBrightness, this.prevVignetteBrightness, this.prevVignetteBrightness, 1.0F);
		GL11.glBindTexture(GL11.GL_TEXTURE_2D, this.mc.renderEngine.getTexture("/misc/vignette.png"));
		Tessellator var4 = Tessellator.instance;
		var4.startDrawingQuads();
		var4.addVertexWithUV(0.0D, (double)var3, -90.0D, 0.0D, 1.0D);
		var4.addVertexWithUV((double)var2, (double)var3, -90.0D, 1.0D, 1.0D);
		var4.addVertexWithUV((double)var2, 0.0D, -90.0D, 1.0D, 0.0D);
		var4.addVertexWithUV(0.0D, 0.0D, -90.0D, 0.0D, 0.0D);
		var4.draw();
		GL11.glDepthMask(true);
		GL11.glEnable(GL11.GL_DEPTH_TEST);
		GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
		GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA);
	}

	private void renderInventorySlot(int var1, int var2, int var3, float var4) {
		ItemStack var5 = this.mc.thePlayer.inventory.mainInventory[var1];
		if(var5 != null) {
			float var6 = (float)var5.animationsToGo - var4;
			if(var6 > 0.0F) {
				GL11.glPushMatrix();
				float var7 = 1.0F + var6 / 5.0F;
				GL11.glTranslatef((float)(var2 + 8), (float)(var3 + 12), 0.0F);
				GL11.glScalef(1.0F / var7, (var7 + 1.0F) / 2.0F, 1.0F);
				GL11.glTranslatef((float)(-(var2 + 8)), (float)(-(var3 + 12)), 0.0F);
			}

			itemRenderer.drawItemIntoGui(this.mc.fontRenderer, this.mc.renderEngine, var5, var2, var3);
			if(var6 > 0.0F) {
				GL11.glPopMatrix();
			}

			itemRenderer.renderItemOverlayIntoGUI(this.mc.fontRenderer, this.mc.renderEngine, var5, var2, var3);
		}
	}

	public void updateTick() {
		++this.updateCounter;

		for(int var1 = 0; var1 < this.chatMessageList.size(); ++var1) {
			++((ChatLine)this.chatMessageList.get(var1)).updateCounter;
		}

	}
}
