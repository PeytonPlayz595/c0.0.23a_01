package net.minecraft.src;

import java.util.Random;

public class NoiseGeneratorPerlin extends NoiseGenerator {
	private int[] permutations;
	public double xCoord;
	public double yCoord;
	public double zCoord;

	public NoiseGeneratorPerlin() {
		this(new Random());
	}

	public NoiseGeneratorPerlin(Random var1) {
		this.permutations = new int[512];
		this.xCoord = var1.nextDouble() * 256.0D;
		this.yCoord = var1.nextDouble() * 256.0D;
		this.zCoord = var1.nextDouble() * 256.0D;

		int var2;
		for(var2 = 0; var2 < 256; this.permutations[var2] = var2++) {
		}

		for(var2 = 0; var2 < 256; ++var2) {
			int var3 = var1.nextInt(256 - var2) + var2;
			int var4 = this.permutations[var2];
			this.permutations[var2] = this.permutations[var3];
			this.permutations[var3] = var4;
			this.permutations[var2 + 256] = this.permutations[var2];
		}

	}

	public double generateNoise(double var1, double var3, double var5) {
		double var7 = var1 + this.xCoord;
		double var9 = var3 + this.yCoord;
		double var11 = var5 + this.zCoord;
		int var13 = (int)var7;
		int var14 = (int)var9;
		int var15 = (int)var11;
		if(var7 < (double)var13) {
			--var13;
		}

		if(var9 < (double)var14) {
			--var14;
		}

		if(var11 < (double)var15) {
			--var15;
		}

		int var16 = var13 & 255;
		int var17 = var14 & 255;
		int var18 = var15 & 255;
		var7 -= (double)var13;
		var9 -= (double)var14;
		var11 -= (double)var15;
		double var19 = var7 * var7 * var7 * (var7 * (var7 * 6.0D - 15.0D) + 10.0D);
		double var21 = var9 * var9 * var9 * (var9 * (var9 * 6.0D - 15.0D) + 10.0D);
		double var23 = var11 * var11 * var11 * (var11 * (var11 * 6.0D - 15.0D) + 10.0D);
		int var25 = this.permutations[var16] + var17;
		int var26 = this.permutations[var25] + var18;
		int var27 = this.permutations[var25 + 1] + var18;
		int var28 = this.permutations[var16 + 1] + var17;
		int var29 = this.permutations[var28] + var18;
		int var30 = this.permutations[var28 + 1] + var18;
		return this.lerp(var23, this.lerp(var21, this.lerp(var19, this.grad(this.permutations[var26], var7, var9, var11), this.grad(this.permutations[var29], var7 - 1.0D, var9, var11)), this.lerp(var19, this.grad(this.permutations[var27], var7, var9 - 1.0D, var11), this.grad(this.permutations[var30], var7 - 1.0D, var9 - 1.0D, var11))), this.lerp(var21, this.lerp(var19, this.grad(this.permutations[var26 + 1], var7, var9, var11 - 1.0D), this.grad(this.permutations[var29 + 1], var7 - 1.0D, var9, var11 - 1.0D)), this.lerp(var19, this.grad(this.permutations[var27 + 1], var7, var9 - 1.0D, var11 - 1.0D), this.grad(this.permutations[var30 + 1], var7 - 1.0D, var9 - 1.0D, var11 - 1.0D))));
	}

	public double lerp(double var1, double var3, double var5) {
		return var3 + var1 * (var5 - var3);
	}

	public double grad(int var1, double var2, double var4, double var6) {
		int var8 = var1 & 15;
		double var9 = var8 < 8 ? var2 : var4;
		double var11 = var8 < 4 ? var4 : (var8 != 12 && var8 != 14 ? var6 : var2);
		return ((var8 & 1) == 0 ? var9 : -var9) + ((var8 & 2) == 0 ? var11 : -var11);
	}

	public double generateNoise(double var1, double var3) {
		return this.generateNoise(var1, var3, 0.0D);
	}

	public double c(double var1, double var3, double var5) {
		return this.generateNoise(var1, var3, var5);
	}

	public void a(double[] var1, int var2, int var3, int var4, int var5, int var6, int var7, double var8, double var10, double var12, double var14) {
		int var16 = 0;
		double var17 = 1.0D / var14;
		int var19 = -1;
		boolean var20 = false;
		boolean var21 = false;
		boolean var22 = false;
		boolean var23 = false;
		boolean var24 = false;
		boolean var25 = false;
		double var26 = 0.0D;
		double var28 = 0.0D;
		double var30 = 0.0D;
		double var32 = 0.0D;

		for(int var34 = 0; var34 < var5; ++var34) {
			double var35 = (double)(var2 + var34) * var8 + this.xCoord;
			int var37 = (int)var35;
			if(var35 < (double)var37) {
				--var37;
			}

			int var38 = var37 & 255;
			var35 -= (double)var37;
			double var39 = var35 * var35 * var35 * (var35 * (var35 * 6.0D - 15.0D) + 10.0D);

			for(int var41 = 0; var41 < var7; ++var41) {
				double var42 = (double)(var4 + var41) * var12 + this.zCoord;
				int var44 = (int)var42;
				if(var42 < (double)var44) {
					--var44;
				}

				int var45 = var44 & 255;
				var42 -= (double)var44;
				double var46 = var42 * var42 * var42 * (var42 * (var42 * 6.0D - 15.0D) + 10.0D);

				for(int var48 = 0; var48 < var6; ++var48) {
					double var49 = (double)(var3 + var48) * var10 + this.yCoord;
					int var51 = (int)var49;
					if(var49 < (double)var51) {
						--var51;
					}

					int var52 = var51 & 255;
					var49 -= (double)var51;
					double var53 = var49 * var49 * var49 * (var49 * (var49 * 6.0D - 15.0D) + 10.0D);
					if(var48 == 0 || var52 != var19) {
						var19 = var52;
						int var61 = this.permutations[var38] + var52;
						int var62 = this.permutations[var61] + var45;
						int var63 = this.permutations[var61 + 1] + var45;
						int var64 = this.permutations[var38 + 1] + var52;
						int var65 = this.permutations[var64] + var45;
						int var66 = this.permutations[var64 + 1] + var45;
						var26 = this.lerp(var39, this.grad(this.permutations[var62], var35, var49, var42), this.grad(this.permutations[var65], var35 - 1.0D, var49, var42));
						var28 = this.lerp(var39, this.grad(this.permutations[var63], var35, var49 - 1.0D, var42), this.grad(this.permutations[var66], var35 - 1.0D, var49 - 1.0D, var42));
						var30 = this.lerp(var39, this.grad(this.permutations[var62 + 1], var35, var49, var42 - 1.0D), this.grad(this.permutations[var65 + 1], var35 - 1.0D, var49, var42 - 1.0D));
						var32 = this.lerp(var39, this.grad(this.permutations[var63 + 1], var35, var49 - 1.0D, var42 - 1.0D), this.grad(this.permutations[var66 + 1], var35 - 1.0D, var49 - 1.0D, var42 - 1.0D));
					}

					double var55 = this.lerp(var53, var26, var28);
					double var57 = this.lerp(var53, var30, var32);
					double var59 = this.lerp(var46, var55, var57);
					int var10001 = var16++;
					var1[var10001] += var59 * var17;
				}
			}
		}

	}
}
