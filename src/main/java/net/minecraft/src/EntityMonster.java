package net.minecraft.src;

public class EntityMonster extends EntityCreature {
	protected int attackStrength = 2;

	public EntityMonster(World var1) {
		super(var1);
		this.health = 20;
	}

	public void onLivingUpdate() {
		float var1 = this.getEntityBrightness(1.0F);
		if(var1 > 0.5F) {
			this.entityAge += 2;
		}

		super.onLivingUpdate();
	}

	public void onUpdate() {
		super.onUpdate();
		if(this.worldObj.difficultySetting == 0) {
			this.setEntityDead();
		}

	}

	protected Entity findPlayerToAttack() {
		double var1 = this.worldObj.playerEntity.getDistanceSqToEntity(this);
		double var3 = 16.0D;
		return var1 < var3 * var3 && this.canEntityBeSeen(this.worldObj.playerEntity) ? this.worldObj.playerEntity : null;
	}

	public boolean attackEntityFrom(Entity var1, int var2) {
		if(super.attackEntityFrom(var1, var2)) {
			if(var1 != this) {
				this.playerToAttack = var1;
			}

			return true;
		} else {
			return false;
		}
	}

	protected void attackEntity(Entity var1, float var2) {
		if((double)var2 < 2.5D && var1.boundingBox.maxY > this.boundingBox.minY && var1.boundingBox.minY < this.boundingBox.maxY) {
			this.attackTime = 20;
			var1.attackEntityFrom(this, this.attackStrength);
		}

	}

	protected float getBlockPathWeight(int var1, int var2, int var3) {
		return 0.5F - this.worldObj.getBrightness(var1, var2, var3);
	}

	public void writeEntityToNBT(NBTTagCompound var1) {
		super.writeEntityToNBT(var1);
	}

	public void readEntityFromNBT(NBTTagCompound var1) {
		super.readEntityFromNBT(var1);
	}

	public boolean getCanSpawnHere(double var1, double var3, double var5) {
		int var7 = this.worldObj.getBlockLightValue(MathHelper.floor_double(var1), MathHelper.floor_double(var3), MathHelper.floor_double(var5));
		return var7 <= this.rand.nextInt(8) && super.getCanSpawnHere(var1, var3, var5);
	}
}
