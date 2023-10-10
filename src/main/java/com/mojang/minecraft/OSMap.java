package com.mojang.minecraft;

final class OSMap {
	static final int[] osValues = new int[Minecraft.OS.values().length];

	static {
		try {
			osValues[Minecraft.OS.linux.ordinal()] = 1;
		} catch (NoSuchFieldError var3) {
		}

		try {
			osValues[Minecraft.OS.solaris.ordinal()] = 2;
		} catch (NoSuchFieldError var2) {
		}

		try {
			osValues[Minecraft.OS.windows.ordinal()] = 3;
		} catch (NoSuchFieldError var1) {
		}

		try {
			osValues[Minecraft.OS.macos.ordinal()] = 4;
		} catch (NoSuchFieldError var0) {
		}
	}
}
