package net.minecraft.src;

public class BlockStationary extends BlockFluid {
	protected BlockStationary(int var1, Material var2) {
		super(var1, var2);
		this.setTickOnLoad(false);
	}

	public void onNeighborBlockChange(World var1, int var2, int var3, int var4, int var5) {
		super.onNeighborBlockChange(var1, var2, var3, var4, var5);
		if(var1.getBlockId(var2, var3, var4) == this.blockID) {
			this.updateTick(var1, var2, var3, var4);
		}

	}

	private void updateTick(World var1, int var2, int var3, int var4) {
		int var5 = var1.getBlockMetadata(var2, var3, var4);
		var1.editingBlocks = true;
		var1.setBlockAndMetadata(var2, var3, var4, this.blockID - 1, var5);
		var1.markBlocksDirty(var2, var3, var4, var2, var3, var4);
		var1.scheduleBlockUpdate(var2, var3, var4, this.blockID - 1);
		var1.editingBlocks = false;
	}
}
