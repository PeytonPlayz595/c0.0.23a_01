package com.mojang.minecraft.gui;

import com.mojang.minecraft.ChatLine;
import com.mojang.minecraft.Minecraft;
import com.mojang.minecraft.level.tile.Tile;
import com.mojang.minecraft.player.Inventory;
import com.mojang.minecraft.renderer.Tesselator;
import com.mojang.minecraft.renderer.Textures;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.lwjgl.input.Keyboard;
import org.lwjgl.opengl.GL11;

public final class InGameHud extends Gui {
	public List messages = new ArrayList();
	private Minecraft minecraft;
	private int scaledWidth;
	private int scaledHeight;
	public String hoveredUsername = null;

	public InGameHud(Minecraft var1, int var2, int var3) {
		this.minecraft = var1;
		this.scaledWidth = var2 * 240 / var3;
		this.scaledHeight = var3 * 240 / var3;
	}

	public final void render(boolean var1, int var2, int var3) {
		Font var4 = this.minecraft.font;
		this.minecraft.renderHelper.initGui();
		Textures var5 = this.minecraft.textures;
		GL11.glBindTexture(GL11.GL_TEXTURE_2D, this.minecraft.textures.getTextureId("/gui.png"));
		GL11.glEnable(GL11.GL_TEXTURE_2D);
		Tesselator var6 = Tesselator.instance;
		GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
		GL11.glEnable(GL11.GL_BLEND);
		Inventory var7 = this.minecraft.player.inventory;
		this.zLevel = -90.0F;
		this.blit(this.scaledWidth / 2 - 91, this.scaledHeight - 22, 0, 0, 182, 22);
		this.blit(this.scaledWidth / 2 - 91 - 1 + var7.selectedSlot * 20, this.scaledHeight - 22 - 1, 0, 22, 24, 22);
		GL11.glDisable(GL11.GL_BLEND);

		int var8;
		int var9;
		int var10;
		for(var8 = 0; var8 < var7.slots.length; ++var8) {
			var9 = var7.slots[var8];
			if(var9 > 0) {
				GL11.glPushMatrix();
				GL11.glTranslatef((float)(this.scaledWidth / 2 - 90 + var8 * 20), (float)(this.scaledHeight - 16), -50.0F);
				GL11.glScalef(10.0F, 10.0F, 10.0F);
				GL11.glTranslatef(1.0F, 0.5F, 0.0F);
				GL11.glRotatef(-30.0F, 1.0F, 0.0F, 0.0F);
				GL11.glRotatef(45.0F, 0.0F, 1.0F, 0.0F);
				GL11.glTranslatef(-1.5F, 0.5F, 0.5F);
				GL11.glScalef(-1.0F, -1.0F, -1.0F);
				var10 = var5.getTextureId("/terrain.png");
				GL11.glBindTexture(GL11.GL_TEXTURE_2D, var10);
				GL11.glEnable(GL11.GL_TEXTURE_2D);
				var6.begin();
				Tile.tiles[var9].render(var6, this.minecraft.level, 0, -2, 0, 0);
				var6.end();
				GL11.glDisable(GL11.GL_TEXTURE_2D);
				GL11.glPopMatrix();
			}
		}

		var4.drawShadow("0.0.23a_01", 2, 2, 16777215);
		if(this.minecraft.options.showFPS) {
			var4.drawShadow(this.minecraft.fpsString, 2, 12, 16777215);
		}

		byte var18 = 10;
		boolean var19 = false;
		if(this.minecraft.screen instanceof ChatScreen) {
			var18 = 20;
			var19 = true;
		}

		for(var10 = 0; var10 < this.messages.size() && var10 < var18; ++var10) {
			if(((ChatLine)this.messages.get(var10)).counter < 200 || var19) {
				var4.drawShadow(((ChatLine)this.messages.get(var10)).message, 2, this.scaledHeight - 8 - var10 * 9 - 20, 16777215);
			}
		}

		var10 = this.scaledWidth / 2;
		int var11 = this.scaledHeight / 2;
		GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
		var6.begin();
		var6.vertex((float)(var10 + 1), (float)(var11 - 4), 0.0F);
		var6.vertex((float)var10, (float)(var11 - 4), 0.0F);
		var6.vertex((float)var10, (float)(var11 + 5), 0.0F);
		var6.vertex((float)(var10 + 1), (float)(var11 + 5), 0.0F);
		var6.vertex((float)(var10 + 5), (float)var11, 0.0F);
		var6.vertex((float)(var10 - 4), (float)var11, 0.0F);
		var6.vertex((float)(var10 - 4), (float)(var11 + 1), 0.0F);
		var6.vertex((float)(var10 + 5), (float)(var11 + 1), 0.0F);
		var6.end();
		this.hoveredUsername = null;
	}

	public final void addChatMessage(String var1) {
		this.messages.add(0, new ChatLine(var1));

		while(this.messages.size() > 50) {
			this.messages.remove(this.messages.size() - 1);
		}

	}
}
