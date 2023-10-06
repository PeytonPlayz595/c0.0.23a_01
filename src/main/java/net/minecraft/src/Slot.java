package net.minecraft.src;

public class Slot {
	public final int slotIndex;
	public final int xDisplayPosition;
	public final int yDisplayPosition;
	public final IInventory inventory;
	private final GuiContainer inventoryGui;

	public Slot(GuiContainer var1, IInventory var2, int var3, int var4, int var5) {
		this.inventoryGui = var1;
		this.inventory = var2;
		this.slotIndex = var3;
		this.xDisplayPosition = var4;
		this.yDisplayPosition = var5;
	}

	public boolean getIsMouseOverSlot(int var1, int var2) {
		int var3 = (this.inventoryGui.width - this.inventoryGui.xSize) / 2;
		int var4 = (this.inventoryGui.height - this.inventoryGui.ySize) / 2;
		var1 -= var3;
		var2 -= var4;
		return var1 >= this.xDisplayPosition - 1 && var1 < this.xDisplayPosition + 16 + 1 && var2 >= this.yDisplayPosition - 1 && var2 < this.yDisplayPosition + 16 + 1;
	}

	public void onPickupFromSlot() {
		this.onSlotChanged();
	}

	public boolean isItemValid(ItemStack var1) {
		return true;
	}

	public ItemStack getStack() {
		return this.inventory.getStackInSlot(this.slotIndex);
	}

	public void putStack(ItemStack var1) {
		this.inventory.setInventorySlotContents(this.slotIndex, var1);
		this.onSlotChanged();
	}

	public int getBackgroundIconIndex() {
		return -1;
	}

	public void onSlotChanged() {
		this.inventory.onInventoryChanged();
	}
}
