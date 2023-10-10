package com.mojang.minecraft.gui;

import com.mojang.minecraft.Minecraft;
import java.util.ArrayList;
import java.util.List;
import org.lwjgl.input.Keyboard;
import org.lwjgl.input.Mouse;
import org.lwjgl.opengl.GL11;

public class Screen extends Gui {
	protected Minecraft minecraft;
	protected int width;
	protected int height;
	protected List buttons = new ArrayList();
	public boolean allowUserInput = false;
	protected Font font;

	public void render(int var1, int var2) {
		for(int var3 = 0; var3 < this.buttons.size(); ++var3) {
			Button var4 = (Button)this.buttons.get(var3);
			Minecraft var5 = this.minecraft;
			if(var4.visible) {
				Font var8 = var5.font;
				GL11.glEnable(GL11.GL_TEXTURE_2D);
				GL11.glBindTexture(GL11.GL_TEXTURE_2D, var5.textures.getTextureId("/gui.png"));
				GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
				byte var9 = 1;
				boolean var6 = var1 >= var4.w && var2 >= var4.h && var1 < var4.w + var4.x && var2 < var4.h + var4.y;
				if(!var4.enabled) {
					var9 = 0;
				} else if(var6) {
					var9 = 2;
				}

				var4.blit(var4.w, var4.h, 0, 46 + var9 * 20, var4.x / 2, var4.y);
				var4.blit(var4.w + var4.x / 2, var4.h, 200 - var4.x / 2, 46 + var9 * 20, var4.x / 2, var4.y);
				if(!var4.enabled) {
					Button.drawCenteredString(var8, var4.msg, var4.w + var4.x / 2, var4.h + (var4.y - 8) / 2, -6250336);
				} else if(var6) {
					Button.drawCenteredString(var8, var4.msg, var4.w + var4.x / 2, var4.h + (var4.y - 8) / 2, 16777120);
				} else {
					Button.drawCenteredString(var8, var4.msg, var4.w + var4.x / 2, var4.h + (var4.y - 8) / 2, 14737632);
				}
			}
		}

	}

	protected void keyPressed(char var1, int var2) {
		if(var2 == 1) {
			this.minecraft.setScreen((Screen)null);
			this.minecraft.grabMouse();
		}

	}

	protected void mousePressed(int var1, int var2, int var3) {
		if(var3 == 0) {
			for(var3 = 0; var3 < this.buttons.size(); ++var3) {
				Button var4 = (Button)this.buttons.get(var3);
				if(var4.enabled && var1 >= var4.w && var2 >= var4.h && var1 < var4.w + var4.x && var2 < var4.h + var4.y) {
					this.buttonClicked(var4);
				}
			}
		}

	}

	protected void buttonClicked(Button var1) {
	}

	public final void init(Minecraft var1, int var2, int var3) {
		this.minecraft = var1;
		this.font = var1.font;
		this.width = var2;
		this.height = var3;
		this.init();
	}

	public void init() {
	}

	public final void updateEvents() {
		while(Mouse.next()) {
			this.updateMouseEvents();
		}

		while(Keyboard.next()) {
			this.updateKeyboardEvents();
		}

	}

	public final void updateMouseEvents() {
		if(Mouse.getEventButtonState()) {
			int var1 = Mouse.getEventX() * this.width / this.minecraft.width;
			int var2 = this.height - Mouse.getEventY() * this.height / this.minecraft.height - 1;
			this.mousePressed(var1, var2, Mouse.getEventButton());
		}

	}

	public final void updateKeyboardEvents() {
		if(Keyboard.getEventKeyState()) {
			this.keyPressed(Keyboard.getEventCharacter(), Keyboard.getEventKey());
		}

	}

	public void tick() {
	}

	public void closeScreen() {
	}
}
