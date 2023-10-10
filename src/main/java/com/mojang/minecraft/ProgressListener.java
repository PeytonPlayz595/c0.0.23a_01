package com.mojang.minecraft;

import com.mojang.minecraft.renderer.Tesselator;
import org.lwjgl.opengl.Display;
import org.lwjgl.opengl.GL11;

public final class ProgressListener {
	private String title = "";
	private Minecraft minecraft;
	private String text = "";

	public ProgressListener(Minecraft var1) {
		this.minecraft = var1;
	}

	public final void beginLevelLoading(String var1) {
		if(!this.minecraft.running) {
			throw new StopGameException();
		} else {
			this.text = var1;
			int var3 = this.minecraft.width * 240 / this.minecraft.height;
			int var2 = this.minecraft.height * 240 / this.minecraft.height;
			GL11.glClear(GL11.GL_DEPTH_BUFFER_BIT);
			GL11.glMatrixMode(GL11.GL_PROJECTION);
			GL11.glLoadIdentity();
			GL11.glOrtho(0.0D, (double)var3, (double)var2, 0.0D, 100.0D, 300.0D);
			GL11.glMatrixMode(GL11.GL_MODELVIEW);
			GL11.glLoadIdentity();
			GL11.glTranslatef(0.0F, 0.0F, -200.0F);
		}
	}

	public final void levelLoadUpdate(String var1) {
		if(!this.minecraft.running) {
			throw new StopGameException();
		} else {
			this.title = var1;
			this.setLoadingProgress(-1);
		}
	}

	public final void setLoadingProgress(int var1) {
		if(!this.minecraft.running) {
			throw new StopGameException();
		} else {
			int var2 = this.minecraft.width * 240 / this.minecraft.height;
			int var3 = this.minecraft.height * 240 / this.minecraft.height;
			GL11.glClear(GL11.GL_DEPTH_BUFFER_BIT | GL11.GL_COLOR_BUFFER_BIT);
			Tesselator var4 = Tesselator.instance;
			GL11.glEnable(GL11.GL_TEXTURE_2D);
			int var5 = this.minecraft.textures.getTextureId("/dirt.png");
			GL11.glBindTexture(GL11.GL_TEXTURE_2D, var5);
			float var8 = 32.0F;
			var4.begin();
			var4.color(4210752);
			var4.vertexUV(0.0F, (float)var3, 0.0F, 0.0F, (float)var3 / var8);
			var4.vertexUV((float)var2, (float)var3, 0.0F, (float)var2 / var8, (float)var3 / var8);
			var4.vertexUV((float)var2, 0.0F, 0.0F, (float)var2 / var8, 0.0F);
			var4.vertexUV(0.0F, 0.0F, 0.0F, 0.0F, 0.0F);
			var4.end();
			if(var1 >= 0) {
				var5 = var2 / 2 - 50;
				int var6 = var3 / 2 + 16;
				GL11.glDisable(GL11.GL_TEXTURE_2D);
				var4.begin();
				var4.color(8421504);
				var4.vertex((float)var5, (float)var6, 0.0F);
				var4.vertex((float)var5, (float)(var6 + 2), 0.0F);
				var4.vertex((float)(var5 + 100), (float)(var6 + 2), 0.0F);
				var4.vertex((float)(var5 + 100), (float)var6, 0.0F);
				var4.color(8454016);
				var4.vertex((float)var5, (float)var6, 0.0F);
				var4.vertex((float)var5, (float)(var6 + 2), 0.0F);
				var4.vertex((float)(var5 + var1), (float)(var6 + 2), 0.0F);
				var4.vertex((float)(var5 + var1), (float)var6, 0.0F);
				var4.end();
				GL11.glEnable(GL11.GL_TEXTURE_2D);
			}

			this.minecraft.font.drawShadow(this.text, (var2 - this.minecraft.font.width(this.text)) / 2, var3 / 2 - 4 - 16, 16777215);
			this.minecraft.font.drawShadow(this.title, (var2 - this.minecraft.font.width(this.title)) / 2, var3 / 2 - 4 + 8, 16777215);
			Display.update();

			try {
				Thread.yield();
			} catch (Exception var7) {
			}
		}
	}
}
