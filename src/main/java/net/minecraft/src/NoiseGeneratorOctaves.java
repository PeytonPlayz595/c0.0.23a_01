package net.minecraft.src;

import java.util.Random;

public class NoiseGeneratorOctaves extends NoiseGenerator {
	private NoiseGeneratorPerlin[] generatorCollection;
	private int octaves;

	public NoiseGeneratorOctaves(Random var1, int var2) {
		this.octaves = var2;
		this.generatorCollection = new NoiseGeneratorPerlin[var2];

		for(int var3 = 0; var3 < var2; ++var3) {
			this.generatorCollection[var3] = new NoiseGeneratorPerlin(var1);
		}

	}

	public double generateNoiseOctaves(double var1, double var3) {
		double var5 = 0.0D;
		double var7 = 1.0D;

		for(int var9 = 0; var9 < this.octaves; ++var9) {
			var5 += this.generatorCollection[var9].generateNoise(var1 * var7, var3 * var7) / var7;
			var7 /= 2.0D;
		}

		return var5;
	}

	public double a(double var1, double var3, double var5) {
		double var7 = 0.0D;
		double var9 = 1.0D;

		for(int var11 = 0; var11 < this.octaves; ++var11) {
			var7 += this.generatorCollection[var11].c(var1 * var9, var3 * var9, var5 * var9) / var9;
			var9 /= 2.0D;
		}

		return var7;
	}

	public double[] a(double[] var1, int var2, int var3, int var4, int var5, int var6, int var7, double var8, double var10, double var12) {
		if(var1 == null) {
			var1 = new double[var5 * var6 * var7];
		} else {
			for(int var14 = 0; var14 < var1.length; ++var14) {
				var1[var14] = 0.0D;
			}
		}

		double var17 = 1.0D;

		for(int var16 = 0; var16 < this.octaves; ++var16) {
			this.generatorCollection[var16].a(var1, var2, var3, var4, var5, var6, var7, var8 * var17, var10 * var17, var12 * var17, var17);
			var17 /= 2.0D;
		}

		return var1;
	}
}
