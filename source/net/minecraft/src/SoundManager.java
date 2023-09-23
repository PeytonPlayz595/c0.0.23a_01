package net.minecraft.src;

import java.io.File;
import paulscode.sound.SoundSystem;
import paulscode.sound.SoundSystemConfig;
import paulscode.sound.codecs.CodecJOrbis;
import paulscode.sound.codecs.CodecWav;
import paulscode.sound.libraries.LibraryLWJGLOpenAL;

public class SoundManager {
	private SoundSystem sndSystem;
	private SoundPool soundPoolSounds = new SoundPool();
	private SoundPool soundPoolMusic = new SoundPool();
	private int latestSoundID = 0;
	private GameSettings options;
	private boolean loaded = false;

	public void loadSoundSettings(GameSettings var1) {
		this.options = var1;
		if(!this.loaded && (var1.sound || var1.music)) {
			this.tryToSetLibraryAndCodecs();
		}

	}

	private void tryToSetLibraryAndCodecs() {
		try {
			boolean var1 = this.options.sound;
			boolean var2 = this.options.music;
			this.options.sound = false;
			this.options.music = false;
			this.options.saveOptions();
			SoundSystemConfig.addLibrary(LibraryLWJGLOpenAL.class);
			SoundSystemConfig.setCodec("ogg", CodecJOrbis.class);
			SoundSystemConfig.setCodec("wav", CodecWav.class);
			this.sndSystem = new SoundSystem();
			this.options.sound = var1;
			this.options.music = var2;
			this.options.saveOptions();
		} catch (Throwable var3) {
			System.err.println("error linking with the LibraryJavaSound plug-in");
		}

		this.loaded = true;
	}

	public void onSoundOptionsChanged() {
		if(!this.loaded && (this.options.sound || this.options.music)) {
			this.tryToSetLibraryAndCodecs();
		}

		if(!this.options.music) {
			this.sndSystem.stop("BgMusic");
		}

	}

	public void closeMinecraft() {
		if(this.loaded) {
			this.sndSystem.cleanup();
		}

	}

	public void addSound(String var1, File var2) {
		this.soundPoolSounds.addSound(var1, var2);
	}

	public void addMusic(String var1, File var2) {
		this.soundPoolMusic.addSound(var1, var2);
	}

	public void setListener(EntityLiving var1, float var2) {
		if(this.loaded && this.options.sound) {
			if(var1 != null) {
				float var3 = var1.prevRotationPitch + (var1.rotationPitch - var1.prevRotationPitch) * var2;
				float var4 = var1.prevRotationYaw + (var1.rotationYaw - var1.prevRotationYaw) * var2;
				double var5 = var1.prevPosX + (var1.posX - var1.prevPosX) * (double)var2;
				double var7 = var1.prevPosY + (var1.posY - var1.prevPosY) * (double)var2;
				double var9 = var1.prevPosZ + (var1.posZ - var1.prevPosZ) * (double)var2;
				float var11 = MathHelper.cos(-var4 * ((float)Math.PI / 180.0F) - (float)Math.PI);
				float var12 = MathHelper.sin(-var4 * ((float)Math.PI / 180.0F) - (float)Math.PI);
				float var13 = MathHelper.cos(-var3 * ((float)Math.PI / 180.0F));
				float var14 = MathHelper.sin(-var3 * ((float)Math.PI / 180.0F));
				float var15 = -var12 * var13;
				float var17 = -var11 * var13;
				float var18 = -var12 * var14;
				float var20 = -var11 * var14;
				this.sndSystem.setListenerPosition((float)var5, (float)var7, (float)var9);
				this.sndSystem.setListenerOrientation(var15, var14, var17, var18, var13, var20);
			}
		}
	}

	public void playSound(String var1, float var2, float var3, float var4, float var5, float var6) {
		if(this.loaded && this.options.sound) {
			SoundPoolEntry var7 = this.soundPoolSounds.getRandomSoundFromSoundPool(var1);
			if(var7 != null && var5 > 0.0F) {
				this.latestSoundID = (this.latestSoundID + 1) % 256;
				String var8 = "sound_" + this.latestSoundID;
				float var9 = 16.0F;
				if(var5 > 1.0F) {
					var9 *= var5;
				}

				this.sndSystem.newSource(var5 > 1.0F, var8, var7.soundUrl, var7.soundName, false, var2, var3, var4, 2, var9);
				this.sndSystem.setPitch(var8, var6);
				if(var5 > 1.0F) {
					var5 = 1.0F;
				}

				this.sndSystem.setVolume(var8, var5);
				this.sndSystem.play(var8);
			}

		}
	}

	public void playSoundFX(String var1, float var2, float var3) {
		if(this.loaded && this.options.sound) {
			SoundPoolEntry var4 = this.soundPoolSounds.getRandomSoundFromSoundPool(var1);
			if(var4 != null) {
				this.latestSoundID = (this.latestSoundID + 1) % 256;
				String var5 = "sound_" + this.latestSoundID;
				this.sndSystem.newSource(false, var5, var4.soundUrl, var4.soundName, false, 0.0F, 0.0F, 0.0F, 0, 0.0F);
				if(var2 > 1.0F) {
					var2 = 1.0F;
				}

				var2 *= 0.25F;
				this.sndSystem.setPitch(var5, var3);
				this.sndSystem.setVolume(var5, var2);
				this.sndSystem.play(var5);
			}

		}
	}
}
