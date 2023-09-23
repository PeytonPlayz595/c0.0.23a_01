package net.minecraft.src;

import java.util.List;

public class EntityMinecart extends Entity implements IInventory {
	private ItemStack[] cargoItems;
	public int damageTaken;
	public int timeSinceHit;
	public int forwardDirection;
	private boolean isInReverse;
	private static final int[][][] matrix = new int[][][]{{{0, 0, -1}, {0, 0, 1}}, {{-1, 0, 0}, {1, 0, 0}}, {{-1, -1, 0}, {1, 0, 0}}, {{-1, 0, 0}, {1, -1, 0}}, {{0, 0, -1}, {0, -1, 1}}, {{0, -1, -1}, {0, 0, 1}}, {{0, 0, 1}, {1, 0, 0}}, {{0, 0, 1}, {-1, 0, 0}}, {{0, 0, -1}, {-1, 0, 0}}, {{0, 0, -1}, {1, 0, 0}}};

	public EntityMinecart(World var1) {
		super(var1);
		this.cargoItems = new ItemStack[36];
		this.damageTaken = 0;
		this.timeSinceHit = 0;
		this.forwardDirection = 1;
		this.isInReverse = false;
		this.preventEntitySpawning = true;
		this.setSize(0.98F, 0.7F);
		this.yOffset = this.height / 2.0F;
		this.canTriggerWalking = false;
	}

	public AxisAlignedBB getCollisionBox(Entity var1) {
		return var1.boundingBox;
	}

	public AxisAlignedBB getBoundingBox() {
		return this.boundingBox;
	}

	public boolean canBePushed() {
		return true;
	}

	public EntityMinecart(World var1, double var2, double var4, double var6) {
		this(var1);
		this.setPosition(var2, var4 + (double)this.yOffset, var6);
		this.motionX = 0.0D;
		this.motionY = 0.0D;
		this.motionZ = 0.0D;
		this.prevPosX = var2;
		this.prevPosY = var4;
		this.prevPosZ = var6;
	}

	public double getYOffset() {
		return (double)this.height * 0.2D;
	}

	public boolean attackEntityFrom(Entity var1, int var2) {
		this.forwardDirection = -this.forwardDirection;
		this.timeSinceHit = 10;
		this.damageTaken += var2 * 10;
		if(this.damageTaken > 40) {
			this.entityDropItem(Item.minecart.shiftedIndex, 1, 0.0F);
			this.setEntityDead();
		}

		return true;
	}

	public boolean canBeCollidedWith() {
		return !this.isDead;
	}

	public void setEntityDead() {
		for(int var1 = 0; var1 < this.getSizeInventory(); ++var1) {
			ItemStack var2 = this.getStackInSlot(var1);
			if(var2 != null) {
				float var3 = this.rand.nextFloat() * 0.8F + 0.1F;
				float var4 = this.rand.nextFloat() * 0.8F + 0.1F;
				float var5 = this.rand.nextFloat() * 0.8F + 0.1F;

				while(var2.stackSize > 0) {
					int var6 = this.rand.nextInt(21) + 10;
					if(var6 > var2.stackSize) {
						var6 = var2.stackSize;
					}

					var2.stackSize -= var6;
					EntityItem var7 = new EntityItem(this.worldObj, this.posX + (double)var3, this.posY + (double)var4, this.posZ + (double)var5, new ItemStack(var2.itemID, var6, var2.itemDmg));
					float var8 = 0.05F;
					var7.motionX = (double)((float)this.rand.nextGaussian() * var8);
					var7.motionY = (double)((float)this.rand.nextGaussian() * var8 + 0.2F);
					var7.motionZ = (double)((float)this.rand.nextGaussian() * var8);
					this.worldObj.spawnEntityInWorld(var7);
				}
			}
		}

		super.setEntityDead();
	}

