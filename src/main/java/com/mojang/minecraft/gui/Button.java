package com.mojang.minecraft.gui;

public class Button extends Gui {
	int x;
	int y;
	public int w;
	public int h;
	public String msg;
	public int id;
	public boolean enabled;
	public boolean visible;

	public Button(int var1, int var2, int var3, String var4) {
		this(var1, var2, var3, 200, 20, var4);
	}

	protected Button(int var1, int var2, int var3, int var4, int var5, String var6) {
		this.x = 200;
		this.y = 20;
		this.enabled = true;
		this.visible = true;
		this.id = var1;
		this.w = var2;
		this.h = var3;
		this.x = var4;
		this.y = 20;
		this.msg = var6;
	}
}
