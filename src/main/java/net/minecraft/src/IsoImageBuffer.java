package net.minecraft.src;

import java.awt.image.BufferedImage;

public class IsoImageBuffer {
	public BufferedImage image;
	public World level;
	public int chunkX;
	public int chunkZ;
	public boolean rendered = false;
	public boolean noContent = false;
	public int lastVisible = 0;
	public boolean addedToRenderQueue = false;

	public IsoImageBuffer(World var1, int var2, int var3) {
		this.level = var1;
		this.setChunkPosition(var2, var3);
	}

	public void setChunkPosition(int var1, int var2) {
		this.rendered = false;
		this.chunkX = var1;
		this.chunkZ = var2;
		this.lastVisible = 0;
		this.addedToRenderQueue = false;
	}

	public void setWorldAndChunkPosition(World var1, int var2, int var3) {
		this.level = var1;
		this.setChunkPosition(var2, var3);
	}
}
