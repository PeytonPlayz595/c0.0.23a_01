package com.mojang.minecraft.sound;

import com.mojang.minecraft.Entity;

public abstract class BaseSoundPos implements SoundPos {
	private Entity listener;

	public BaseSoundPos(Entity var1) {
		this.listener = var1;
	}

	public final float getRotationDiff(float var1, float var2) {
		var1 -= this.listener.x;
		var2 -= this.listener.z;
		float var3 = (float)Math.sqrt((double)(var1 * var1 + var2 * var2));
		var1 /= var3;
		var2 /= var3;
		var3 /= 2.0F;
		if(var3 > 1.0F) {
			var3 = 1.0F;
		}

		float var4 = (float)Math.cos((double)(-this.listener.yRot) * Math.PI / 180.0D + Math.PI);
		float var5 = (float)Math.sin((double)(-this.listener.yRot) * Math.PI / 180.0D + Math.PI);
		return (var5 * var2 - var4 * var1) * var3;
	}

	public final float getDistanceSq(float var1, float var2, float var3) {
		var1 -= this.listener.x;
		var2 -= this.listener.y;
		float var4 = var3 - this.listener.z;
		var4 = (float)Math.sqrt((double)(var1 * var1 + var2 * var2 + var4 * var4));
		var4 = 1.0F - var4 / 32.0F;
		if(var4 < 0.0F) {
			var4 = 0.0F;
		}

		return var4;
	}
}
