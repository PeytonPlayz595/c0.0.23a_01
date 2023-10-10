package com.mojang.minecraft;

import com.mojang.minecraft.sound.SoundManager;
import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.ArrayList;

public final class BackgroundDownloader extends Thread {
	private File resourcesFolder;
	private Minecraft minecraft;
	boolean closing = false;

	public BackgroundDownloader(File var1, Minecraft var2) {
		this.minecraft = var2;
		this.setName("Resource download thread");
		this.setDaemon(true);
		this.resourcesFolder = new File(var1, "resources/");
		if(!this.resourcesFolder.exists() && !this.resourcesFolder.mkdirs()) {
			throw new RuntimeException("The working directory could not be created: " + this.resourcesFolder);
		}
	}

	public final void run() {
		try {
			ArrayList var1 = new ArrayList();
			URL var2 = new URL("http://www.minecraft.net/resources/");
			BufferedReader var3 = new BufferedReader(new InputStreamReader(var2.openStream()));
			String var4 = null;

			while(true) {
				var4 = var3.readLine();
				if(var4 == null) {
					var3.close();

					for(int var11 = 0; var11 < var1.size(); ++var11) {
						String var6 = (String)var1.get(var11);
						URL var5 = var2;
						BackgroundDownloader var12 = this;

						try {
							label58: {
								String[] var16 = var6.split(",");
								String var7 = var16[0];
								int var8 = Integer.parseInt(var16[1]);
								Long.parseLong(var16[2]);
								File var17 = new File(var12.resourcesFolder, var7);
								String var19;
								if(!var17.exists() || var17.length() != (long)var8) {
									var17.getParentFile().mkdirs();
									var19 = var7.replaceAll(" ", "%20");
									var12.downloadResource(new URL(var5, var19), var17);
									if(var12.closing) {
										break label58;
									}
								}

								Minecraft var13 = var12.minecraft;
								int var18 = var7.indexOf("/");
								var19 = var7.substring(0, var18);
								String var14 = var7.substring(var18 + 1);
								if(var19.equalsIgnoreCase("sound")) {
									SoundManager var15 = var13.soundManager;
									var15.registerSound(var17, var14);
								} else if(var19.equalsIgnoreCase("music")) {
									var13.soundManager.registerMusic(var14, var17);
								}
							}
						} catch (Exception var9) {
							var9.printStackTrace();
						}

						if(this.closing) {
							return;
						}
					}

					return;
				}

				var1.add(var4);
			}
		} catch (IOException var10) {
			var10.printStackTrace();
		}
	}

	private void downloadResource(URL var1, File var2) throws IOException {
		System.out.println("Downloading " + var1);
		byte[] var3 = new byte[4096];
		DataInputStream var5 = new DataInputStream(var1.openStream());
		DataOutputStream var6 = new DataOutputStream(new FileOutputStream(var2));
		boolean var4 = false;

		do {
			int var7 = var5.read(var3);
			if(var7 < 0) {
				var5.close();
				var6.close();
				return;
			}

			var6.write(var3, 0, var7);
		} while(!this.closing);

	}
}
