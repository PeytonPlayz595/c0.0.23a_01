package net.minecraft.src;

public class ScaledResolution {
	private int scaledWidth;
	private int scaledHeight;

	public ScaledResolution(int var1, int var2) {
		this.scaledWidth = var1;
		this.scaledHeight = var2;

		int var3;
		for(var3 = 1; this.scaledWidth / (var3 + 1) >= 320 && this.scaledHeight / (var3 + 1) >= 240; ++var3) {
		}

		this.scaledWidth /= var3;
		this.scaledHeight /= var3;
	}

	public int getScaledWidth() {
		return this.scaledWidth;
	}

	public int getScaledHeight() {
		return this.scaledHeight;
	}
}
