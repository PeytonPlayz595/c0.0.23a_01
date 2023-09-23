package net.minecraft.src;

public abstract class EntityAnimal extends EntityCreature {
	public EntityAnimal(World var1) {
		super(var1);
	}

	protected float getBlockPathWeight(int var1, int var2, int var3) {
		return this.worldObj.getBlockId(var1, var2 - 1, var3) == Block.grass.blockID ? 10.0F : this.worldObj.getBrightness(var1, var2, var3) - 0.5F;
	}

	public void writeEntityToNBT(NBTTagCompound var1) {
		super.writeEntityToNBT(var1);
	}

	public void readEntityFromNBT(NBTTagCompound var1) {
		super.readEntityFromNBT(var1);
	}

	public boolean getCanSpawnHere(double var1, double var3, double var5) {
		return this.worldObj.getBlockLightValue(MathHelper.floor_double(var1), MathHelper.floor_double(var3), MathHelper.floor_double(var5)) > 8 && super.getCanSpawnHere(var1, var3, var5);
	}
}
