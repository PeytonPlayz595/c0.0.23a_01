package net.minecraft.src;

public class BlockMobSpawner extends BlockContainer {
	protected BlockMobSpawner(int var1, int var2) {
		super(var1, var2, Material.rock);
	}

	protected TileEntity getBlockEntity() {
		return new TileEntityMobSpawner();
	}

	public boolean isOpaqueCube() {
		return false;
	}
}
