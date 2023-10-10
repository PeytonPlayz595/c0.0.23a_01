package com.mojang.minecraft;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.PrintWriter;
import org.lwjgl.input.Keyboard;

public final class Options {
	private static final String[] RENDER_DISTANCES = new String[]{"FAR", "NORMAL", "SHORT", "TINY"};
	public boolean music = true;
	public boolean sound = true;
	public boolean invertMouse = false;
	public boolean showFPS = false;
	public int renderDistance = 0;
	public KeyBinding forward = new KeyBinding("Forward", 17);
	public KeyBinding left = new KeyBinding("Left", 30);
	public KeyBinding back = new KeyBinding("Back", 31);
	public KeyBinding right = new KeyBinding("Right", 32);
	public KeyBinding jump = new KeyBinding("Jump", 57);
	public KeyBinding build = new KeyBinding("Build", 48);
	public KeyBinding chat = new KeyBinding("Chat", 20);
	public KeyBinding toggleFog = new KeyBinding("Toggle fog", 33);
	public KeyBinding save = new KeyBinding("Save location", 28);
	public KeyBinding load = new KeyBinding("Load location", 19);
	public KeyBinding[] keyBindings = new KeyBinding[]{this.forward, this.left, this.back, this.right, this.jump, this.build, this.chat, this.toggleFog, this.save, this.load};
	private File optionsFile;

	public Options(Minecraft var1, File var2) {
		this.optionsFile = new File(var2, "options.txt");
		this.loadOptions();
	}

	public final String getKeyBinding(int var1) {
		return this.keyBindings[var1].name + ": " + Keyboard.getKeyName(this.keyBindings[var1].key);
	}

	public final void setKeyBinding(int var1, int var2) {
		this.keyBindings[var1].key = var2;
		this.saveOptions();
	}

	public final void setOption(int var1, int var2) {
		if(var1 == 0) {
			this.music = !this.music;
		}

		if(var1 == 1) {
			this.sound = !this.sound;
		}

		if(var1 == 2) {
			this.invertMouse = !this.invertMouse;
		}

		if(var1 == 3) {
			this.showFPS = !this.showFPS;
		}

		if(var1 == 4) {
			this.renderDistance = this.renderDistance + var2 & 3;
		}

		this.saveOptions();
	}

	public final String getOption(int var1) {
		return var1 == 0 ? "Music: " + (this.music ? "ON" : "OFF") : (var1 == 1 ? "Sound: " + (this.sound ? "ON" : "OFF") : (var1 == 2 ? "Invert mouse: " + (this.invertMouse ? "ON" : "OFF") : (var1 == 3 ? "Show FPS: " + (this.showFPS ? "ON" : "OFF") : (var1 == 4 ? "Render distance: " + RENDER_DISTANCES[this.renderDistance] : ""))));
	}

	private void loadOptions() {
		try {
			if(this.optionsFile.exists()) {
				BufferedReader var1 = new BufferedReader(new FileReader(this.optionsFile));
				String var2 = null;

				while(true) {
					var2 = var1.readLine();
					if(var2 == null) {
						var1.close();
						return;
					}

					String[] var5 = var2.split(":");
					if(var5[0].equals("music")) {
						this.music = var5[1].equals("true");
					}

					if(var5[0].equals("sound")) {
						this.sound = var5[1].equals("true");
					}

					if(var5[0].equals("invertYMouse")) {
						this.invertMouse = var5[1].equals("true");
					}

					if(var5[0].equals("showFrameRate")) {
						this.showFPS = var5[1].equals("true");
					}

					if(var5[0].equals("viewDistance")) {
						this.renderDistance = Integer.parseInt(var5[1]);
					}

					for(int var3 = 0; var3 < this.keyBindings.length; ++var3) {
						if(var5[0].equals("key_" + this.keyBindings[var3].name)) {
							this.keyBindings[var3].key = Integer.parseInt(var5[1]);
						}
					}
				}
			}
		} catch (Exception var4) {
			System.out.println("Failed to load options");
			var4.printStackTrace();
		}
	}

	private void saveOptions() {
		try {
			PrintWriter var1 = new PrintWriter(new FileWriter(this.optionsFile));
			var1.println("music:" + this.music);
			var1.println("sound:" + this.sound);
			var1.println("invertYMouse:" + this.invertMouse);
			var1.println("showFrameRate:" + this.showFPS);
			var1.println("viewDistance:" + this.renderDistance);

			for(int var2 = 0; var2 < this.keyBindings.length; ++var2) {
				var1.println("key_" + this.keyBindings[var2].name + ":" + this.keyBindings[var2].key);
			}

			var1.close();
		} catch (Exception var3) {
			System.out.println("Failed to save options");
			var3.printStackTrace();
		}
	}
}
