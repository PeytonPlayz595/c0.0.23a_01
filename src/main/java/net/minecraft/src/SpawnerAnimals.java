package net.minecraft.src;

public class SpawnerAnimals {
	private int maxSpawns;
	private Class entityType;
	private Class[] entities;

	public SpawnerAnimals(int var1, Class var2, Class[] var3) {
		this.maxSpawns = var1;
		this.entityType = var2;
		this.entities = var3;
	}

	public void onUpdate(World var1) {
		int var2 = var1.countEntities(this.entityType);
		if(var2 < this.maxSpawns) {
			for(int var3 = 0; var3 < 10; ++var3) {
				this.performSpawning(var1, 1, var1.playerEntity, (IProgressUpdate)null);
			}
		}

	}

	protected ChunkPosition getRandomSpawningPointInChunk(World var1, int var2, int var3) {
		int var4 = var2 + var1.rand.nextInt(256) - 128;
		int var5 = var1.rand.nextInt(128);
		int var6 = var3 + var1.rand.nextInt(256) - 128;
		return new ChunkPosition(var4, var5, var6);
	}

	private int performSpawning(World var1, int var2, Entity var3, IProgressUpdate var4) {
		int var5 = 0;
		int var6 = MathHelper.floor_double(var3.posX);
		int var7 = MathHelper.floor_double(var3.posZ);
		int var8 = var1.rand.nextInt(this.entities.length);
		ChunkPosition var9 = this.getRandomSpawningPointInChunk(var1, var6, var7);
		int var10 = var9.x;
		int var11 = var9.y;
		int var12 = var9.z;
		if(var1.isBlockNormalCube(var10, var11, var12)) {
			return 0;
		} else if(var1.getBlockMaterial(var10, var11, var12) != Material.air) {
			return 0;
		} else {
			for(int var13 = 0; var13 < 3; ++var13) {
				int var14 = var10;
				int var15 = var11;
				int var16 = var12;
				byte var17 = 6;

				for(int var18 = 0; var18 < 3; ++var18) {
					var14 += var1.rand.nextInt(var17) - var1.rand.nextInt(var17);
					var15 += var1.rand.nextInt(1) - var1.rand.nextInt(1);
					var16 += var1.rand.nextInt(var17) - var1.rand.nextInt(var17);
					if(var1.isBlockNormalCube(var14, var15 - 1, var16) && !var1.isBlockNormalCube(var14, var15, var16) && !var1.getBlockMaterial(var14, var15, var16).getIsLiquid() && !var1.isBlockNormalCube(var14, var15 + 1, var16)) {
						float var19 = (float)var14 + 0.5F;
						float var20 = (float)var15 + 1.0F;
						float var21 = (float)var16 + 0.5F;
						if(var3 != null) {
							double var22 = (double)var19 - var3.posX;
							double var24 = (double)var20 - var3.posY;
							double var26 = (double)var21 - var3.posZ;
							double var28 = var22 * var22 + var24 * var24 + var26 * var26;
							if(var28 < 1024.0D) {
								continue;
							}
						} else {
							float var31 = var19 - (float)var1.spawnX;
							float var23 = var20 - (float)var1.spawnY;
							float var33 = var21 - (float)var1.spawnZ;
							float var25 = var31 * var31 + var23 * var23 + var33 * var33;
							if(var25 < 1024.0F) {
								continue;
							}
						}

						EntityLiving var32;
						try {
							var32 = (EntityLiving)this.entities[var8].getConstructor(new Class[]{World.class}).newInstance(new Object[]{var1});
						} catch (Exception var30) {
							var30.printStackTrace();
							return var5;
						}

						var32.setPositionAndRotation((double)var19, (double)var20, (double)var21, var1.rand.nextFloat() * 360.0F, 0.0F);
						if(var32.getCanSpawnHere((double)var19, (double)var20, (double)var21)) {
							++var5;
							var1.spawnEntityInWorld(var32);
						}
					}
				}
			}

			return var5;
		}
	}
}
