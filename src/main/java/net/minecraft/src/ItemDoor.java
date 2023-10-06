package net.minecraft.src;

public class ItemDoor extends Item {
	public ItemDoor(int var1) {
		super(var1);
		this.maxDamage = 64;
		this.maxStackSize = 1;
	}

	public boolean onItemUse(ItemStack var1, EntityPlayer var2, World var3, int var4, int var5, int var6, int var7) {
		if(var7 != 1) {
			return false;
		} else {
			++var5;
			if(!Block.doorWood.canPlaceBlockAt(var3, var4, var5, var6)) {
				return false;
			} else {
				int var8 = MathHelper.floor_double((double)((var2.rotationYaw + 180.0F) * 4.0F / 360.0F) - 0.5D) & 3;
				byte var9 = 0;
				byte var10 = 0;
				if(var8 == 0) {
					var10 = 1;
				}

				if(var8 == 1) {
					var9 = -1;
				}

				if(var8 == 2) {
					var10 = -1;
				}

				if(var8 == 3) {
					var9 = 1;
				}

				int var11 = (var3.isBlockNormalCube(var4 - var9, var5, var6 - var10) ? 1 : 0) + (var3.isBlockNormalCube(var4 - var9, var5 + 1, var6 - var10) ? 1 : 0);
				int var12 = (var3.isBlockNormalCube(var4 + var9, var5, var6 + var10) ? 1 : 0) + (var3.isBlockNormalCube(var4 + var9, var5 + 1, var6 + var10) ? 1 : 0);
				boolean var13 = var3.getBlockId(var4 - var9, var5, var6 - var10) == Block.doorWood.blockID || var3.getBlockId(var4 - var9, var5 + 1, var6 - var10) == Block.doorWood.blockID;
				boolean var14 = var3.getBlockId(var4 + var9, var5, var6 + var10) == Block.doorWood.blockID || var3.getBlockId(var4 + var9, var5 + 1, var6 + var10) == Block.doorWood.blockID;
				boolean var15 = false;
				if(var13 && !var14) {
					var15 = true;
				} else if(var12 > var11) {
					var15 = true;
				}

				if(var15) {
					var8 = var8 - 1 & 3;
					var8 += 4;
				}

				var3.setBlockWithNotify(var4, var5, var6, Block.doorWood.blockID);
				var3.setBlockMetadataWithNotify(var4, var5, var6, var8);
				var3.setBlockWithNotify(var4, var5 + 1, var6, Block.doorWood.blockID);
				var3.setBlockMetadataWithNotify(var4, var5 + 1, var6, var8 + 8);
				--var1.stackSize;
				return true;
			}
		}
	}
}
