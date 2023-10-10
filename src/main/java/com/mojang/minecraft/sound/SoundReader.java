package com.mojang.minecraft.sound;

import de.jarnbjo.ogg.EndOfOggStreamException;
import de.jarnbjo.ogg.LogicalOggStreamImpl;
import de.jarnbjo.ogg.OnDemandUrlStream;
import de.jarnbjo.vorbis.IdentificationHeader;
import de.jarnbjo.vorbis.VorbisStream;
import java.io.IOException;
import java.net.URL;

public final class SoundReader {
	public static SoundData read(URL var0) throws IOException {
		OnDemandUrlStream var11 = new OnDemandUrlStream(var0);
		LogicalOggStreamImpl var12 = (LogicalOggStreamImpl)var11.logicalStreams.values().iterator().next();
		VorbisStream var13 = new VorbisStream(var12);
		byte[] var1 = new byte[4096];
		int var2 = 0;
		boolean var3 = false;
		IdentificationHeader var15 = var13.identificationHeader;
		int var4 = var15.channels;
		short[] var5 = new short[4096];
		int var6 = 0;

		while(true) {
			int var16;
			do {
				if(var2 < 0) {
					if(var6 != var5.length) {
						short[] var18 = var5;
						var5 = new short[var6];
						System.arraycopy(var18, 0, var5, 0, var6);
					}

					IdentificationHeader var14 = var13.identificationHeader;
					return new SoundData(var5, (float)var14.sampleRate);
				}

				var16 = 0;

				try {
					while(var16 < var1.length) {
						var2 = var13.readPcm(var1, var16, var1.length - var16);
						if(var2 <= 0) {
							break;
						}

						var16 += var2;
					}
				} catch (EndOfOggStreamException var10) {
					var2 = -1;
				}
			} while(var16 <= 0);

			boolean var7 = false;

			int var8;
			for(int var17 = 0; var17 < var16; var5[var6++] = (short)(var8 / var4)) {
				var8 = 0;

				for(int var9 = 0; var9 < var4; ++var9) {
					var8 += var1[var17++] << 8 | var1[var17++] & 255;
				}

				if(var6 == var5.length) {
					short[] var19 = var5;
					var5 = new short[var5.length << 1];
					System.arraycopy(var19, 0, var5, 0, var6);
				}
			}
		}
	}
}
