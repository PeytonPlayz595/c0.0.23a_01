package net.minecraft.src;

import java.util.ArrayList;
import java.util.List;
import org.lwjgl.opengl.GL11;
import org.lwjgl.opengl.GL12;

public abstract class GuiContainer extends GuiScreen {
	private static RenderItem itemRenderer = new RenderItem();
	private ItemStack draggedItemStack = null;
	protected int xSize = 176;
	protected int ySize = 166;
	protected List inventorySlots = new ArrayList();

	public void drawScreen(int var1, int var2, float var3) {
		this.drawDefaultBackground();
		int var4 = (this.width - this.xSize) / 2;
		int var5 = (this.height - this.ySize) / 2;
		this.drawGuiContainerBackgroundLayer(var3);
		GL11.glPushMatrix();
		GL11.glRotatef(180.0F, 1.0F, 0.0F, 0.0F);
		RenderHelper.enableStandardItemLighting();
		GL11.glPopMatrix();
		GL11.glPushMatrix();
		GL11.glTranslatef((float)var4, (float)var5, 0.0F);
		GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
		GL11.glEnable(GL12.GL_RESCALE_NORMAL);

		for(int var6 = 0; var6 < this.inventorySlots.size(); ++var6) {
			Slot var7 = (Slot)this.inventorySlots.get(var6);
			this.drawSlotInventory(var7);
			if(var7.getIsMouseOverSlot(var1, var2)) {
				GL11.glDisable(GL11.GL_LIGHTING);
				GL11.glDisable(GL11.GL_DEPTH_TEST);
				int var8 = var7.xDisplayPosition;
				int var9 = var7.yDisplayPosition;
				this.drawGradientRect(var8, var9, var8 + 16, var9 + 16, -2130706433, -2130706433);
				GL11.glEnable(GL11.GL_LIGHTING);
				GL11.glEnable(GL11.GL_DEPTH_TEST);
			}
		}

		if(this.draggedItemStack != null) {
			GL11.glTranslatef(0.0F, 0.0F, 32.0F);
			itemRenderer.drawItemIntoGui(this.fontRenderer, this.mc.renderEngine, this.draggedItemStack, var1 - var4 - 8, var2 - var5 - 8);
			itemRenderer.renderItemOverlayIntoGUI(this.fontRenderer, this.mc.renderEngine, this.draggedItemStack, var1 - var4 - 8, var2 - var5 - 8);
		}

		GL11.glDisable(GL12.GL_RESCALE_NORMAL);
		RenderHelper.disableStandardItemLighting();
		GL11.glDisable(GL11.GL_LIGHTING);
		GL11.glDisable(GL11.GL_DEPTH_TEST);
		this.drawGuiContainerForegroundLayer();
		GL11.glEnable(GL11.GL_LIGHTING);
		GL11.glEnable(GL11.GL_DEPTH_TEST);
		GL11.glPopMatrix();
	}

	protected void drawGuiContainerForegroundLayer() {
	}

	protected abstract void drawGuiContainerBackgroundLayer(float var1);

	private void drawSlotInventory(Slot var1) {
		IInventory var2 = var1.inventory;
		int var3 = var1.slotIndex;
		int var4 = var1.xDisplayPosition;
		int var5 = var1.yDisplayPosition;
		ItemStack var6 = var2.getStackInSlot(var3);
		if(var6 == null) {
			int var7 = var1.getBackgroundIconIndex();
			if(var7 >= 0) {
				GL11.glDisable(GL11.GL_LIGHTING);
				this.mc.renderEngine.bindTexture(this.mc.renderEngine.getTexture("/gui/items.png"));
				this.drawTexturedModalRect(var4, var5, var7 % 16 * 16, var7 / 16 * 16, 16, 16);
				GL11.glEnable(GL11.GL_LIGHTING);
				return;
			}
		}

		itemRenderer.drawItemIntoGui(this.fontRenderer, this.mc.renderEngine, var6, var4, var5);
		itemRenderer.renderItemOverlayIntoGUI(this.fontRenderer, this.mc.renderEngine, var6, var4, var5);
	}

	private Slot getSlotAtPosition(int var1, int var2) {
		for(int var3 = 0; var3 < this.inventorySlots.size(); ++var3) {
			Slot var4 = (Slot)this.inventorySlots.get(var3);
			if(var4.getIsMouseOverSlot(var1, var2)) {
				return var4;
			}
		}

		return null;
	}

