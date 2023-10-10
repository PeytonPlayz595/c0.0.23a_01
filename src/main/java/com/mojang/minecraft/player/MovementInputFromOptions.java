package com.mojang.minecraft.player;

import com.mojang.minecraft.Options;

public final class MovementInputFromOptions extends MovementInput {
	private boolean[] keys = new boolean[10];
	private Options f;

	public MovementInputFromOptions(Options var1) {
		this.f = var1;
	}

	public final void setKey(int var1, boolean var2) {
		byte var3 = -1;
		if(var1 == this.f.forward.key) {
			var3 = 0;
		}

		if(var1 == this.f.back.key) {
			var3 = 1;
		}

		if(var1 == this.f.left.key) {
			var3 = 2;
		}

		if(var1 == this.f.right.key) {
			var3 = 3;
		}

		if(var1 == this.f.jump.key) {
			var3 = 4;
		}

		if(var3 >= 0) {
			this.keys[var3] = var2;
		}

	}

	public final void releaseAllKeys() {
		for(int var1 = 0; var1 < 10; ++var1) {
			this.keys[var1] = false;
		}

	}

	public final void updatePlayerMoveState() {
		this.moveStrafe = 0.0F;
		this.moveForward = 0.0F;
		if(this.keys[0]) {
			--this.moveForward;
		}

		if(this.keys[1]) {
			++this.moveForward;
		}

		if(this.keys[2]) {
			--this.moveStrafe;
		}

		if(this.keys[3]) {
			++this.moveStrafe;
		}

		this.jumpHeld = this.keys[4];
	}
}
