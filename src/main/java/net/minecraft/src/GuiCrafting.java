package net.minecraft.src;

import org.lwjgl.opengl.GL11;

public class GuiCrafting extends GuiContainer {
	private InventoryCrafting inventoryCrafting = new InventoryCrafting(this, 3, 3);
	private IInventory iInventory = new InventoryCraftResult();

	public GuiCrafting(InventoryPlayer var1) {
		this.inventorySlots.add(new SlotCrafting(this, this.inventoryCrafting, this.iInventory, 0, 124, 35));

		int var2;
		int var3;
		for(var2 = 0; var2 < 3; ++var2) {
			for(var3 = 0; var3 < 3; ++var3) {
				this.inventorySlots.add(new Slot(this, this.inventoryCrafting, var3 + var2 * 3, 30 + var3 * 18, 17 + var2 * 18));
			}
		}

		for(var2 = 0; var2 < 3; ++var2) {
			for(var3 = 0; var3 < 9; ++var3) {
				this.inventorySlots.add(new Slot(this, var1, var3 + (var2 + 1) * 9, 8 + var3 * 18, 84 + var2 * 18));
			}
		}

		for(var2 = 0; var2 < 9; ++var2) {
			this.inventorySlots.add(new Slot(this, var1, var2, 8 + var2 * 18, 142));
		}

	}

	public void onGuiClosed() {
		super.onGuiClosed();

		for(int var1 = 0; var1 < 9; ++var1) {
			ItemStack var2 = this.inventoryCrafting.getStackInSlot(var1);
			if(var2 != null) {
				this.mc.thePlayer.dropPlayerItem(var2);
			}
		}

	}

	public void onCraftMatrixChanged(IInventory var1) {
		int[] var2 = new int[9];

		for(int var3 = 0; var3 < 3; ++var3) {
			for(int var4 = 0; var4 < 3; ++var4) {
				int var5 = var3 + var4 * 3;
				ItemStack var6 = this.inventoryCrafting.getStackInSlot(var5);
				if(var6 == null) {
					var2[var5] = -1;
				} else {
					var2[var5] = var6.itemID;
				}
			}
		}

		this.iInventory.setInventorySlotContents(0, CraftingManager.getInstance().findMatchingRecipe(var2));
	}

	protected void drawGuiContainerForegroundLayer() {
		this.fontRenderer.drawString("Crafting", 28, 6, 4210752);
		this.fontRenderer.drawString("Inventory", 8, this.ySize - 96 + 2, 4210752);
	}

	protected void drawGuiContainerBackgroundLayer(float var1) {
		int var2 = this.mc.renderEngine.getTexture("/gui/crafting.png");
		GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
		this.mc.renderEngine.bindTexture(var2);
		int var3 = (this.width - this.xSize) / 2;
		int var4 = (this.height - this.ySize) / 2;
		this.drawTexturedModalRect(var3, var4, 0, 0, this.xSize, this.ySize);
	}
}