	protected void mouseClicked(int var1, int var2, int var3) {
		if(var3 == 0 || var3 == 1) {
			Slot var4 = this.getSlotAtPosition(var1, var2);
			int var6;
			if(var4 != null) {
				var4.onSlotChanged();
				ItemStack var5 = var4.getStack();
				if(var5 != null || this.draggedItemStack != null) {
					if(var5 != null && this.draggedItemStack == null) {
						var6 = var3 == 0 ? var5.stackSize : (var5.stackSize + 1) / 2;
						this.draggedItemStack = var4.inventory.decrStackSize(var4.slotIndex, var6);
						if(var5.stackSize == 0) {
							var4.putStack((ItemStack)null);
						}

						var4.onPickupFromSlot();
					} else if(var5 == null && this.draggedItemStack != null && var4.isItemValid(this.draggedItemStack)) {
						var6 = var3 == 0 ? this.draggedItemStack.stackSize : 1;
						if(var6 > var4.inventory.getInventoryStackLimit()) {
							var6 = var4.inventory.getInventoryStackLimit();
						}

						var4.putStack(this.draggedItemStack.splitStack(var6));
						if(this.draggedItemStack.stackSize == 0) {
							this.draggedItemStack = null;
						}
					} else if(var5 != null && this.draggedItemStack != null) {
						if(var4.isItemValid(this.draggedItemStack)) {
							if(var5.itemID != this.draggedItemStack.itemID) {
								if(this.draggedItemStack.stackSize <= var4.inventory.getInventoryStackLimit()) {
									var4.putStack(this.draggedItemStack);
									this.draggedItemStack = var5;
								}
							} else if(var5.itemID == this.draggedItemStack.itemID) {
								if(var3 == 0) {
									var6 = this.draggedItemStack.stackSize;
									if(var6 > var4.inventory.getInventoryStackLimit() - var5.stackSize) {
										var6 = var4.inventory.getInventoryStackLimit() - var5.stackSize;
									}

									if(var6 > this.draggedItemStack.getMaxStackSize() - var5.stackSize) {
										var6 = this.draggedItemStack.getMaxStackSize() - var5.stackSize;
									}

									this.draggedItemStack.splitStack(var6);
									if(this.draggedItemStack.stackSize == 0) {
										this.draggedItemStack = null;
									}

									var5.stackSize += var6;
								} else if(var3 == 1) {
									var6 = 1;
									if(var6 > var4.inventory.getInventoryStackLimit() - var5.stackSize) {
										var6 = var4.inventory.getInventoryStackLimit() - var5.stackSize;
									}

									if(var6 > this.draggedItemStack.getMaxStackSize() - var5.stackSize) {
										var6 = this.draggedItemStack.getMaxStackSize() - var5.stackSize;
									}

									this.draggedItemStack.splitStack(var6);
									if(this.draggedItemStack.stackSize == 0) {
										this.draggedItemStack = null;
									}

									var5.stackSize += var6;
								}
							}
						} else if(var5.itemID == this.draggedItemStack.itemID && this.draggedItemStack.getMaxStackSize() > 1) {
							var6 = var5.stackSize;
							if(var6 > 0 && var6 + this.draggedItemStack.stackSize <= this.draggedItemStack.getMaxStackSize()) {
								this.draggedItemStack.stackSize += var6;
								var5.splitStack(var6);
								if(var5.stackSize == 0) {
									var4.putStack((ItemStack)null);
								}

								var4.onPickupFromSlot();
							}
						}
					}
				}
			} else if(this.draggedItemStack != null) {
				int var8 = (this.width - this.xSize) / 2;
				var6 = (this.height - this.ySize) / 2;
				if(var1 < var8 || var2 < var6 || var1 >= var8 + this.xSize || var2 >= var6 + this.xSize) {
					EntityPlayerSP var7 = this.mc.thePlayer;
					if(var3 == 0) {
						var7.dropPlayerItem(this.draggedItemStack);
						this.draggedItemStack = null;
					}

					if(var3 == 1) {
						var7.dropPlayerItem(this.draggedItemStack.splitStack(1));
						if(this.draggedItemStack.stackSize == 0) {
							this.draggedItemStack = null;
						}
					}
				}
			}
		}

	}

	protected void mouseMovedOrUp(int var1, int var2, int var3) {
		if(var3 == 0) {
		}

	}

	protected void keyTyped(char var1, int var2) {
		if(var2 == 1 || var2 == this.mc.gameSettings.keyBindInventory.keyCode) {
			this.mc.displayGuiScreen((GuiScreen)null);
		}

	}

	public void onGuiClosed() {
		if(this.draggedItemStack != null) {
			this.mc.thePlayer.dropPlayerItem(this.draggedItemStack);
		}

	}

	public void onCraftMatrixChanged(IInventory var1) {
	}

	public boolean doesGuiPauseGame() {
		return false;
	}
}
