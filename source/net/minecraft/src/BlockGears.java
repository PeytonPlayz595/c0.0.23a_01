package net.minecraft.src;

import java.util.Random;

public class BlockGears extends Block {
	protected BlockGears(int var1, int var2) {
		super(var1, var2, Material.circuits);
	}

	public AxisAlignedBB getCollisionBoundingBoxFromPool(World var1, int var2, int var3, int var4) {
		return null;
	}

	public boolean isOpaqueCube() {
		return false;
	}

	public boolean renderAsNormalBlock() {
		return false;
	}

	public int getRenderType() {
		return 5;
	}

	public int quantityDropped(Random var1) {
		return 1;
	}

	public boolean isCollidable() {
		return false;
	}
}
