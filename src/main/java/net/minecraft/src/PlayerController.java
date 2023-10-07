package net.minecraft.src;

public class PlayerController {
	protected final Minecraft mc;
	public boolean isInTestMode = false;

	public PlayerController(Minecraft var1) {
		this.mc = var1;
	}

	public void init() {
	}

	public void onWorldChange(World var1) {
	}

	public void clickBlock(int var1, int var2, int var3) {
		this.sendBlockRemoved(var1, var2, var3);
	}

	public boolean sendBlockRemoved(int var1, int var2, int var3) {
		this.mc.effectRenderer.addBlockDestroyEffects(var1, var2, var3);
		World var4 = this.mc.theWorld;
		Block var5 = Block.blocksList[var4.getBlockId(var1, var2, var3)];
		int var6 = var4.getBlockMetadata(var1, var2, var3);
		boolean var7 = var4.setBlockWithNotify(var1, var2, var3, 0);
		if(var5 != null && var7) {
			//this.mc.sndManager.playSound(var5.stepSound.getBreakSound(), (float)var1 + 0.5F, (float)var2 + 0.5F, (float)var3 + 0.5F, (var5.stepSound.getVolume() + 1.0F) / 2.0F, var5.stepSound.getPitch() * 0.8F);
			var5.onBlockDestroyedByPlayer(var4, var1, var2, var3, var6);
		}

		return var7;
	}

	public void sendBlockRemoving(int var1, int var2, int var3, int var4) {
	}

	public void resetBlockRemoving() {
	}

	public void setPartialTime(float var1) {
	}

	public float getBlockReachDistance() {
		return 5.0F;
	}

	public void flipPlayer(EntityPlayer var1) {
	}

	public void onUpdate() {
	}

	public boolean shouldDrawHUD() {
		return true;
	}

	public void onRespawn(EntityPlayer var1) {
	}
}
