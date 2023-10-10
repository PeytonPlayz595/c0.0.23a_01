package com.mojang.minecraft.gui;

import com.mojang.minecraft.renderer.Tesselator;
import org.lwjgl.opengl.GL11;

public class Gui {
	protected float zLevel = 0.0F;

	protected static void fill(int var0, int var1, int var2, int var3, int var4) {
		float var5 = (float)(var4 >>> 24) / 255.0F;
		float var6 = (float)(var4 >> 16 & 255) / 255.0F;
		float var7 = (float)(var4 >> 8 & 255) / 255.0F;
		float var9 = (float)(var4 & 255) / 255.0F;
		Tesselator var8 = Tesselator.instance;
		GL11.glEnable(GL11.GL_BLEND);
		GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA);
		GL11.glColor4f(var6, var7, var9, var5);
		var8.begin();
		var8.vertex((float)var0, (float)var3, 0.0F);
		var8.vertex((float)var2, (float)var3, 0.0F);
		var8.vertex((float)var2, (float)var1, 0.0F);
		var8.vertex((float)var0, (float)var1, 0.0F);
		var8.end();
		GL11.glDisable(GL11.GL_BLEND);
	}

	protected static void fillGradient(int var0, int var1, int var2, int var3, int var4, int var5) {
		float var6 = (float)(var4 >>> 24) / 255.0F;
		float var7 = (float)(var4 >> 16 & 255) / 255.0F;
		float var8 = (float)(var4 >> 8 & 255) / 255.0F;
		float var12 = (float)(var4 & 255) / 255.0F;
		float var9 = (float)(var5 >>> 24) / 255.0F;
		float var10 = (float)(var5 >> 16 & 255) / 255.0F;
		float var11 = (float)(var5 >> 8 & 255) / 255.0F;
		float var13 = (float)(var5 & 255) / 255.0F;
		GL11.glEnable(GL11.GL_BLEND);
		GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA);
		GL11.glBegin(GL11.GL_QUADS);
		GL11.glColor4f(var7, var8, var12, var6);
		GL11.glVertex2f((float)var2, (float)var1);
		GL11.glVertex2f((float)var0, (float)var1);
		GL11.glColor4f(var10, var11, var13, var9);
		GL11.glVertex2f((float)var0, (float)var3);
		GL11.glVertex2f((float)var2, (float)var3);
		GL11.glEnd();
		GL11.glDisable(GL11.GL_BLEND);
	}

	public static void drawCenteredString(Font var0, String var1, int var2, int var3, int var4) {
		var0.drawShadow(var1, var2 - var0.width(var1) / 2, var3, var4);
	}

	public static void drawString(Font var0, String var1, int var2, int var3, int var4) {
		var0.drawShadow(var1, var2, var3, var4);
	}

	public final void blit(int var1, int var2, int var3, int var4, int var5, int var6) {
		float var7 = 0.00390625F;
		float var8 = 0.00390625F;
		Tesselator var9 = Tesselator.instance;
		var9.begin();
		var9.vertexUV((float)var1, (float)(var2 + var6), this.zLevel, (float)var3 * var7, (float)(var4 + var6) * var8);
		var9.vertexUV((float)(var1 + var5), (float)(var2 + var6), this.zLevel, (float)(var3 + var5) * var7, (float)(var4 + var6) * var8);
		var9.vertexUV((float)(var1 + var5), (float)var2, this.zLevel, (float)(var3 + var5) * var7, (float)var4 * var8);
		var9.vertexUV((float)var1, (float)var2, this.zLevel, (float)var3 * var7, (float)var4 * var8);
		var9.end();
	}
}
