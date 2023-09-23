package net.minecraft.src;

import java.io.File;

public class GuiCreateWorld extends GuiScreen {
	protected GuiScreen parentGuiScreen;
	protected String screenHeader = "Select world";
	private boolean createClicked = false;

	public GuiCreateWorld(GuiScreen var1) {
		this.parentGuiScreen = var1;
	}

	public void initGui() {
		File var1 = Minecraft.getMinecraftDir();

		for(int var2 = 0; var2 < 5; ++var2) {
			NBTTagCompound var3 = World.getLevelData(var1, "World" + (var2 + 1));
			if(var3 == null) {
				this.controlList.add(new GuiButton(var2, this.width / 2 - 100, this.height / 6 + 24 * var2, "- empty -"));
			} else {
				String var4 = "World " + (var2 + 1);
				long var5 = var3.getLong("SizeOnDisk");
				var4 = var4 + " (" + (float)(var5 / 1024L * 100L / 1024L) / 100.0F + " MB)";
				this.controlList.add(new GuiButton(var2, this.width / 2 - 100, this.height / 6 + 24 * var2, var4));
			}
		}

		this.initButtons();
	}

	protected String getSaveFileName(int var1) {
		File var2 = Minecraft.getMinecraftDir();
		return World.getLevelData(var2, "World" + var1) != null ? "World" + var1 : null;
	}

	public void initButtons() {
		this.controlList.add(new GuiButton(5, this.width / 2 - 100, this.height / 6 + 120 + 12, "Delete world..."));
		this.controlList.add(new GuiButton(6, this.width / 2 - 100, this.height / 6 + 168, "Cancel"));
	}

	protected void actionPerformed(GuiButton var1) {
		if(var1.enabled) {
			if(var1.id < 5) {
				this.actionPerformed(var1.id + 1);
			} else if(var1.id == 5) {
				this.mc.displayGuiScreen(new GuiDeleteWorld(this));
			} else if(var1.id == 6) {
				this.mc.displayGuiScreen(this.parentGuiScreen);
			}

		}
	}

	public void actionPerformed(int var1) {
		this.mc.displayGuiScreen((GuiScreen)null);
		if(!this.createClicked) {
			this.createClicked = true;
			this.mc.startWorld("World" + var1);
			this.mc.displayGuiScreen((GuiScreen)null);
		}
	}

	public void drawScreen(int var1, int var2, float var3) {
		this.drawDefaultBackground();
		this.drawCenteredString(this.fontRenderer, this.screenHeader, this.width / 2, 20, 16777215);
		super.drawScreen(var1, var2, var3);
	}
}
