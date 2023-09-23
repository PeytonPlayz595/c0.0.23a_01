package net.minecraft.src;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.nio.IntBuffer;
import javax.imageio.ImageIO;
import org.lwjgl.opengl.GL11;

public class FontRenderer {
	private int[] charWidth = new int[256];
	private int fontTextureName = 0;
	private int fontDisplayLists;
	private IntBuffer buffer = GLAllocation.createIntBuffer(1024);

	public FontRenderer(GameSettings var1, String var2, RenderEngine var3) {
		BufferedImage var4;
		try {
			var4 = ImageIO.read(RenderEngine.class.getResourceAsStream(var2));
		} catch (IOException var18) {
			throw new RuntimeException(var18);
		}

		int var5 = var4.getWidth();
		int var6 = var4.getHeight();
		int[] var7 = new int[var5 * var6];
		var4.getRGB(0, 0, var5, var6, var7, 0, var5);

		int var9;
		int var10;
		int var11;
		int var13;
		int var15;
		int var16;
		for(int var8 = 0; var8 < 128; ++var8) {
			var9 = var8 % 16;
			var10 = var8 / 16;
			var11 = 0;

			for(boolean var12 = false; var11 < 8 && !var12; ++var11) {
				var13 = var9 * 8 + var11;
				var12 = true;

				for(int var14 = 0; var14 < 8 && var12; ++var14) {
					var15 = (var10 * 8 + var14) * var5;
					var16 = var7[var13 + var15] & 255;
					if(var16 > 128) {
						var12 = false;
					}
				}
			}

			if(var8 == 32) {
				var11 = 4;
			}

			this.charWidth[var8] = var11;
		}

		this.fontTextureName = var3.getTexture(var2);
		this.fontDisplayLists = GLAllocation.generateDisplayLists(288);
		Tessellator var19 = Tessellator.instance;

		for(var9 = 0; var9 < 256; ++var9) {
			GL11.glNewList(this.fontDisplayLists + var9, GL11.GL_COMPILE);
			var19.startDrawingQuads();
			var10 = var9 % 16 * 8;
			var11 = var9 / 16 * 8;
			float var20 = 7.99F;
			var19.addVertexWithUV(0.0D, (double)(0.0F + var20), 0.0D, (double)((float)var10 / 128.0F), (double)(((float)var11 + var20) / 128.0F));
			var19.addVertexWithUV((double)(0.0F + var20), (double)(0.0F + var20), 0.0D, (double)(((float)var10 + var20) / 128.0F), (double)(((float)var11 + var20) / 128.0F));
			var19.addVertexWithUV((double)(0.0F + var20), 0.0D, 0.0D, (double)(((float)var10 + var20) / 128.0F), (double)((float)var11 / 128.0F));
			var19.addVertexWithUV(0.0D, 0.0D, 0.0D, (double)((float)var10 / 128.0F), (double)((float)var11 / 128.0F));
			var19.draw();
			GL11.glTranslatef((float)this.charWidth[var9], 0.0F, 0.0F);
			GL11.glEndList();
		}

		for(var9 = 0; var9 < 32; ++var9) {
			var10 = (var9 & 8) * 8;
			var11 = (var9 & 1) * 191 + var10;
			int var21 = ((var9 & 2) >> 1) * 191 + var10;
			var13 = ((var9 & 4) >> 2) * 191 + var10;
			boolean var22 = var9 >= 16;
			if(var1.anaglyph) {
				var15 = (var13 * 30 + var21 * 59 + var11 * 11) / 100;
				var16 = (var13 * 30 + var21 * 70) / 100;
				int var17 = (var13 * 30 + var11 * 70) / 100;
				var13 = var15;
				var21 = var16;
				var11 = var17;
			}

			var9 += 2;
			if(var22) {
				var13 /= 4;
				var21 /= 4;
				var11 /= 4;
			}

			GL11.glColor4f((float)var13 / 255.0F, (float)var21 / 255.0F, (float)var11 / 255.0F, 1.0F);
		}

	}

	public void drawStringWithShadow(String var1, int var2, int var3, int var4) {
		this.renderString(var1, var2 + 1, var3 + 1, var4, true);
		this.drawString(var1, var2, var3, var4);
	}

	public void drawString(String var1, int var2, int var3, int var4) {
		this.renderString(var1, var2, var3, var4, false);
	}

	public void renderString(String var1, int var2, int var3, int var4, boolean var5) {
		if(var1 != null) {
			if(var5) {
				var4 = (var4 & 16579836) >> 2;
			}

			GL11.glBindTexture(GL11.GL_TEXTURE_2D, this.fontTextureName);
			float var6 = (float)(var4 >> 16 & 255) / 255.0F;
			float var7 = (float)(var4 >> 8 & 255) / 255.0F;
			float var8 = (float)(var4 & 255) / 255.0F;
			float var9 = (float)(var4 >> 24 & 255) / 255.0F;
			var9 = 1.0F;
			GL11.glColor4f(var6, var7, var8, var9);
			this.buffer.clear();
			GL11.glPushMatrix();
			GL11.glTranslatef((float)var2, (float)var3, 0.0F);

			for(int var10 = 0; var10 < var1.length(); ++var10) {
				for(; var1.charAt(var10) == 38 && var1.length() > var10 + 1; var10 += 2) {
					int var11 = "0123456789abcdef".indexOf(var1.charAt(var10 + 1));
					if(var11 < 0 || var11 > 15) {
						var11 = 15;
					}

					this.buffer.put(this.fontDisplayLists + 256 + var11 + (var5 ? 16 : 0));
					if(this.buffer.remaining() == 0) {
						this.buffer.flip();
						GL11.glCallLists(this.buffer);
						this.buffer.clear();
					}
				}

				this.buffer.put(this.fontDisplayLists + var1.charAt(var10));
				if(this.buffer.remaining() == 0) {
					this.buffer.flip();
					GL11.glCallLists(this.buffer);
					this.buffer.clear();
				}
			}

			this.buffer.flip();
			GL11.glCallLists(this.buffer);
			GL11.glPopMatrix();
		}
	}

	public int getStringWidth(String var1) {
		if(var1 == null) {
			return 0;
		} else {
			int var2 = 0;

			for(int var3 = 0; var3 < var1.length(); ++var3) {
				if(var1.charAt(var3) == 38) {
					++var3;
				} else {
					var2 += this.charWidth[var1.charAt(var3)];
				}
			}

			return var2;
		}
	}
}
