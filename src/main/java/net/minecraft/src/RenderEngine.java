package net.minecraft.src;

import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.awt.image.ImageObserver;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.IntBuffer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import javax.imageio.ImageIO;
import org.lwjgl.opengl.GL11;

public class RenderEngine {
	private HashMap textureMap = new HashMap();
	private HashMap textureContentsMap = new HashMap();
	private IntBuffer singleIntBuffer = GLAllocation.createIntBuffer(1);
	private ByteBuffer imageData = GLAllocation.createDirectByteBuffer(262144);
	private List textureList = new ArrayList();
	private Map urlToImageDataMap = new HashMap();
	private GameSettings options;
	private boolean clampTexture = false;

	public RenderEngine(GameSettings var1) {
		this.options = var1;
	}

	public int getTexture(String var1) {
		Integer var2 = (Integer)this.textureMap.get(var1);
		if(var2 != null) {
			return var2.intValue();
		} else {
			try {
				this.singleIntBuffer.clear();
				GLAllocation.generateDisplayLists(this.singleIntBuffer);
				int var4 = this.singleIntBuffer.get(0);
				if(var1.startsWith("##")) {
					this.setupTexture(this.unwrapImageByColumns(ImageIO.read(RenderEngine.class.getResourceAsStream(var1.substring(2)))), var4);
				} else if(var1.startsWith("%%")) {
					this.clampTexture = true;
					this.setupTexture(ImageIO.read(RenderEngine.class.getResourceAsStream(var1.substring(2))), var4);
					this.clampTexture = false;
				} else {
					this.setupTexture(ImageIO.read(RenderEngine.class.getResourceAsStream(var1)), var4);
				}

				this.textureMap.put(var1, Integer.valueOf(var4));
				return var4;
			} catch (IOException var3) {
				throw new RuntimeException("!!");
			}
		}
	}

	private BufferedImage unwrapImageByColumns(BufferedImage var1) {
		int var2 = var1.getWidth() / 16;
		BufferedImage var3 = new BufferedImage(16, var1.getHeight() * var2, 2);
		Graphics var4 = var3.getGraphics();

		for(int var5 = 0; var5 < var2; ++var5) {
			var4.drawImage(var1, -var5 * 16, var5 * var1.getHeight(), (ImageObserver)null);
		}

		var4.dispose();
		return var3;
	}

	public int allocateAndSetupTexture(BufferedImage var1) {
		this.singleIntBuffer.clear();
		GLAllocation.generateDisplayLists(this.singleIntBuffer);
		int var2 = this.singleIntBuffer.get(0);
		this.setupTexture(var1, var2);
		this.textureContentsMap.put(Integer.valueOf(var2), var1);
		return var2;
	}

	public void setupTexture(BufferedImage var1, int var2) {
		GL11.glBindTexture(GL11.GL_TEXTURE_2D, var2);
		GL11.glTexParameteri(GL11.GL_TEXTURE_2D, GL11.GL_TEXTURE_MIN_FILTER, GL11.GL_NEAREST);
		GL11.glTexParameteri(GL11.GL_TEXTURE_2D, GL11.GL_TEXTURE_MAG_FILTER, GL11.GL_NEAREST);
		if(this.clampTexture) {
			GL11.glTexParameteri(GL11.GL_TEXTURE_2D, GL11.GL_TEXTURE_WRAP_S, GL11.GL_CLAMP);
			GL11.glTexParameteri(GL11.GL_TEXTURE_2D, GL11.GL_TEXTURE_WRAP_T, GL11.GL_CLAMP);
		} else {
			GL11.glTexParameteri(GL11.GL_TEXTURE_2D, GL11.GL_TEXTURE_WRAP_S, GL11.GL_REPEAT);
			GL11.glTexParameteri(GL11.GL_TEXTURE_2D, GL11.GL_TEXTURE_WRAP_T, GL11.GL_REPEAT);
		}

		int var3 = var1.getWidth();
		int var4 = var1.getHeight();
		int[] var5 = new int[var3 * var4];
		byte[] var6 = new byte[var3 * var4 * 4];
		var1.getRGB(0, 0, var3, var4, var5, 0, var3);

		for(int var7 = 0; var7 < var5.length; ++var7) {
			int var8 = var5[var7] >> 24 & 255;
			int var9 = var5[var7] >> 16 & 255;
			int var10 = var5[var7] >> 8 & 255;
			int var11 = var5[var7] & 255;
			if(this.options != null && this.options.anaglyph) {
				int var12 = (var9 * 30 + var10 * 59 + var11 * 11) / 100;
				int var13 = (var9 * 30 + var10 * 70) / 100;
				int var14 = (var9 * 30 + var11 * 70) / 100;
				var9 = var12;
				var10 = var13;
				var11 = var14;
			}

			var6[var7 * 4 + 0] = (byte)var9;
			var6[var7 * 4 + 1] = (byte)var10;
			var6[var7 * 4 + 2] = (byte)var11;
			var6[var7 * 4 + 3] = (byte)var8;
		}

		this.imageData.clear();
		this.imageData.put(var6);
		this.imageData.position(0).limit(var6.length);
		GL11.glTexImage2D(GL11.GL_TEXTURE_2D, 0, GL11.GL_RGBA, var3, var4, 0, GL11.GL_RGBA, GL11.GL_UNSIGNED_BYTE, (ByteBuffer)this.imageData);
	}

