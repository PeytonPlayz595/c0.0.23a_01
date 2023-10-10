package com.mojang.minecraft.net;

import com.mojang.comm.SocketConnection;
import com.mojang.minecraft.Minecraft;
import com.mojang.minecraft.gui.ErrorScreen;
import java.io.IOException;

final class ConnectionThread extends Thread {
	private String ip;
	private int port;
	private String username;
	private String mpPass;
	private Minecraft e;
	private ConnectionManager connectionManager;

	ConnectionThread(ConnectionManager var1, String var2, int var3, String var4, String var5, Minecraft var6) {
		this.connectionManager = var1;
		this.ip = var2;
		this.port = var3;
		this.username = var4;
		this.mpPass = var5;
		this.e = var6;
	}

	public final void run() {
		ConnectionManager var1;
		boolean var2;
		try {
			ConnectionManager var10000 = this.connectionManager;
			SocketConnection var5 = new SocketConnection(this.ip, this.port);
			var1 = var10000;
			var1.connection = var5;
			var1 = this.connectionManager;
			ConnectionManager var6 = this.connectionManager;
			SocketConnection var4 = var1.connection;
			var4.manager = var6;
			var1 = this.connectionManager;
			var1.connection.sendPacket(Packet.LOGIN, new Object[]{Byte.valueOf((byte)6), this.username, this.mpPass, Integer.valueOf(0)});
			var2 = true;
			var1 = this.connectionManager;
			var1.processData = var2;
		} catch (IOException var3) {
			this.e.hideGui = false;
			this.e.connectionManager = null;
			this.e.setScreen(new ErrorScreen("Failed to connect", "You failed to connect to the server. It\'s probably down!"));
			var2 = false;
			var1 = this.connectionManager;
			var1.processData = var2;
		}
	}
}
