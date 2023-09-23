package net.minecraft.src;

import org.lwjgl.opengl.GL11;

public class GuiButton extends Gui {
	private int width;
	private int height;
	public int xPosition;
	public int yPosition;
	public String displayString;
	public int id;
	public boolean enabled;
	public boolean enabled2;

	public GuiButton(int var1, int var2, int var3, String var4) {
		this(var1, var2, var3, 200, 20, var4);
	}

	protected GuiButton(int var1, int var2, int var3, int var4, int var5, String var6) {
		this.width = 200;
		this.height = 20;
		this.enabled = true;
		this.enabled2 = true;
		this.id = var1;
		this.xPosition = var2;
		this.yPosition = var3;
		this.width = var4;
		this.height = var5;
		this.displayString = var6;
	}

	public void drawButton(Minecraft var1, int var2, int var3) {
		if(this.enabled2) {
			FontRenderer var4 = var1.fontRenderer;
			GL11.glBindTexture(GL11.GL_TEXTURE_2D, var1.renderEngine.getTexture("/gui/gui.png"));
			GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
			byte var5 = 1;
			boolean var6 = var2 >= this.xPosition && var3 >= this.yPosition && var2 < this.xPosition + this.width && var3 < this.yPosition + this.height;
			if(!this.enabled) {
				var5 = 0;
			} else if(var6) {
				var5 = 2;
			}

			this.drawTexturedModalRect(this.xPosition, this.yPosition, 0, 46 + var5 * 20, this.width / 2, this.height);
			this.drawTexturedModalRect(this.xPosition + this.width / 2, this.yPosition, 200 - this.width / 2, 46 + var5 * 20, this.width / 2, this.height);
			if(!this.enabled) {
				this.drawCenteredString(var4, this.displayString, this.xPosition + this.width / 2, this.yPosition + (this.height - 8) / 2, -6250336);
			} else if(var6) {
				this.drawCenteredString(var4, this.displayString, this.xPosition + this.width / 2, this.yPosition + (this.height - 8) / 2, 16777120);
			} else {
				this.drawCenteredString(var4, this.displayString, this.xPosition + this.width / 2, this.yPosition + (this.height - 8) / 2, 14737632);
			}

		}
	}

	public boolean mousePressed(int var1, int var2) {
		return this.enabled && var1 >= this.xPosition && var2 >= this.yPosition && var1 < this.xPosition + this.width && var2 < this.yPosition + this.height;
	}
}
