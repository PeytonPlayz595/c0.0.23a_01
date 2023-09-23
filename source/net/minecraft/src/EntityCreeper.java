package net.minecraft.src;

public class EntityCreeper extends EntityMonster {
	int timeSinceIgnited;
	int lastActiveTime;
	int fuseTime = 30;
	int creeperState = -1;

	public EntityCreeper(World var1) {
		super(var1);
		this.texture = "/mob/creeper.png";
	}

	public void writeEntityToNBT(NBTTagCompound var1) {
		super.writeEntityToNBT(var1);
	}

	public void readEntityFromNBT(NBTTagCompound var1) {
		super.readEntityFromNBT(var1);
	}

	protected void updatePlayerActionState() {
		this.lastActiveTime = this.timeSinceIgnited;
		if(this.timeSinceIgnited > 0 && this.creeperState < 0) {
			--this.timeSinceIgnited;
		}

		if(this.creeperState >= 0) {
			this.creeperState = 2;
		}

		super.updatePlayerActionState();
		if(this.creeperState != 1) {
			this.creeperState = -1;
		}

	}

	protected void attackEntity(Entity var1, float var2) {
		if(this.creeperState <= 0 && var2 < 3.0F || this.creeperState > 0 && var2 < 7.0F) {
			if(this.timeSinceIgnited == 0) {
				this.worldObj.playSoundAtEntity(this, "random.fuse", 1.0F, 0.5F);
			}

			this.creeperState = 1;
			++this.timeSinceIgnited;
			if(this.timeSinceIgnited == this.fuseTime) {
				this.worldObj.createExplosion(this, this.posX, this.posY, this.posZ, 3.0F);
				this.setEntityDead();
			}

			this.hasAttacked = true;
		}

	}

	public float setCreeperFlashTime(float var1) {
		return ((float)this.lastActiveTime + (float)(this.timeSinceIgnited - this.lastActiveTime) * var1) / (float)(this.fuseTime - 2);
	}

	protected int getDropItemId() {
		return Item.gunpowder.shiftedIndex;
	}
}