	public void onUpdate() {
		if(this.timeSinceHit > 0) {
			--this.timeSinceHit;
		}

		if(this.damageTaken > 0) {
			--this.damageTaken;
		}

		this.prevPosX = this.posX;
		this.prevPosY = this.posY;
		this.prevPosZ = this.posZ;
		this.motionY -= (double)0.04F;
		int var1 = MathHelper.floor_double(this.posX);
		int var2 = MathHelper.floor_double(this.posY);
		int var3 = MathHelper.floor_double(this.posZ);
		if(this.worldObj.getBlockId(var1, var2 - 1, var3) == Block.minecartTrack.blockID) {
			--var2;
		}

		double var4 = 0.4D;
		double var6 = 1.0D / 128.0D;
		if(this.worldObj.getBlockId(var1, var2, var3) == Block.minecartTrack.blockID) {
			Vec3D var8 = this.getPos(this.posX, this.posY, this.posZ);
			int var9 = this.worldObj.getBlockMetadata(var1, var2, var3);
			this.posY = (double)var2;
			if(var9 >= 2 && var9 <= 5) {
				this.posY = (double)(var2 + 1);
			}

			if(var9 == 2) {
				this.motionX -= var6;
			}

			if(var9 == 3) {
				this.motionX += var6;
			}

			if(var9 == 4) {
				this.motionZ += var6;
			}

			if(var9 == 5) {
				this.motionZ -= var6;
			}

			int[][] var10 = matrix[var9];
			double var11 = (double)(var10[1][0] - var10[0][0]);
			double var13 = (double)(var10[1][2] - var10[0][2]);
			double var15 = Math.sqrt(var11 * var11 + var13 * var13);
			double var17 = this.motionX * var11 + this.motionZ * var13;
			if(var17 < 0.0D) {
				var11 = -var11;
				var13 = -var13;
			}

			double var19 = Math.sqrt(this.motionX * this.motionX + this.motionZ * this.motionZ);
			this.motionX = var19 * var11 / var15;
			this.motionZ = var19 * var13 / var15;
			double var21 = 0.0D;
			double var23 = (double)var1 + 0.5D + (double)var10[0][0] * 0.5D;
			double var25 = (double)var3 + 0.5D + (double)var10[0][2] * 0.5D;
			double var27 = (double)var1 + 0.5D + (double)var10[1][0] * 0.5D;
			double var29 = (double)var3 + 0.5D + (double)var10[1][2] * 0.5D;
			var11 = var27 - var23;
			var13 = var29 - var25;
			double var31;
			double var33;
			if(var11 == 0.0D) {
				this.posX = (double)var1 + 0.5D;
				var21 = this.posZ - (double)var3;
			} else if(var13 == 0.0D) {
				this.posZ = (double)var3 + 0.5D;
				var21 = this.posX - (double)var1;
			} else {
				var31 = this.posX - var23;
				var33 = this.posZ - var25;
				double var35 = (var31 * var11 + var33 * var13) * 2.0D;
				var21 = var35;
			}

			this.posX = var23 + var11 * var21;
			this.posZ = var25 + var13 * var21;
			this.setPosition(this.posX, this.posY + (double)this.yOffset, this.posZ);
			var31 = this.motionX;
			var33 = this.motionZ;
			if(this.riddenByEntity != null) {
				var31 *= 0.75D;
				var33 *= 0.75D;
			}

			if(var31 < -var4) {
				var31 = -var4;
			}

			if(var31 > var4) {
				var31 = var4;
			}

			if(var33 < -var4) {
				var33 = -var4;
			}

			if(var33 > var4) {
				var33 = var4;
			}

			this.moveEntity(var31, 0.0D, var33);
			if(var10[0][1] != 0 && MathHelper.floor_double(this.posX) - var1 == var10[0][0] && MathHelper.floor_double(this.posZ) - var3 == var10[0][2]) {
				this.setPosition(this.posX, this.posY + (double)var10[0][1], this.posZ);
			} else if(var10[1][1] != 0 && MathHelper.floor_double(this.posX) - var1 == var10[1][0] && MathHelper.floor_double(this.posZ) - var3 == var10[1][2]) {
				this.setPosition(this.posX, this.posY + (double)var10[1][1], this.posZ);
			}

			if(this.riddenByEntity != null) {
				this.motionX *= (double)0.997F;
				this.motionY *= 0.0D;
				this.motionZ *= (double)0.997F;
			} else {
				this.motionX *= (double)0.96F;
				this.motionY *= 0.0D;
				this.motionZ *= (double)0.96F;
			}

			Vec3D var41 = this.getPos(this.posX, this.posY, this.posZ);
			if(var41 != null && var8 != null) {
				double var36 = (var8.yCoord - var41.yCoord) * 0.05D;
				var19 = Math.sqrt(this.motionX * this.motionX + this.motionZ * this.motionZ);
				if(var19 > 0.0D) {
					this.motionX = this.motionX / var19 * (var19 + var36);
					this.motionZ = this.motionZ / var19 * (var19 + var36);
				}

				this.setPosition(this.posX, var41.yCoord, this.posZ);
			}

			int var42 = MathHelper.floor_double(this.posX);
			int var37 = MathHelper.floor_double(this.posZ);
			if(var42 != var1 || var37 != var3) {
				var19 = Math.sqrt(this.motionX * this.motionX + this.motionZ * this.motionZ);
				this.motionX = var19 * (double)(var42 - var1);
				this.motionZ = var19 * (double)(var37 - var3);
			}
		} else {
			if(this.motionX < -var4) {
				this.motionX = -var4;
			}

			if(this.motionX > var4) {
				this.motionX = var4;
			}

			if(this.motionZ < -var4) {
				this.motionZ = -var4;
			}

			if(this.motionZ > var4) {
				this.motionZ = var4;
			}

			if(this.onGround) {
				this.motionX *= 0.5D;
				this.motionY *= 0.5D;
				this.motionZ *= 0.5D;
			}

			this.moveEntity(this.motionX, this.motionY, this.motionZ);
			if(!this.onGround) {
				this.motionX *= (double)0.95F;
				this.motionY *= (double)0.95F;
				this.motionZ *= (double)0.95F;
			}
		}

		this.rotationPitch = 0.0F;
		double var38 = this.prevPosX - this.posX;
		double var39 = this.prevPosZ - this.posZ;
		if(var38 * var38 + var39 * var39 > 0.001D) {
			this.rotationYaw = (float)(Math.atan2(var39, var38) * 180.0D / Math.PI);
			if(this.isInReverse) {
				this.rotationYaw += 180.0F;
			}
		}

		double var12;
		for(var12 = (double)(this.rotationYaw - this.prevRotationYaw); var12 >= 180.0D; var12 -= 360.0D) {
		}

		while(var12 < -180.0D) {
			var12 += 360.0D;
		}

		if(var12 < -170.0D || var12 >= 170.0D) {
			this.rotationYaw += 180.0F;
			this.isInReverse = !this.isInReverse;
		}

		this.setRotation(this.rotationYaw, this.rotationPitch);
		List var14 = this.worldObj.getEntitiesWithinAABBExcludingEntity(this, this.boundingBox.expand((double)0.2F, 0.0D, (double)0.2F));
		if(var14 != null && var14.size() > 0) {
			for(int var40 = 0; var40 < var14.size(); ++var40) {
				Entity var16 = (Entity)var14.get(var40);
				if(var16 != this.riddenByEntity && var16.canBePushed() && var16 instanceof EntityMinecart) {
					var16.applyEntityCollision(this);
				}
			}
		}

		if(this.riddenByEntity != null && this.riddenByEntity.isDead) {
			this.riddenByEntity = null;
		}

	}