	public void deleteTexture(int var1) {
		this.textureContentsMap.remove(Integer.valueOf(var1));
		this.singleIntBuffer.clear();
		this.singleIntBuffer.put(var1);
		this.singleIntBuffer.flip();
		GL11.glDeleteTextures(this.singleIntBuffer);
	}

	public int getTextureForDownloadableImage(String var1, String var2) {
		ThreadDownloadImageData var3 = (ThreadDownloadImageData)this.urlToImageDataMap.get(var1);
		if(var3 != null && var3.image != null && !var3.textureSetupComplete) {
			if(var3.textureName < 0) {
				var3.textureName = this.allocateAndSetupTexture(var3.image);
			} else {
				this.setupTexture(var3.image, var3.textureName);
			}

			var3.textureSetupComplete = true;
		}

		return var3 != null && var3.textureName >= 0 ? var3.textureName : this.getTexture(var2);
	}

	public ThreadDownloadImageData obtainImageData(String var1, ImageBuffer var2) {
		ThreadDownloadImageData var3 = (ThreadDownloadImageData)this.urlToImageDataMap.get(var1);
		if(var3 == null) {
			this.urlToImageDataMap.put(var1, new ThreadDownloadImageData(var1, var2));
		} else {
			++var3.referenceCount;
		}

		return var3;
	}

	public void releaseImageData(String var1) {
		ThreadDownloadImageData var2 = (ThreadDownloadImageData)this.urlToImageDataMap.get(var1);
		if(var2 != null) {
			--var2.referenceCount;
			if(var2.referenceCount == 0) {
				if(var2.textureName >= 0) {
					this.deleteTexture(var2.textureName);
				}

				this.urlToImageDataMap.remove(var1);
			}
		}

	}

	public void registerTextureFX(TextureFX var1) {
		this.textureList.add(var1);
		var1.onTick();
	}

	public void updateDynamicTextures() {
		int var1;
		TextureFX var2;
		for(var1 = 0; var1 < this.textureList.size(); ++var1) {
			var2 = (TextureFX)this.textureList.get(var1);
			var2.anaglyphEnabled = this.options.anaglyph;
			var2.onTick();
			this.imageData.clear();
			this.imageData.put(var2.imageData);
			this.imageData.position(0).limit(var2.imageData.length);

			for(int var3 = 0; var3 < var2.tileSize; ++var3) {
				for(int var4 = 0; var4 < var2.tileSize; ++var4) {
					GL11.glTexSubImage2D(GL11.GL_TEXTURE_2D, 0, var2.iconIndex % 16 * 16 + var3 * 16, var2.iconIndex / 16 * 16 + var4 * 16, 16, 16, GL11.GL_RGBA, GL11.GL_UNSIGNED_BYTE, (ByteBuffer)this.imageData);
				}
			}
		}

		for(var1 = 0; var1 < this.textureList.size(); ++var1) {
			var2 = (TextureFX)this.textureList.get(var1);
			if(var2.textureId > 0) {
				this.imageData.clear();
				this.imageData.put(var2.imageData);
				this.imageData.position(0).limit(var2.imageData.length);
				GL11.glBindTexture(GL11.GL_TEXTURE_2D, var2.textureId);
				GL11.glTexSubImage2D(GL11.GL_TEXTURE_2D, 0, 0, 0, 16, 16, GL11.GL_RGBA, GL11.GL_UNSIGNED_BYTE, (ByteBuffer)this.imageData);
			}
		}

	}

	public void refreshTextures() {
		Iterator var1 = this.textureContentsMap.keySet().iterator();

		BufferedImage var3;
		while(var1.hasNext()) {
			int var2 = ((Integer)var1.next()).intValue();
			var3 = (BufferedImage)this.textureContentsMap.get(Integer.valueOf(var2));
			this.setupTexture(var3, var2);
		}

		ThreadDownloadImageData var6;
		for(var1 = this.urlToImageDataMap.values().iterator(); var1.hasNext(); var6.textureSetupComplete = false) {
			var6 = (ThreadDownloadImageData)var1.next();
		}

		var1 = this.textureMap.keySet().iterator();

		while(var1.hasNext()) {
			String var7 = (String)var1.next();

			try {
				if(var7.startsWith("##")) {
					var3 = this.unwrapImageByColumns(ImageIO.read(RenderEngine.class.getResourceAsStream(var7.substring(2))));
				} else if(var7.startsWith("%%")) {
					this.clampTexture = true;
					var3 = ImageIO.read(RenderEngine.class.getResourceAsStream(var7.substring(2)));
					this.clampTexture = false;
				} else {
					var3 = ImageIO.read(RenderEngine.class.getResourceAsStream(var7));
				}

				int var4 = ((Integer)this.textureMap.get(var7)).intValue();
				this.setupTexture(var3, var4);
			} catch (IOException var5) {
				var5.printStackTrace();
			}
		}

	}

	public void bindTexture(int var1) {
		if(var1 >= 0) {
			GL11.glBindTexture(GL11.GL_TEXTURE_2D, var1);
		}
	}
}
