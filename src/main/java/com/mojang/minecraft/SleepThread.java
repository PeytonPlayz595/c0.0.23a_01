package com.mojang.minecraft;

final class SleepThread extends Thread {
	SleepThread(Minecraft var1) {
		this.setDaemon(true);
		this.start();
	}

	public final void run() {
		while(true) {
			try {
				Thread.sleep(2147483647L);
			} catch (InterruptedException var1) {
			}
		}
	}
}
