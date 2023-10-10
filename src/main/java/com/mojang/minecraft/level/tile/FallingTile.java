package com.mojang.minecraft.level.tile;

import com.mojang.minecraft.level.Level;
import com.mojang.minecraft.level.liquid.Liquid;

public final class FallingTile extends Tile {
	public FallingTile(int var1, int var2) {
		super(var1, var2);
	}

	public final void onBlockAdded(Level var1, int var2, int var3, int var4) {
		this.tryToFall(var1, var2, var3, var4);
	}

	public final void neighborChanged(Level var1, int var2, int var3, int var4, int var5) {
		this.tryToFall(var1, var2, var3, var4);
	}

	private void tryToFall(Level var1, int var2, int var3, int var4) {
		int var11 = var2;
		int var5 = var3;
		int var6 = var4;

		while(true) {
			int var9 = var5 - 1;
			int var7 = var1.getTile(var11, var9, var6);
			boolean var10000;
			if(var7 == 0) {
				var10000 = true;
			} else {
				Liquid var12 = Tile.tiles[var7].getLiquidType();
				var10000 = var12 == Liquid.water ? true : var12 == Liquid.lava;
			}

			if(!var10000 || var5 <= 0) {
				if(var5 != var3) {
					var1.swap(var2, var3, var4, var11, var5, var6);
				}

				return;
			}

			--var5;
		}
	}
}
