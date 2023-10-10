package com.mojang.minecraft.gui;

import com.mojang.minecraft.Options;

public final class OptionsScreen extends Screen {
	private Screen parent;
	private String title = "Options";
	private Options options;

	public OptionsScreen(Screen var1, Options var2) {
		this.parent = var1;
		this.options = var2;
	}

	public final void init() {
		for(int var1 = 0; var1 < 5; ++var1) {
			this.buttons.add(new Button(var1, this.width / 2 - 100, this.height / 6 + var1 * 24, this.options.getOption(var1)));
		}

		this.buttons.add(new Button(10, this.width / 2 - 100, this.height / 6 + 120 + 12, "Controls..."));
		this.buttons.add(new Button(20, this.width / 2 - 100, this.height / 6 + 168, "Done"));
	}

	protected final void buttonClicked(Button var1) {
		if(var1.enabled) {
			if(var1.id < 5) {
				this.options.setOption(var1.id, 1);
				var1.msg = this.options.getOption(var1.id);
			}

			if(var1.id == 10) {
				this.minecraft.setScreen(new ControlsScreen(this, this.options));
			}

			if(var1.id == 20) {
				this.minecraft.setScreen(this.parent);
			}

		}
	}

	public final void render(int var1, int var2) {
		fillGradient(0, 0, this.width, this.height, 1610941696, -1607454624);
		drawCenteredString(this.font, this.title, this.width / 2, 20, 16777215);
		super.render(var1, var2);
	}
}
