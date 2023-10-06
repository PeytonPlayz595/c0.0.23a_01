package net.minecraft.src;

import java.util.Random;

public class BlockGrass extends Block {
	protected BlockGrass(int var1) {
		super(var1, Material.ground);
		this.blockIndexInTexture = 3;
		this.setTickOnLoad(true);
	}

	public int getBlockTextureFromSide(int var1) {
		return var1 == 1 ? 0 : (var1 == 0 ? 2 : 3);
	}

	public void updateTick(World var1, int var2, int var3, int var4, Random var5) {
		if(var1.getBlockLightValue(var2, var3 + 1, var4) < 4 && var1.getBlockMaterial(var2, var3 + 1, var4).getCanBlockGrass()) {
			if(var5.nextInt(4) != 0) {
				return;
			}

			var1.setBlockWithNotify(var2, var3, var4, Block.dirt.blockID);
		} else if(var1.getBlockLightValue(var2, var3 + 1, var4) >= 9) {
			int var6 = var2 + var5.nextInt(3) - 1;
			int var7 = var3 + var5.nextInt(5) - 3;
			int var8 = var4 + var5.nextInt(3) - 1;
			if(var1.getBlockId(var6, var7, var8) == Block.dirt.blockID && var1.getBlockLightValue(var6, var7 + 1, var8) >= 4 && !var1.getBlockMaterial(var6, var7 + 1, var8).getCanBlockGrass()) {
				var1.setBlockWithNotify(var6, var7, var8, Block.grass.blockID);
			}
		}

	}

	public int idDropped(int var1, Random var2) {
		return Block.dirt.idDropped(0, var2);
	}
}
