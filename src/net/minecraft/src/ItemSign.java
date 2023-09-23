package net.minecraft.src;

public class ItemSign extends Item {
	public ItemSign(int var1) {
		super(var1);
		this.maxDamage = 64;
		this.maxStackSize = 1;
	}

	public boolean onItemUse(ItemStack var1, EntityPlayer var2, World var3, int var4, int var5, int var6, int var7) {
		if(var7 != 1) {
			return false;
		} else {
			++var5;
			if(!Block.signStanding.canPlaceBlockAt(var3, var4, var5, var6)) {
				return false;
			} else {
				var3.setBlockWithNotify(var4, var5, var6, Block.signStanding.blockID);
				var3.setBlockMetadataWithNotify(var4, var5, var6, MathHelper.floor_double((double)((var2.rotationYaw + 180.0F) * 16.0F / 360.0F) - 0.5D) & 15);
				--var1.stackSize;
				var2.displayGUIEditSign((TileEntitySign)var3.getBlockTileEntity(var4, var5, var6));
				return true;
			}
		}
	}
}
