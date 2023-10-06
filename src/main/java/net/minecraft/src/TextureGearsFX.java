package net.minecraft.src;

import java.awt.image.BufferedImage;
import java.io.IOException;
import javax.imageio.ImageIO;

public class TextureGearsFX extends TextureFX {
	private int gearRotation = 0;
	private int[] gearColor = new int[1024];
	private int[] gearMiddleColor = new int[1024];
	private int gearRotationDir;

	public TextureGearsFX(int var1) {
		super(Block.cog.blockIndexInTexture + var1);
		this.gearRotationDir = var1 * 2 - 1;
		this.gearRotation = 2;

		try {
			BufferedImage var2 = ImageIO.read(TextureGearsFX.class.getResource("/misc/gear.png"));
			var2.getRGB(0, 0, 32, 32, this.gearColor, 0, 32);
			var2 = ImageIO.read(TextureGearsFX.class.getResource("/misc/gearmiddle.png"));
			var2.getRGB(0, 0, 16, 16, this.gearMiddleColor, 0, 16);
		} catch (IOException var3) {
			var3.printStackTrace();
		}

	}

	public void onTick() {
		this.gearRotation = this.gearRotation + this.gearRotationDir & 63;
		float var1 = MathHelper.sin((float)this.gearRotation / 64.0F * (float)Math.PI * 2.0F);
		float var2 = MathHelper.cos((float)this.gearRotation / 64.0F * (float)Math.PI * 2.0F);

		for(int var3 = 0; var3 < 16; ++var3) {
			for(int var4 = 0; var4 < 16; ++var4) {
				float var5 = ((float)var3 / 15.0F - 0.5F) * 31.0F;
				float var6 = ((float)var4 / 15.0F - 0.5F) * 31.0F;
				float var7 = var2 * var5 - var1 * var6;
				float var8 = var2 * var6 + var1 * var5;
				int var9 = (int)(var7 + 16.0F);
				int var10 = (int)(var8 + 16.0F);
				int var11 = 0;
				int var12;
				if(var9 >= 0 && var10 >= 0 && var9 < 32 && var10 < 32) {
					var11 = this.gearColor[var9 + var10 * 32];
					var12 = this.gearMiddleColor[var3 + var4 * 16];
					if((var12 >> 24 & 255) > 128) {
						var11 = var12;
					}
				}

				var12 = var11 >> 16 & 255;
				int var13 = var11 >> 8 & 255;
				int var14 = var11 & 255;
				int var15 = (var11 >> 24 & 255) > 128 ? 255 : 0;
				int var16 = var3 + var4 * 16;
				this.imageData[var16 * 4 + 0] = (byte)var12;
				this.imageData[var16 * 4 + 1] = (byte)var13;
				this.imageData[var16 * 4 + 2] = (byte)var14;
				this.imageData[var16 * 4 + 3] = (byte)var15;
			}
		}

	}
}
