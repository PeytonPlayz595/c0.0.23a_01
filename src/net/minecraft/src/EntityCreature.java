package net.minecraft.src;

public class EntityCreature extends EntityLiving {
	private PathEntity pathToEntity;
	protected Entity playerToAttack;
	protected boolean hasAttacked = false;

	public EntityCreature(World var1) {
		super(var1);
	}

	protected boolean canEntityBeSeen(Entity var1) {
		return this.worldObj.rayTraceBlocks(Vec3D.createVector(this.posX, this.posY + (double)this.getEyeHeight(), this.posZ), Vec3D.createVector(var1.posX, var1.posY + (double)var1.getEyeHeight(), var1.posZ)) == null;
	}

	protected void updatePlayerActionState() {
		this.hasAttacked = false;
		float var1 = 16.0F;
		if(this.playerToAttack == null) {
			this.playerToAttack = this.findPlayerToAttack();
			if(this.playerToAttack != null) {
				this.pathToEntity = this.worldObj.getPathToEntity(this, this.playerToAttack, var1);
			}
		} else if(!this.playerToAttack.isEntityAlive()) {
			this.playerToAttack = null;
		} else {
			float var2 = this.playerToAttack.getDistanceToEntity(this);
			if(this.canEntityBeSeen(this.playerToAttack)) {
				this.attackEntity(this.playerToAttack, var2);
			}
		}

		int var19;
		if(this.hasAttacked || this.playerToAttack == null || this.pathToEntity != null && this.rand.nextInt(20) != 0) {
			if(this.pathToEntity == null || this.rand.nextInt(100) == 0) {
				var19 = -1;
				int var3 = -1;
				int var4 = -1;
				float var5 = -99999.0F;

				for(int var6 = 0; var6 < 50; ++var6) {
					int var7 = MathHelper.floor_double(this.posX + (double)this.rand.nextInt(11) - 5.0D);
					int var8 = MathHelper.floor_double(this.posY + (double)this.rand.nextInt(7) - 3.0D);
					int var9 = MathHelper.floor_double(this.posZ + (double)this.rand.nextInt(11) - 5.0D);
					float var10 = this.getBlockPathWeight(var7, var8, var9);
					if(var10 > var5) {
						var5 = var10;
						var19 = var7;
						var3 = var8;
						var4 = var9;
					}
				}

				if(var19 > 0) {
					this.pathToEntity = this.worldObj.getEntityPathToXYZ(this, var19, var3, var4, var1);
				}
			}
		} else {
			this.pathToEntity = this.worldObj.getPathToEntity(this, this.playerToAttack, var1);
		}

		var19 = MathHelper.floor_double(this.boundingBox.minY);
		boolean var20 = this.handleWaterMovement();
		boolean var21 = this.handleLavaMovement();
		if(this.pathToEntity != null && this.rand.nextInt(100) != 0) {
			Vec3D var22 = this.pathToEntity.getPosition(this);
			float var23 = this.width * 2.0F;

			while(var22 != null && var22.squareDistanceTo(this.posX, this.posY, this.posZ) < (double)(var23 * var23) && var22.yCoord <= (double)var19) {
				this.pathToEntity.incrementPathIndex();
				if(this.pathToEntity.isFinished()) {
					var22 = null;
					this.pathToEntity = null;
				} else {
					var22 = this.pathToEntity.getPosition(this);
				}
			}

			this.isJumping = false;
			if(var22 != null) {
				double var24 = var22.xCoord - this.posX;
				double var25 = var22.zCoord - this.posZ;
				double var11 = var22.yCoord - (double)var19;
				this.rotationYaw = (float)(Math.atan2(var25, var24) * 180.0D / (double)((float)Math.PI)) - 90.0F;
				this.moveForward = this.moveSpeed;
				if(this.hasAttacked && this.playerToAttack != null) {
					double var13 = this.playerToAttack.posX - this.posX;
					double var15 = this.playerToAttack.posZ - this.posZ;
					float var17 = this.rotationYaw;
					this.rotationYaw = (float)(Math.atan2(var15, var13) * 180.0D / (double)((float)Math.PI)) - 90.0F;
					float var18 = (var17 - this.rotationYaw + 90.0F) * (float)Math.PI / 180.0F;
					this.moveStrafing = -MathHelper.sin(var18) * this.moveForward * 1.0F;
					this.moveForward = MathHelper.cos(var18) * this.moveForward * 1.0F;
				}

				if(var11 != 0.0D) {
					this.isJumping = true;
				}
			}

			if(this.rand.nextFloat() < 0.8F && (var20 || var21)) {
				this.isJumping = true;
			}

		} else {
			super.updatePlayerActionState();
			this.pathToEntity = null;
		}
	}

	protected void attackEntity(Entity var1, float var2) {
	}

	protected float getBlockPathWeight(int var1, int var2, int var3) {
		return 0.0F;
	}

	protected Entity findPlayerToAttack() {
		return null;
	}

	public boolean getCanSpawnHere(double var1, double var3, double var5) {
		return super.getCanSpawnHere(var1, var3, var5) && this.getBlockPathWeight((int)var1, (int)var3, (int)var5) >= 0.0F;
	}
}
