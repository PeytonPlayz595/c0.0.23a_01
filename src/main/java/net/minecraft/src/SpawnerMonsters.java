package net.minecraft.src;

class SpawnerMonsters extends SpawnerAnimals {
	final PlayerControllerSP playerController;

	SpawnerMonsters(PlayerControllerSP var1, int var2, Class var3, Class[] var4) {
		super(var2, var3, var4);
		this.playerController = var1;
	}

	protected ChunkPosition getRandomSpawningPointInChunk(World var1, int var2, int var3) {
		int var4 = var2 + var1.rand.nextInt(256) - 128;
		int var5 = var1.rand.nextInt(var1.rand.nextInt(var1.rand.nextInt(112) + 8) + 8);
		int var6 = var3 + var1.rand.nextInt(256) - 128;
		return new ChunkPosition(var4, var5, var6);
	}
}
