package net.minecraft.src;

import java.util.Random;

public class BlockLeaves extends BlockLeavesBase {
	private int leafTexIndex;

	protected BlockLeaves(int var1, int var2) {
		super(var1, var2, Material.leaves, false);
		this.leafTexIndex = var2;
		this.setTickOnLoad(true);
	}

	public void updateTick(World var1, int var2, int var3, int var4, Random var5) {
		if(!var1.getBlockMaterial(var2, var3 - 1, var4).isSolid()) {
			byte var6 = 2;

			for(int var7 = var2 - var6; var7 <= var2 + var6; ++var7) {
				for(int var8 = var3 - 1; var8 <= var3 + 1; ++var8) {
					for(int var9 = var4 - var6; var9 <= var4 + var6; ++var9) {
						if(var1.getBlockId(var7, var8, var9) == Block.wood.blockID) {
							return;
						}
					}
				}
			}

			this.dropBlockAsItem(var1, var2, var3, var4, var1.getBlockMetadata(var2, var3, var4));
			var1.setBlockWithNotify(var2, var3, var4, 0);
		}
	}

	public int quantityDropped(Random var1) {
		return var1.nextInt(10) == 0 ? 1 : 0;
	}

	public int idDropped(int var1, Random var2) {
		return Block.sapling.blockID;
	}

	public boolean isOpaqueCube() {
		return !this.graphicsLevel;
	}

	public void setGraphicsLevel(boolean var1) {
		this.graphicsLevel = var1;
		this.blockIndexInTexture = this.leafTexIndex + (var1 ? 0 : 1);
	}

	public void onEntityWalking(World var1, int var2, int var3, int var4, Entity var5) {
		super.onEntityWalking(var1, var2, var3, var4, var5);
	}
}