	public Vec3D getPosOffset(double var1, double var3, double var5, double var7) {
		int var9 = MathHelper.floor_double(var1);
		int var10 = MathHelper.floor_double(var3);
		int var11 = MathHelper.floor_double(var5);
		if(this.worldObj.getBlockId(var9, var10 - 1, var11) == Block.minecartTrack.blockID) {
			--var10;
		}

		if(this.worldObj.getBlockId(var9, var10, var11) == Block.minecartTrack.blockID) {
			int var12 = this.worldObj.getBlockMetadata(var9, var10, var11);
			var3 = (double)var10;
			if(var12 >= 2 && var12 <= 5) {
				var3 = (double)(var10 + 1);
			}

			int[][] var13 = matrix[var12];
			double var14 = (double)(var13[1][0] - var13[0][0]);
			double var16 = (double)(var13[1][2] - var13[0][2]);
			double var18 = Math.sqrt(var14 * var14 + var16 * var16);
			var14 /= var18;
			var16 /= var18;
			var1 += var14 * var7;
			var5 += var16 * var7;
			if(var13[0][1] != 0 && MathHelper.floor_double(var1) - var9 == var13[0][0] && MathHelper.floor_double(var5) - var11 == var13[0][2]) {
				var3 += (double)var13[0][1];
			} else if(var13[1][1] != 0 && MathHelper.floor_double(var1) - var9 == var13[1][0] && MathHelper.floor_double(var5) - var11 == var13[1][2]) {
				var3 += (double)var13[1][1];
			}

			return this.getPos(var1, var3, var5);
		} else {
			return null;
		}
	}

	public Vec3D getPos(double var1, double var3, double var5) {
		int var7 = MathHelper.floor_double(var1);
		int var8 = MathHelper.floor_double(var3);
		int var9 = MathHelper.floor_double(var5);
		if(this.worldObj.getBlockId(var7, var8 - 1, var9) == Block.minecartTrack.blockID) {
			--var8;
		}

		if(this.worldObj.getBlockId(var7, var8, var9) == Block.minecartTrack.blockID) {
			int var10 = this.worldObj.getBlockMetadata(var7, var8, var9);
			var3 = (double)var8;
			if(var10 >= 2 && var10 <= 5) {
				var3 = (double)(var8 + 1);
			}

			int[][] var11 = matrix[var10];
			double var12 = 0.0D;
			double var14 = (double)var7 + 0.5D + (double)var11[0][0] * 0.5D;
			double var16 = (double)var8 + 0.5D + (double)var11[0][1] * 0.5D;
			double var18 = (double)var9 + 0.5D + (double)var11[0][2] * 0.5D;
			double var20 = (double)var7 + 0.5D + (double)var11[1][0] * 0.5D;
			double var22 = (double)var8 + 0.5D + (double)var11[1][1] * 0.5D;
			double var24 = (double)var9 + 0.5D + (double)var11[1][2] * 0.5D;
			double var26 = var20 - var14;
			double var28 = (var22 - var16) * 2.0D;
			double var30 = var24 - var18;
			if(var26 == 0.0D) {
				var1 = (double)var7 + 0.5D;
				var12 = var5 - (double)var9;
			} else if(var30 == 0.0D) {
				var5 = (double)var9 + 0.5D;
				var12 = var1 - (double)var7;
			} else {
				double var32 = var1 - var14;
				double var34 = var5 - var18;
				double var36 = (var32 * var26 + var34 * var30) * 2.0D;
				var12 = var36;
			}

			var1 = var14 + var26 * var12;
			var3 = var16 + var28 * var12;
			var5 = var18 + var30 * var12;
			if(var28 < 0.0D) {
				++var3;
			}

			if(var28 > 0.0D) {
				var3 += 0.5D;
			}

			return Vec3D.createVector(var1, var3, var5);
		} else {
			return null;
		}
	}

