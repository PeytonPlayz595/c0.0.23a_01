package net.minecraft.src;

import java.util.Random;

public class BlockSign extends BlockContainer {
	private Class signEntityClass;
	private int itemDropID;

	protected BlockSign(int var1, Class var2, int var3) {
		super(var1, Material.wood);
		this.blockIndexInTexture = 4;
		this.signEntityClass = var2;
		float var4 = 0.25F;
		float var5 = 1.625F;
		this.setBlockBounds(0.5F - var4, 0.0F, 0.5F - var4, 0.5F + var4, var5, 0.5F + var4);
		this.itemDropID = var3;
	}

	public int getRenderType() {
		return -1;
	}

	public boolean renderAsNormalBlock() {
		return false;
	}

	public boolean isOpaqueCube() {
		return false;
	}

	protected TileEntity getBlockEntity() {
		try {
			return (TileEntity)this.signEntityClass.newInstance();
		} catch (Exception var2) {
			throw new RuntimeException(var2);
		}
	}

	public boolean canPlaceBlockAt(World var1, int var2, int var3, int var4) {
		return super.canPlaceBlockAt(var1, var2, var3, var4) && super.canPlaceBlockAt(var1, var2, var3 + 1, var4);
	}

	public int idDropped(int var1, Random var2) {
		return this.itemDropID;
	}

	public void onNeighborBlockChange(World var1, int var2, int var3, int var4, int var5) {
		if(!var1.isBlockNormalCube(var2, var3 - 1, var4)) {
			this.dropBlockAsItem(var1, var2, var3, var4, var1.getBlockMetadata(var2, var3, var4));
			var1.setBlockWithNotify(var2, var3, var4, 0);
		}

	}
}
