package net.minecraft.src;

public class ItemSpade extends ItemTool {
	private static Block[] blocksEffectiveAgainst = new Block[]{Block.grass, Block.dirt, Block.sand, Block.gravel};

	public ItemSpade(int var1, int var2) {
		super(var1, 1, var2, blocksEffectiveAgainst);
	}
}