	protected void writeEntityToNBT(NBTTagCompound var1) {
		NBTTagList var2 = new NBTTagList();

		for(int var3 = 0; var3 < this.cargoItems.length; ++var3) {
			if(this.cargoItems[var3] != null) {
				NBTTagCompound var4 = new NBTTagCompound();
				var4.setByte("Slot", (byte)var3);
				this.cargoItems[var3].writeToNBT(var4);
				var2.setTag(var4);
			}
		}

		var1.setTag("Items", var2);
	}

	protected void readEntityFromNBT(NBTTagCompound var1) {
		NBTTagList var2 = var1.getTagList("Items");
		this.cargoItems = new ItemStack[this.getSizeInventory()];

		for(int var3 = 0; var3 < var2.tagCount(); ++var3) {
			NBTTagCompound var4 = (NBTTagCompound)var2.tagAt(var3);
			int var5 = var4.getByte("Slot") & 255;
			if(var5 >= 0 && var5 < this.cargoItems.length) {
				this.cargoItems[var5] = new ItemStack(var4);
			}
		}

	}

	public void applyEntityCollision(Entity var1) {
		if(var1 != this.riddenByEntity) {
			double var2 = var1.posX - this.posX;
			double var4 = var1.posZ - this.posZ;
			double var6 = var2 * var2 + var4 * var4;
			if(var6 >= (double)1.0E-4F) {
				var6 = (double)MathHelper.sqrt_double(var6);
				var2 /= var6;
				var4 /= var6;
				double var8 = 1.0D / var6;
				if(var8 > 1.0D) {
					var8 = 1.0D;
				}

				var2 *= var8;
				var4 *= var8;
				var2 *= (double)0.1F;
				var4 *= (double)0.1F;
				var2 *= (double)(1.0F - this.entityCollisionReduction);
				var4 *= (double)(1.0F - this.entityCollisionReduction);
				var2 *= 0.5D;
				var4 *= 0.5D;
				if(var1 instanceof EntityMinecart) {
					double var10 = (var1.motionX + this.motionX) / 2.0D;
					double var12 = (var1.motionZ + this.motionZ) / 2.0D;
					this.motionX = this.motionZ = 0.0D;
					this.addVelocity(var10 - var2, 0.0D, var12 - var4);
					var1.motionX = var1.motionZ = 0.0D;
					var1.addVelocity(var10 + var2, 0.0D, var12 + var4);
				} else {
					this.addVelocity(-var2, 0.0D, -var4);
					var1.addVelocity(var2 / 4.0D, 0.0D, var4 / 4.0D);
				}
			}

		}
	}

	public int getSizeInventory() {
		return 27;
	}

	public ItemStack getStackInSlot(int var1) {
		return this.cargoItems[var1];
	}

	public ItemStack decrStackSize(int var1, int var2) {
		if(this.cargoItems[var1] != null) {
			ItemStack var3;
			if(this.cargoItems[var1].stackSize <= var2) {
				var3 = this.cargoItems[var1];
				this.cargoItems[var1] = null;
				return var3;
			} else {
				var3 = this.cargoItems[var1].splitStack(var2);
				if(this.cargoItems[var1].stackSize == 0) {
					this.cargoItems[var1] = null;
				}

				return var3;
			}
		} else {
			return null;
		}
	}

	public void setInventorySlotContents(int var1, ItemStack var2) {
		this.cargoItems[var1] = var2;
		if(var2 != null && var2.stackSize > this.getInventoryStackLimit()) {
			var2.stackSize = this.getInventoryStackLimit();
		}

	}

	public String getInvName() {
		return "Minecart";
	}

	public int getInventoryStackLimit() {
		return 64;
	}

	public void onInventoryChanged() {
	}

	public boolean interact(EntityPlayer var1) {
		var1.mountEntity(this);
		return true;
	}
}
