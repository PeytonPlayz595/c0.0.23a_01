package com.mojang.minecraft.sound;

import de.jarnbjo.ogg.EndOfOggStreamException;
import de.jarnbjo.vorbis.VorbisStream;
import java.nio.ByteBuffer;

final class MusicThread extends Thread {
	private Music music;

	public MusicThread(Music var1) {
		this.music = var1;
		this.setPriority(10);
		this.setDaemon(true);
	}

	public final void run() {
		try {
			Music var1;
			do {
				if(this.music.stopped) {
					return;
				}

				var1 = this.music;
				ByteBuffer var2;
				if(var1.playing == null) {
					var1 = this.music;
					if(var1.current != null) {
						var1 = this.music;
						var2 = var1.current;
						var1 = this.music;
						var1.playing = var2;
						var2 = null;
						var1 = this.music;
						var1.current = null;
						var1 = this.music;
						var1.playing.clear();
					}
				}

				var1 = this.music;
				if(var1.playing != null) {
					var1 = this.music;
					if(var1.playing.remaining() != 0) {
						while(true) {
							var1 = this.music;
							if(var1.playing.remaining() == 0) {
								break;
							}

							var1 = this.music;
							VorbisStream var10000 = var1.stream;
							var1 = this.music;
							var2 = var1.playing;
							VorbisStream var9 = var10000;
							int var10 = var9.readPcm(var2.array(), var2.position(), var2.remaining());
							var2.position(var2.position() + var10);
							boolean var11 = var10 <= 0;
							if(var11) {
								this.music.finished = true;
								this.music.stopped = true;
								break;
							}
						}
					}
				}

				var1 = this.music;
				if(var1.playing != null) {
					var1 = this.music;
					if(var1.previous == null) {
						var1 = this.music;
						var1.playing.flip();
						var1 = this.music;
						var2 = var1.playing;
						var1 = this.music;
						var1.previous = var2;
						var2 = null;
						var1 = this.music;
						var1.playing = var2;
					}
				}

				Thread.sleep(10L);
				var1 = this.music;
			} while(var1.player.running);

			return;
		} catch (EndOfOggStreamException var6) {
			return;
		} catch (Exception var7) {
			var7.printStackTrace();
		} finally {
			this.music.finished = true;
		}

	}
}
