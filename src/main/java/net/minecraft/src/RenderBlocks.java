package net.minecraft.src;

import org.lwjgl.opengl.GL11;

public class RenderBlocks {
	private IBlockAccess blockAccess;
	private int overrideBlockTexture = -1;
	private boolean flipTexture = false;
	private boolean renderAllFaces = false;

	public RenderBlocks(IBlockAccess var1) {
		this.blockAccess = var1;
	}

	public RenderBlocks() {
	}

	public void renderBlockUsingTexture(Block var1, int var2, int var3, int var4, int var5) {
		this.overrideBlockTexture = var5;
		this.renderBlockByRenderType(var1, var2, var3, var4);
		this.overrideBlockTexture = -1;
	}

	public boolean renderBlockByRenderType(Block var1, int var2, int var3, int var4) {
		int var5 = var1.getRenderType();
		var1.setBlockBoundsBasedOnState(this.blockAccess, var2, var3, var4);
		return var5 == 0 ? this.renderStandardBlock(var1, var2, var3, var4) : (var5 == 4 ? this.renderBlockFluids(var1, var2, var3, var4) : (var5 == 1 ? this.renderBlockReed(var1, var2, var3, var4) : (var5 == 6 ? this.renderBlockCrops(var1, var2, var3, var4) : (var5 == 2 ? this.renderBlockTorch(var1, var2, var3, var4) : (var5 == 3 ? this.renderBlockFire(var1, var2, var3, var4) : (var5 == 5 ? this.renderBlockGears(var1, var2, var3, var4) : (var5 == 8 ? this.renderBlockLadder(var1, var2, var3, var4) : (var5 == 7 ? this.renderBlockDoor(var1, var2, var3, var4) : (var5 == 9 ? this.renderBlockMinecartTrack(var1, var2, var3, var4) : (var5 == 10 ? this.renderBlockStairs(var1, var2, var3, var4) : (var5 == 11 ? this.renderBlockFence(var1, var2, var3, var4) : false)))))))))));
	}

	public boolean renderBlockTorch(Block var1, int var2, int var3, int var4) {
		int var5 = this.blockAccess.getBlockMetadata(var2, var3, var4);
		Tessellator var6 = Tessellator.instance;
		float var7 = var1.getBlockBrightness(this.blockAccess, var2, var3, var4);
		if(Block.lightValue[var1.blockID] > 0) {
			var7 = 1.0F;
		}

		var6.setColorOpaque_F(var7, var7, var7);
		double var8 = (double)0.4F;
		double var10 = 0.5D - var8;
		double var12 = (double)0.2F;
		if(var5 == 1) {
			this.renderTorchAtAngle(var1, (double)var2 - var10, (double)var3 + var12, (double)var4, -var8, 0.0D);
		} else if(var5 == 2) {
			this.renderTorchAtAngle(var1, (double)var2 + var10, (double)var3 + var12, (double)var4, var8, 0.0D);
		} else if(var5 == 3) {
			this.renderTorchAtAngle(var1, (double)var2, (double)var3 + var12, (double)var4 - var10, 0.0D, -var8);
		} else if(var5 == 4) {
			this.renderTorchAtAngle(var1, (double)var2, (double)var3 + var12, (double)var4 + var10, 0.0D, var8);
		} else {
			this.renderTorchAtAngle(var1, (double)var2, (double)var3, (double)var4, 0.0D, 0.0D);
		}

		return true;
	}

	public boolean renderBlockFire(Block var1, int var2, int var3, int var4) {
		Tessellator var5 = Tessellator.instance;
		int var6 = var1.getBlockTextureFromSide(0);
		if(this.overrideBlockTexture >= 0) {
			var6 = this.overrideBlockTexture;
		}

		float var7 = var1.getBlockBrightness(this.blockAccess, var2, var3, var4);
		var5.setColorOpaque_F(var7, var7, var7);
		int var8 = (var6 & 15) << 4;
		int var9 = var6 & 240;
		double var10 = (double)((float)var8 / 256.0F);
		double var12 = (double)(((float)var8 + 15.99F) / 256.0F);
		double var14 = (double)((float)var9 / 256.0F);
		double var16 = (double)(((float)var9 + 15.99F) / 256.0F);
		float var18 = 1.4F;
		double var21;
		double var23;
		double var25;
		double var27;
		double var29;
		double var31;
		double var33;
		if(!this.blockAccess.isBlockNormalCube(var2, var3 - 1, var4) && !Block.fire.canBlockCatchFire(this.blockAccess, var2, var3 - 1, var4)) {
			float var37 = 0.2F;
			float var20 = 1.0F / 16.0F;
			if((var2 + var3 + var4 & 1) == 1) {
				var10 = (double)((float)var8 / 256.0F);
				var12 = (double)(((float)var8 + 15.99F) / 256.0F);
				var14 = (double)((float)(var9 + 16) / 256.0F);
				var16 = (double)(((float)var9 + 15.99F + 16.0F) / 256.0F);
			}

			if((var2 / 2 + var3 / 2 + var4 / 2 & 1) == 1) {
				var21 = var12;
				var12 = var10;
				var10 = var21;
			}

			if(Block.fire.canBlockCatchFire(this.blockAccess, var2 - 1, var3, var4)) {
				var5.addVertexWithUV((double)((float)var2 + var37), (double)((float)var3 + var18 + var20), (double)(var4 + 1), var12, var14);
				var5.addVertexWithUV((double)(var2 + 0), (double)((float)(var3 + 0) + var20), (double)(var4 + 1), var12, var16);
				var5.addVertexWithUV((double)(var2 + 0), (double)((float)(var3 + 0) + var20), (double)(var4 + 0), var10, var16);
				var5.addVertexWithUV((double)((float)var2 + var37), (double)((float)var3 + var18 + var20), (double)(var4 + 0), var10, var14);
				var5.addVertexWithUV((double)((float)var2 + var37), (double)((float)var3 + var18 + var20), (double)(var4 + 0), var10, var14);
				var5.addVertexWithUV((double)(var2 + 0), (double)((float)(var3 + 0) + var20), (double)(var4 + 0), var10, var16);
				var5.addVertexWithUV((double)(var2 + 0), (double)((float)(var3 + 0) + var20), (double)(var4 + 1), var12, var16);
				var5.addVertexWithUV((double)((float)var2 + var37), (double)((float)var3 + var18 + var20), (double)(var4 + 1), var12, var14);
			}

			if(Block.fire.canBlockCatchFire(this.blockAccess, var2 + 1, var3, var4)) {
				var5.addVertexWithUV((double)((float)(var2 + 1) - var37), (double)((float)var3 + var18 + var20), (double)(var4 + 0), var10, var14);
				var5.addVertexWithUV((double)(var2 + 1 - 0), (double)((float)(var3 + 0) + var20), (double)(var4 + 0), var10, var16);
				var5.addVertexWithUV((double)(var2 + 1 - 0), (double)((float)(var3 + 0) + var20), (double)(var4 + 1), var12, var16);
				var5.addVertexWithUV((double)((float)(var2 + 1) - var37), (double)((float)var3 + var18 + var20), (double)(var4 + 1), var12, var14);
				var5.addVertexWithUV((double)((float)(var2 + 1) - var37), (double)((float)var3 + var18 + var20), (double)(var4 + 1), var12, var14);
				var5.addVertexWithUV((double)(var2 + 1 - 0), (double)((float)(var3 + 0) + var20), (double)(var4 + 1), var12, var16);
				var5.addVertexWithUV((double)(var2 + 1 - 0), (double)((float)(var3 + 0) + var20), (double)(var4 + 0), var10, var16);
				var5.addVertexWithUV((double)((float)(var2 + 1) - var37), (double)((float)var3 + var18 + var20), (double)(var4 + 0), var10, var14);
			}

			if(Block.fire.canBlockCatchFire(this.blockAccess, var2, var3, var4 - 1)) {
				var5.addVertexWithUV((double)(var2 + 0), (double)((float)var3 + var18 + var20), (double)((float)var4 + var37), var12, var14);
				var5.addVertexWithUV((double)(var2 + 0), (double)((float)(var3 + 0) + var20), (double)(var4 + 0), var12, var16);
				var5.addVertexWithUV((double)(var2 + 1), (double)((float)(var3 + 0) + var20), (double)(var4 + 0), var10, var16);
				var5.addVertexWithUV((double)(var2 + 1), (double)((float)var3 + var18 + var20), (double)((float)var4 + var37), var10, var14);
				var5.addVertexWithUV((double)(var2 + 1), (double)((float)var3 + var18 + var20), (double)((float)var4 + var37), var10, var14);
				var5.addVertexWithUV((double)(var2 + 1), (double)((float)(var3 + 0) + var20), (double)(var4 + 0), var10, var16);
				var5.addVertexWithUV((double)(var2 + 0), (double)((float)(var3 + 0) + var20), (double)(var4 + 0), var12, var16);
				var5.addVertexWithUV((double)(var2 + 0), (double)((float)var3 + var18 + var20), (double)((float)var4 + var37), var12, var14);
			}

			if(Block.fire.canBlockCatchFire(this.blockAccess, var2, var3, var4 + 1)) {
				var5.addVertexWithUV((double)(var2 + 1), (double)((float)var3 + var18 + var20), (double)((float)(var4 + 1) - var37), var10, var14);
				var5.addVertexWithUV((double)(var2 + 1), (double)((float)(var3 + 0) + var20), (double)(var4 + 1 - 0), var10, var16);
				var5.addVertexWithUV((double)(var2 + 0), (double)((float)(var3 + 0) + var20), (double)(var4 + 1 - 0), var12, var16);
				var5.addVertexWithUV((double)(var2 + 0), (double)((float)var3 + var18 + var20), (double)((float)(var4 + 1) - var37), var12, var14);
				var5.addVertexWithUV((double)(var2 + 0), (double)((float)var3 + var18 + var20), (double)((float)(var4 + 1) - var37), var12, var14);
				var5.addVertexWithUV((double)(var2 + 0), (double)((float)(var3 + 0) + var20), (double)(var4 + 1 - 0), var12, var16);
				var5.addVertexWithUV((double)(var2 + 1), (double)((float)(var3 + 0) + var20), (double)(var4 + 1 - 0), var10, var16);
				var5.addVertexWithUV((double)(var2 + 1), (double)((float)var3 + var18 + var20), (double)((float)(var4 + 1) - var37), var10, var14);
			}

			if(Block.fire.canBlockCatchFire(this.blockAccess, var2, var3 + 1, var4)) {
				var21 = (double)var2 + 0.5D + 0.5D;
				var23 = (double)var2 + 0.5D - 0.5D;
				var25 = (double)var4 + 0.5D + 0.5D;
				var27 = (double)var4 + 0.5D - 0.5D;
				var29 = (double)var2 + 0.5D - 0.5D;
				var31 = (double)var2 + 0.5D + 0.5D;
				var33 = (double)var4 + 0.5D - 0.5D;
				double var35 = (double)var4 + 0.5D + 0.5D;
				var10 = (double)((float)var8 / 256.0F);
				var12 = (double)(((float)var8 + 15.99F) / 256.0F);
				var14 = (double)((float)var9 / 256.0F);
				var16 = (double)(((float)var9 + 15.99F) / 256.0F);
				++var3;
				var18 = -0.2F;
				if((var2 + var3 + var4 & 1) == 0) {
					var5.addVertexWithUV(var29, (double)((float)var3 + var18), (double)(var4 + 0), var12, var14);
					var5.addVertexWithUV(var21, (double)(var3 + 0), (double)(var4 + 0), var12, var16);
					var5.addVertexWithUV(var21, (double)(var3 + 0), (double)(var4 + 1), var10, var16);
					var5.addVertexWithUV(var29, (double)((float)var3 + var18), (double)(var4 + 1), var10, var14);
					var10 = (double)((float)var8 / 256.0F);
					var12 = (double)(((float)var8 + 15.99F) / 256.0F);
					var14 = (double)((float)(var9 + 16) / 256.0F);
					var16 = (double)(((float)var9 + 15.99F + 16.0F) / 256.0F);
					var5.addVertexWithUV(var31, (double)((float)var3 + var18), (double)(var4 + 1), var12, var14);
					var5.addVertexWithUV(var23, (double)(var3 + 0), (double)(var4 + 1), var12, var16);
					var5.addVertexWithUV(var23, (double)(var3 + 0), (double)(var4 + 0), var10, var16);
					var5.addVertexWithUV(var31, (double)((float)var3 + var18), (double)(var4 + 0), var10, var14);
				} else {
					var5.addVertexWithUV((double)(var2 + 0), (double)((float)var3 + var18), var35, var12, var14);
					var5.addVertexWithUV((double)(var2 + 0), (double)(var3 + 0), var27, var12, var16);
					var5.addVertexWithUV((double)(var2 + 1), (double)(var3 + 0), var27, var10, var16);
					var5.addVertexWithUV((double)(var2 + 1), (double)((float)var3 + var18), var35, var10, var14);
					var10 = (double)((float)var8 / 256.0F);
					var12 = (double)(((float)var8 + 15.99F) / 256.0F);
					var14 = (double)((float)(var9 + 16) / 256.0F);
					var16 = (double)(((float)var9 + 15.99F + 16.0F) / 256.0F);
					var5.addVertexWithUV((double)(var2 + 1), (double)((float)var3 + var18), var33, var12, var14);
					var5.addVertexWithUV((double)(var2 + 1), (double)(var3 + 0), var25, var12, var16);
					var5.addVertexWithUV((double)(var2 + 0), (double)(var3 + 0), var25, var10, var16);
					var5.addVertexWithUV((double)(var2 + 0), (double)((float)var3 + var18), var33, var10, var14);
				}
			}
		} else {
			double var19 = (double)var2 + 0.5D + 0.2D;
			var21 = (double)var2 + 0.5D - 0.2D;
			var23 = (double)var4 + 0.5D + 0.2D;
			var25 = (double)var4 + 0.5D - 0.2D;
			var27 = (double)var2 + 0.5D - 0.3D;
			var29 = (double)var2 + 0.5D + 0.3D;
			var31 = (double)var4 + 0.5D - 0.3D;
			var33 = (double)var4 + 0.5D + 0.3D;
			var5.addVertexWithUV(var27, (double)((float)var3 + var18), (double)(var4 + 1), var12, var14);
			var5.addVertexWithUV(var19, (double)(var3 + 0), (double)(var4 + 1), var12, var16);
			var5.addVertexWithUV(var19, (double)(var3 + 0), (double)(var4 + 0), var10, var16);
			var5.addVertexWithUV(var27, (double)((float)var3 + var18), (double)(var4 + 0), var10, var14);
			var5.addVertexWithUV(var29, (double)((float)var3 + var18), (double)(var4 + 0), var12, var14);
			var5.addVertexWithUV(var21, (double)(var3 + 0), (double)(var4 + 0), var12, var16);
			var5.addVertexWithUV(var21, (double)(var3 + 0), (double)(var4 + 1), var10, var16);
			var5.addVertexWithUV(var29, (double)((float)var3 + var18), (double)(var4 + 1), var10, var14);
			var10 = (double)((float)var8 / 256.0F);
			var12 = (double)(((float)var8 + 15.99F) / 256.0F);
			var14 = (double)((float)(var9 + 16) / 256.0F);
			var16 = (double)(((float)var9 + 15.99F + 16.0F) / 256.0F);
			var5.addVertexWithUV((double)(var2 + 1), (double)((float)var3 + var18), var33, var12, var14);
			var5.addVertexWithUV((double)(var2 + 1), (double)(var3 + 0), var25, var12, var16);
			var5.addVertexWithUV((double)(var2 + 0), (double)(var3 + 0), var25, var10, var16);
			var5.addVertexWithUV((double)(var2 + 0), (double)((float)var3 + var18), var33, var10, var14);
			var5.addVertexWithUV((double)(var2 + 0), (double)((float)var3 + var18), var31, var12, var14);
			var5.addVertexWithUV((double)(var2 + 0), (double)(var3 + 0), var23, var12, var16);
			var5.addVertexWithUV((double)(var2 + 1), (double)(var3 + 0), var23, var10, var16);
			var5.addVertexWithUV((double)(var2 + 1), (double)((float)var3 + var18), var31, var10, var14);
			var19 = (double)var2 + 0.5D - 0.5D;
			var21 = (double)var2 + 0.5D + 0.5D;
			var23 = (double)var4 + 0.5D - 0.5D;
			var25 = (double)var4 + 0.5D + 0.5D;
			var27 = (double)var2 + 0.5D - 0.4D;
			var29 = (double)var2 + 0.5D + 0.4D;
			var31 = (double)var4 + 0.5D - 0.4D;
			var33 = (double)var4 + 0.5D + 0.4D;
			var5.addVertexWithUV(var27, (double)((float)var3 + var18), (double)(var4 + 0), var10, var14);
			var5.addVertexWithUV(var19, (double)(var3 + 0), (double)(var4 + 0), var10, var16);
			var5.addVertexWithUV(var19, (double)(var3 + 0), (double)(var4 + 1), var12, var16);
			var5.addVertexWithUV(var27, (double)((float)var3 + var18), (double)(var4 + 1), var12, var14);
			var5.addVertexWithUV(var29, (double)((float)var3 + var18), (double)(var4 + 1), var10, var14);
			var5.addVertexWithUV(var21, (double)(var3 + 0), (double)(var4 + 1), var10, var16);
			var5.addVertexWithUV(var21, (double)(var3 + 0), (double)(var4 + 0), var12, var16);
			var5.addVertexWithUV(var29, (double)((float)var3 + var18), (double)(var4 + 0), var12, var14);
			var10 = (double)((float)var8 / 256.0F);
			var12 = (double)(((float)var8 + 15.99F) / 256.0F);
			var14 = (double)((float)var9 / 256.0F);
			var16 = (double)(((float)var9 + 15.99F) / 256.0F);
			var5.addVertexWithUV((double)(var2 + 0), (double)((float)var3 + var18), var33, var10, var14);
			var5.addVertexWithUV((double)(var2 + 0), (double)(var3 + 0), var25, var10, var16);
			var5.addVertexWithUV((double)(var2 + 1), (double)(var3 + 0), var25, var12, var16);
			var5.addVertexWithUV((double)(var2 + 1), (double)((float)var3 + var18), var33, var12, var14);
			var5.addVertexWithUV((double)(var2 + 1), (double)((float)var3 + var18), var31, var10, var14);
			var5.addVertexWithUV((double)(var2 + 1), (double)(var3 + 0), var23, var10, var16);
			var5.addVertexWithUV((double)(var2 + 0), (double)(var3 + 0), var23, var12, var16);
			var5.addVertexWithUV((double)(var2 + 0), (double)((float)var3 + var18), var31, var12, var14);
		}

		return true;
	}

	public boolean renderBlockGears(Block var1, int var2, int var3, int var4) {
		Tessellator var5 = Tessellator.instance;
		int var6 = var1.getBlockTextureFromSide(0);
		if(this.overrideBlockTexture >= 0) {
			var6 = this.overrideBlockTexture;
		}

		float var7 = var1.getBlockBrightness(this.blockAccess, var2, var3, var4);
		var5.setColorOpaque_F(var7, var7, var7);
		int var8 = ((var6 & 15) << 4) + 16;
		int var9 = (var6 & 15) << 4;
		int var10 = var6 & 240;
		if((var2 + var3 + var4 & 1) == 1) {
			var8 = (var6 & 15) << 4;
			var9 = ((var6 & 15) << 4) + 16;
		}

		double var11 = (double)((float)var8 / 256.0F);
		double var13 = (double)(((float)var8 + 15.99F) / 256.0F);
		double var15 = (double)((float)var10 / 256.0F);
		double var17 = (double)(((float)var10 + 15.99F) / 256.0F);
		double var19 = (double)((float)var9 / 256.0F);
		double var21 = (double)(((float)var9 + 15.99F) / 256.0F);
		double var23 = (double)((float)var10 / 256.0F);
		double var25 = (double)(((float)var10 + 15.99F) / 256.0F);
		float var27 = 2.0F / 16.0F;
		float var28 = 0.05F;
		if(this.blockAccess.isBlockNormalCube(var2 - 1, var3, var4)) {
			var5.addVertexWithUV((double)((float)var2 + var28), (double)((float)(var3 + 1) + var27), (double)((float)(var4 + 1) + var27), var11, var15);
			var5.addVertexWithUV((double)((float)var2 + var28), (double)((float)(var3 + 0) - var27), (double)((float)(var4 + 1) + var27), var11, var17);
			var5.addVertexWithUV((double)((float)var2 + var28), (double)((float)(var3 + 0) - var27), (double)((float)(var4 + 0) - var27), var13, var17);
			var5.addVertexWithUV((double)((float)var2 + var28), (double)((float)(var3 + 1) + var27), (double)((float)(var4 + 0) - var27), var13, var15);
		}

		if(this.blockAccess.isBlockNormalCube(var2 + 1, var3, var4)) {
			var5.addVertexWithUV((double)((float)(var2 + 1) - var28), (double)((float)(var3 + 0) - var27), (double)((float)(var4 + 1) + var27), var13, var17);
			var5.addVertexWithUV((double)((float)(var2 + 1) - var28), (double)((float)(var3 + 1) + var27), (double)((float)(var4 + 1) + var27), var13, var15);
			var5.addVertexWithUV((double)((float)(var2 + 1) - var28), (double)((float)(var3 + 1) + var27), (double)((float)(var4 + 0) - var27), var11, var15);
			var5.addVertexWithUV((double)((float)(var2 + 1) - var28), (double)((float)(var3 + 0) - var27), (double)((float)(var4 + 0) - var27), var11, var17);
		}

		if(this.blockAccess.isBlockNormalCube(var2, var3, var4 - 1)) {
			var5.addVertexWithUV((double)((float)(var2 + 1) + var27), (double)((float)(var3 + 0) - var27), (double)((float)var4 + var28), var21, var25);
			var5.addVertexWithUV((double)((float)(var2 + 1) + var27), (double)((float)(var3 + 1) + var27), (double)((float)var4 + var28), var21, var23);
			var5.addVertexWithUV((double)((float)(var2 + 0) - var27), (double)((float)(var3 + 1) + var27), (double)((float)var4 + var28), var19, var23);
			var5.addVertexWithUV((double)((float)(var2 + 0) - var27), (double)((float)(var3 + 0) - var27), (double)((float)var4 + var28), var19, var25);
		}

		if(this.blockAccess.isBlockNormalCube(var2, var3, var4 + 1)) {
			var5.addVertexWithUV((double)((float)(var2 + 1) + var27), (double)((float)(var3 + 1) + var27), (double)((float)(var4 + 1) - var28), var19, var23);
			var5.addVertexWithUV((double)((float)(var2 + 1) + var27), (double)((float)(var3 + 0) - var27), (double)((float)(var4 + 1) - var28), var19, var25);
			var5.addVertexWithUV((double)((float)(var2 + 0) - var27), (double)((float)(var3 + 0) - var27), (double)((float)(var4 + 1) - var28), var21, var25);
			var5.addVertexWithUV((double)((float)(var2 + 0) - var27), (double)((float)(var3 + 1) + var27), (double)((float)(var4 + 1) - var28), var21, var23);
		}

		return true;
	}

	public boolean renderBlockMinecartTrack(Block var1, int var2, int var3, int var4) {
		Tessellator var5 = Tessellator.instance;
		int var6 = this.blockAccess.getBlockMetadata(var2, var3, var4);
		int var7 = var1.getBlockTextureFromSideAndMetadata(0, var6);
		if(this.overrideBlockTexture >= 0) {
			var7 = this.overrideBlockTexture;
		}

		float var8 = var1.getBlockBrightness(this.blockAccess, var2, var3, var4);
		var5.setColorOpaque_F(var8, var8, var8);
		int var9 = (var7 & 15) << 4;
		int var10 = var7 & 240;
		double var11 = (double)((float)var9 / 256.0F);
		double var13 = (double)(((float)var9 + 15.99F) / 256.0F);
		double var15 = (double)((float)var10 / 256.0F);
		double var17 = (double)(((float)var10 + 15.99F) / 256.0F);
		float var19 = 1.0F / 16.0F;
		float var20 = (float)(var2 + 1);
		float var21 = (float)(var2 + 1);
		float var22 = (float)(var2 + 0);
		float var23 = (float)(var2 + 0);
		float var24 = (float)(var4 + 0);
		float var25 = (float)(var4 + 1);
		float var26 = (float)(var4 + 1);
		float var27 = (float)(var4 + 0);
		float var28 = (float)var3 + var19;
		float var29 = (float)var3 + var19;
		float var30 = (float)var3 + var19;
		float var31 = (float)var3 + var19;
		if(var6 != 1 && var6 != 2 && var6 != 3 && var6 != 7) {
			if(var6 == 8) {
				var21 = (float)(var2 + 0);
				var20 = var21;
				var23 = (float)(var2 + 1);
				var22 = var23;
				var27 = (float)(var4 + 1);
				var24 = var27;
				var26 = (float)(var4 + 0);
				var25 = var26;
			} else if(var6 == 9) {
				var23 = (float)(var2 + 0);
				var20 = var23;
				var22 = (float)(var2 + 1);
				var21 = var22;
				var25 = (float)(var4 + 0);
				var24 = var25;
				var27 = (float)(var4 + 1);
				var26 = var27;
			}
		} else {
			var23 = (float)(var2 + 1);
			var20 = var23;
			var22 = (float)(var2 + 0);
			var21 = var22;
			var25 = (float)(var4 + 1);
			var24 = var25;
			var27 = (float)(var4 + 0);
			var26 = var27;
		}

		if(var6 != 2 && var6 != 4) {
			if(var6 == 3 || var6 == 5) {
				++var29;
				++var30;
			}
		} else {
			++var28;
			++var31;
		}

		var5.addVertexWithUV((double)var20, (double)var28, (double)var24, var13, var15);
		var5.addVertexWithUV((double)var21, (double)var29, (double)var25, var13, var17);
		var5.addVertexWithUV((double)var22, (double)var30, (double)var26, var11, var17);
		var5.addVertexWithUV((double)var23, (double)var31, (double)var27, var11, var15);
		var5.addVertexWithUV((double)var23, (double)var31, (double)var27, var11, var15);
		var5.addVertexWithUV((double)var22, (double)var30, (double)var26, var11, var17);
		var5.addVertexWithUV((double)var21, (double)var29, (double)var25, var13, var17);
		var5.addVertexWithUV((double)var20, (double)var28, (double)var24, var13, var15);
		return true;
	}

	public boolean renderBlockLadder(Block var1, int var2, int var3, int var4) {
		Tessellator var5 = Tessellator.instance;
		int var6 = var1.getBlockTextureFromSide(0);
		if(this.overrideBlockTexture >= 0) {
			var6 = this.overrideBlockTexture;
		}

		float var7 = var1.getBlockBrightness(this.blockAccess, var2, var3, var4);
		var5.setColorOpaque_F(var7, var7, var7);
		int var8 = (var6 & 15) << 4;
		int var9 = var6 & 240;
		double var10 = (double)((float)var8 / 256.0F);
		double var12 = (double)(((float)var8 + 15.99F) / 256.0F);
		double var14 = (double)((float)var9 / 256.0F);
		double var16 = (double)(((float)var9 + 15.99F) / 256.0F);
		int var18 = this.blockAccess.getBlockMetadata(var2, var3, var4);
		float var19 = 0.0F;
		float var20 = 0.05F;
		if(var18 == 5) {
			var5.addVertexWithUV((double)((float)var2 + var20), (double)((float)(var3 + 1) + var19), (double)((float)(var4 + 1) + var19), var10, var14);
			var5.addVertexWithUV((double)((float)var2 + var20), (double)((float)(var3 + 0) - var19), (double)((float)(var4 + 1) + var19), var10, var16);
			var5.addVertexWithUV((double)((float)var2 + var20), (double)((float)(var3 + 0) - var19), (double)((float)(var4 + 0) - var19), var12, var16);
			var5.addVertexWithUV((double)((float)var2 + var20), (double)((float)(var3 + 1) + var19), (double)((float)(var4 + 0) - var19), var12, var14);
		}

		if(var18 == 4) {
			var5.addVertexWithUV((double)((float)(var2 + 1) - var20), (double)((float)(var3 + 0) - var19), (double)((float)(var4 + 1) + var19), var12, var16);
			var5.addVertexWithUV((double)((float)(var2 + 1) - var20), (double)((float)(var3 + 1) + var19), (double)((float)(var4 + 1) + var19), var12, var14);
			var5.addVertexWithUV((double)((float)(var2 + 1) - var20), (double)((float)(var3 + 1) + var19), (double)((float)(var4 + 0) - var19), var10, var14);
			var5.addVertexWithUV((double)((float)(var2 + 1) - var20), (double)((float)(var3 + 0) - var19), (double)((float)(var4 + 0) - var19), var10, var16);
		}

		if(var18 == 3) {
			var5.addVertexWithUV((double)((float)(var2 + 1) + var19), (double)((float)(var3 + 0) - var19), (double)((float)var4 + var20), var12, var16);
			var5.addVertexWithUV((double)((float)(var2 + 1) + var19), (double)((float)(var3 + 1) + var19), (double)((float)var4 + var20), var12, var14);
			var5.addVertexWithUV((double)((float)(var2 + 0) - var19), (double)((float)(var3 + 1) + var19), (double)((float)var4 + var20), var10, var14);
			var5.addVertexWithUV((double)((float)(var2 + 0) - var19), (double)((float)(var3 + 0) - var19), (double)((float)var4 + var20), var10, var16);
		}

		if(var18 == 2) {
			var5.addVertexWithUV((double)((float)(var2 + 1) + var19), (double)((float)(var3 + 1) + var19), (double)((float)(var4 + 1) - var20), var10, var14);
			var5.addVertexWithUV((double)((float)(var2 + 1) + var19), (double)((float)(var3 + 0) - var19), (double)((float)(var4 + 1) - var20), var10, var16);
			var5.addVertexWithUV((double)((float)(var2 + 0) - var19), (double)((float)(var3 + 0) - var19), (double)((float)(var4 + 1) - var20), var12, var16);
			var5.addVertexWithUV((double)((float)(var2 + 0) - var19), (double)((float)(var3 + 1) + var19), (double)((float)(var4 + 1) - var20), var12, var14);
		}

		return true;
	}

	public boolean renderBlockReed(Block var1, int var2, int var3, int var4) {
		Tessellator var5 = Tessellator.instance;
		float var6 = var1.getBlockBrightness(this.blockAccess, var2, var3, var4);
		var5.setColorOpaque_F(var6, var6, var6);
		this.renderCrossedSquares(var1, this.blockAccess.getBlockMetadata(var2, var3, var4), (double)var2, (double)var3, (double)var4);
		return true;
	}

	public boolean renderBlockCrops(Block var1, int var2, int var3, int var4) {
		Tessellator var5 = Tessellator.instance;
		float var6 = var1.getBlockBrightness(this.blockAccess, var2, var3, var4);
		var5.setColorOpaque_F(var6, var6, var6);
		this.renderBlockCropsImpl(var1, this.blockAccess.getBlockMetadata(var2, var3, var4), (double)var2, (double)((float)var3 - 1.0F / 16.0F), (double)var4);
		return true;
	}

	public void renderTorchAtAngle(Block var1, double var2, double var4, double var6, double var8, double var10) {
		Tessellator var12 = Tessellator.instance;
		int var13 = var1.getBlockTextureFromSide(0);
		if(this.overrideBlockTexture >= 0) {
			var13 = this.overrideBlockTexture;
		}

		int var14 = (var13 & 15) << 4;
		int var15 = var13 & 240;
		float var16 = (float)var14 / 256.0F;
		float var17 = ((float)var14 + 15.99F) / 256.0F;
		float var18 = (float)var15 / 256.0F;
		float var19 = ((float)var15 + 15.99F) / 256.0F;
		double var20 = (double)var16 + 1.75D / 64.0D;
		double var22 = (double)var18 + 6.0D / 256.0D;
		double var24 = (double)var16 + 9.0D / 256.0D;
		double var26 = (double)var18 + 1.0D / 32.0D;
		var2 += 0.5D;
		var6 += 0.5D;
		double var28 = var2 - 0.5D;
		double var30 = var2 + 0.5D;
		double var32 = var6 - 0.5D;
		double var34 = var6 + 0.5D;
		double var36 = 1.0D / 16.0D;
		double var38 = 0.625D;
		var12.addVertexWithUV(var2 + var8 * (1.0D - var38) - var36, var4 + var38, var6 + var10 * (1.0D - var38) - var36, var20, var22);
		var12.addVertexWithUV(var2 + var8 * (1.0D - var38) - var36, var4 + var38, var6 + var10 * (1.0D - var38) + var36, var20, var26);
		var12.addVertexWithUV(var2 + var8 * (1.0D - var38) + var36, var4 + var38, var6 + var10 * (1.0D - var38) + var36, var24, var26);
		var12.addVertexWithUV(var2 + var8 * (1.0D - var38) + var36, var4 + var38, var6 + var10 * (1.0D - var38) - var36, var24, var22);
		var12.addVertexWithUV(var2 - var36, var4 + 1.0D, var32, (double)var16, (double)var18);
		var12.addVertexWithUV(var2 - var36 + var8, var4 + 0.0D, var32 + var10, (double)var16, (double)var19);
		var12.addVertexWithUV(var2 - var36 + var8, var4 + 0.0D, var34 + var10, (double)var17, (double)var19);
		var12.addVertexWithUV(var2 - var36, var4 + 1.0D, var34, (double)var17, (double)var18);
		var12.addVertexWithUV(var2 + var36, var4 + 1.0D, var34, (double)var16, (double)var18);
		var12.addVertexWithUV(var2 + var8 + var36, var4 + 0.0D, var34 + var10, (double)var16, (double)var19);
		var12.addVertexWithUV(var2 + var8 + var36, var4 + 0.0D, var32 + var10, (double)var17, (double)var19);
		var12.addVertexWithUV(var2 + var36, var4 + 1.0D, var32, (double)var17, (double)var18);
		var12.addVertexWithUV(var28, var4 + 1.0D, var6 + var36, (double)var16, (double)var18);
		var12.addVertexWithUV(var28 + var8, var4 + 0.0D, var6 + var36 + var10, (double)var16, (double)var19);
		var12.addVertexWithUV(var30 + var8, var4 + 0.0D, var6 + var36 + var10, (double)var17, (double)var19);
		var12.addVertexWithUV(var30, var4 + 1.0D, var6 + var36, (double)var17, (double)var18);
		var12.addVertexWithUV(var30, var4 + 1.0D, var6 - var36, (double)var16, (double)var18);
		var12.addVertexWithUV(var30 + var8, var4 + 0.0D, var6 - var36 + var10, (double)var16, (double)var19);
		var12.addVertexWithUV(var28 + var8, var4 + 0.0D, var6 - var36 + var10, (double)var17, (double)var19);
		var12.addVertexWithUV(var28, var4 + 1.0D, var6 - var36, (double)var17, (double)var18);
	}

	public void renderCrossedSquares(Block var1, int var2, double var3, double var5, double var7) {
		Tessellator var9 = Tessellator.instance;
		int var10 = var1.getBlockTextureFromSideAndMetadata(0, var2);
		if(this.overrideBlockTexture >= 0) {
			var10 = this.overrideBlockTexture;
		}

		int var11 = (var10 & 15) << 4;
		int var12 = var10 & 240;
		double var13 = (double)((float)var11 / 256.0F);
		double var15 = (double)(((float)var11 + 15.99F) / 256.0F);
		double var17 = (double)((float)var12 / 256.0F);
		double var19 = (double)(((float)var12 + 15.99F) / 256.0F);
		double var21 = var3 + 0.5D - (double)0.45F;
		double var23 = var3 + 0.5D + (double)0.45F;
		double var25 = var7 + 0.5D - (double)0.45F;
		double var27 = var7 + 0.5D + (double)0.45F;
		var9.addVertexWithUV(var21, var5 + 1.0D, var25, var13, var17);
		var9.addVertexWithUV(var21, var5 + 0.0D, var25, var13, var19);
		var9.addVertexWithUV(var23, var5 + 0.0D, var27, var15, var19);
		var9.addVertexWithUV(var23, var5 + 1.0D, var27, var15, var17);
		var9.addVertexWithUV(var23, var5 + 1.0D, var27, var13, var17);
		var9.addVertexWithUV(var23, var5 + 0.0D, var27, var13, var19);
		var9.addVertexWithUV(var21, var5 + 0.0D, var25, var15, var19);
		var9.addVertexWithUV(var21, var5 + 1.0D, var25, var15, var17);
		var9.addVertexWithUV(var21, var5 + 1.0D, var27, var13, var17);
		var9.addVertexWithUV(var21, var5 + 0.0D, var27, var13, var19);
		var9.addVertexWithUV(var23, var5 + 0.0D, var25, var15, var19);
		var9.addVertexWithUV(var23, var5 + 1.0D, var25, var15, var17);
		var9.addVertexWithUV(var23, var5 + 1.0D, var25, var13, var17);
		var9.addVertexWithUV(var23, var5 + 0.0D, var25, var13, var19);
		var9.addVertexWithUV(var21, var5 + 0.0D, var27, var15, var19);
		var9.addVertexWithUV(var21, var5 + 1.0D, var27, var15, var17);
	}

	public void renderBlockCropsImpl(Block var1, int var2, double var3, double var5, double var7) {
		Tessellator var9 = Tessellator.instance;
		int var10 = var1.getBlockTextureFromSideAndMetadata(0, var2);
		if(this.overrideBlockTexture >= 0) {
			var10 = this.overrideBlockTexture;
		}

		int var11 = (var10 & 15) << 4;
		int var12 = var10 & 240;
		double var13 = (double)((float)var11 / 256.0F);
		double var15 = (double)(((float)var11 + 15.99F) / 256.0F);
		double var17 = (double)((float)var12 / 256.0F);
		double var19 = (double)(((float)var12 + 15.99F) / 256.0F);
		double var21 = var3 + 0.5D - 0.25D;
		double var23 = var3 + 0.5D + 0.25D;
		double var25 = var7 + 0.5D - 0.5D;
		double var27 = var7 + 0.5D + 0.5D;
		var9.addVertexWithUV(var21, var5 + 1.0D, var25, var13, var17);
		var9.addVertexWithUV(var21, var5 + 0.0D, var25, var13, var19);
		var9.addVertexWithUV(var21, var5 + 0.0D, var27, var15, var19);
		var9.addVertexWithUV(var21, var5 + 1.0D, var27, var15, var17);
		var9.addVertexWithUV(var21, var5 + 1.0D, var27, var13, var17);
		var9.addVertexWithUV(var21, var5 + 0.0D, var27, var13, var19);
		var9.addVertexWithUV(var21, var5 + 0.0D, var25, var15, var19);
		var9.addVertexWithUV(var21, var5 + 1.0D, var25, var15, var17);
		var9.addVertexWithUV(var23, var5 + 1.0D, var27, var13, var17);
		var9.addVertexWithUV(var23, var5 + 0.0D, var27, var13, var19);
		var9.addVertexWithUV(var23, var5 + 0.0D, var25, var15, var19);
		var9.addVertexWithUV(var23, var5 + 1.0D, var25, var15, var17);
		var9.addVertexWithUV(var23, var5 + 1.0D, var25, var13, var17);
		var9.addVertexWithUV(var23, var5 + 0.0D, var25, var13, var19);
		var9.addVertexWithUV(var23, var5 + 0.0D, var27, var15, var19);
		var9.addVertexWithUV(var23, var5 + 1.0D, var27, var15, var17);
		var21 = var3 + 0.5D - 0.5D;
		var23 = var3 + 0.5D + 0.5D;
		var25 = var7 + 0.5D - 0.25D;
		var27 = var7 + 0.5D + 0.25D;
		var9.addVertexWithUV(var21, var5 + 1.0D, var25, var13, var17);
		var9.addVertexWithUV(var21, var5 + 0.0D, var25, var13, var19);
		var9.addVertexWithUV(var23, var5 + 0.0D, var25, var15, var19);
		var9.addVertexWithUV(var23, var5 + 1.0D, var25, var15, var17);
		var9.addVertexWithUV(var23, var5 + 1.0D, var25, var13, var17);
		var9.addVertexWithUV(var23, var5 + 0.0D, var25, var13, var19);
		var9.addVertexWithUV(var21, var5 + 0.0D, var25, var15, var19);
		var9.addVertexWithUV(var21, var5 + 1.0D, var25, var15, var17);
		var9.addVertexWithUV(var23, var5 + 1.0D, var27, var13, var17);
		var9.addVertexWithUV(var23, var5 + 0.0D, var27, var13, var19);
		var9.addVertexWithUV(var21, var5 + 0.0D, var27, var15, var19);
		var9.addVertexWithUV(var21, var5 + 1.0D, var27, var15, var17);
		var9.addVertexWithUV(var21, var5 + 1.0D, var27, var13, var17);
		var9.addVertexWithUV(var21, var5 + 0.0D, var27, var13, var19);
		var9.addVertexWithUV(var23, var5 + 0.0D, var27, var15, var19);
		var9.addVertexWithUV(var23, var5 + 1.0D, var27, var15, var17);
	}

	public boolean renderBlockFluids(Block var1, int var2, int var3, int var4) {
		Tessellator var5 = Tessellator.instance;
		boolean var6 = var1.shouldSideBeRendered(this.blockAccess, var2, var3 + 1, var4, 1);
		boolean var7 = var1.shouldSideBeRendered(this.blockAccess, var2, var3 - 1, var4, 0);
		boolean[] var8 = new boolean[]{var1.shouldSideBeRendered(this.blockAccess, var2, var3, var4 - 1, 2), var1.shouldSideBeRendered(this.blockAccess, var2, var3, var4 + 1, 3), var1.shouldSideBeRendered(this.blockAccess, var2 - 1, var3, var4, 4), var1.shouldSideBeRendered(this.blockAccess, var2 + 1, var3, var4, 5)};
		if(!var6 && !var7 && !var8[0] && !var8[1] && !var8[2] && !var8[3]) {
			return false;
		} else {
			boolean var9 = false;
			float var10 = 0.5F;
			float var11 = 1.0F;
			float var12 = 0.8F;
			float var13 = 0.6F;
			double var14 = 0.0D;
			double var16 = 1.0D;
			Material var18 = var1.blockMaterial;
			int var19 = this.blockAccess.getBlockMetadata(var2, var3, var4);
			float var20 = this.getFluidHeight(var2, var3, var4, var18);
			float var21 = this.getFluidHeight(var2, var3, var4 + 1, var18);
			float var22 = this.getFluidHeight(var2 + 1, var3, var4 + 1, var18);
			float var23 = this.getFluidHeight(var2 + 1, var3, var4, var18);
			int var24;
			int var27;
			float var32;
			float var33;
			float var34;
			if(this.renderAllFaces || var6) {
				var9 = true;
				var24 = var1.getBlockTextureFromSideAndMetadata(1, var19);
				float var25 = (float)BlockFluid.getFlowDirection(this.blockAccess, var2, var3, var4, var18);
				if(var25 > -999.0F) {
					var24 = var1.getBlockTextureFromSideAndMetadata(2, var19);
				}

				int var26 = (var24 & 15) << 4;
				var27 = var24 & 240;
				double var28 = ((double)var26 + 8.0D) / 256.0D;
				double var30 = ((double)var27 + 8.0D) / 256.0D;
				if(var25 < -999.0F) {
					var25 = 0.0F;
				} else {
					var28 = (double)((float)(var26 + 16) / 256.0F);
					var30 = (double)((float)(var27 + 16) / 256.0F);
				}

				var32 = MathHelper.sin(var25) * 8.0F / 256.0F;
				var33 = MathHelper.cos(var25) * 8.0F / 256.0F;
				var34 = var1.getBlockBrightness(this.blockAccess, var2, var3, var4);
				var5.setColorOpaque_F(var11 * var34, var11 * var34, var11 * var34);
				var5.addVertexWithUV((double)(var2 + 0), (double)((float)var3 + var20), (double)(var4 + 0), var28 - (double)var33 - (double)var32, var30 - (double)var33 + (double)var32);
				var5.addVertexWithUV((double)(var2 + 0), (double)((float)var3 + var21), (double)(var4 + 1), var28 - (double)var33 + (double)var32, var30 + (double)var33 + (double)var32);
				var5.addVertexWithUV((double)(var2 + 1), (double)((float)var3 + var22), (double)(var4 + 1), var28 + (double)var33 + (double)var32, var30 + (double)var33 - (double)var32);
				var5.addVertexWithUV((double)(var2 + 1), (double)((float)var3 + var23), (double)(var4 + 0), var28 + (double)var33 - (double)var32, var30 - (double)var33 - (double)var32);
			}

			if(this.renderAllFaces || var7) {
				float var48 = var1.getBlockBrightness(this.blockAccess, var2, var3 - 1, var4);
				var5.setColorOpaque_F(var10 * var48, var10 * var48, var10 * var48);
				this.renderBottomFace(var1, (double)var2, (double)var3, (double)var4, var1.getBlockTextureFromSide(0));
				var9 = true;
			}

			for(var24 = 0; var24 < 4; ++var24) {
				int var49 = var2;
				var27 = var4;
				if(var24 == 0) {
					var27 = var4 - 1;
				}

				if(var24 == 1) {
					++var27;
				}

				if(var24 == 2) {
					var49 = var2 - 1;
				}

				if(var24 == 3) {
					++var49;
				}

				int var50 = var1.getBlockTextureFromSideAndMetadata(var24 + 2, var19);
				int var29 = (var50 & 15) << 4;
				int var51 = var50 & 240;
				if(this.renderAllFaces || var8[var24]) {
					float var31;
					float var35;
					float var36;
					if(var24 == 0) {
						var31 = var20;
						var32 = var23;
						var33 = (float)var2;
						var35 = (float)(var2 + 1);
						var34 = (float)var4;
						var36 = (float)var4;
					} else if(var24 == 1) {
						var31 = var22;
						var32 = var21;
						var33 = (float)(var2 + 1);
						var35 = (float)var2;
						var34 = (float)(var4 + 1);
						var36 = (float)(var4 + 1);
					} else if(var24 == 2) {
						var31 = var21;
						var32 = var20;
						var33 = (float)var2;
						var35 = (float)var2;
						var34 = (float)(var4 + 1);
						var36 = (float)var4;
					} else {
						var31 = var23;
						var32 = var22;
						var33 = (float)(var2 + 1);
						var35 = (float)(var2 + 1);
						var34 = (float)var4;
						var36 = (float)(var4 + 1);
					}

					var9 = true;
					double var37 = (double)((float)(var29 + 0) / 256.0F);
					double var39 = ((double)(var29 + 16) - 0.01D) / 256.0D;
					double var41 = (double)(((float)var51 + (1.0F - var31) * 16.0F) / 256.0F);
					double var43 = (double)(((float)var51 + (1.0F - var32) * 16.0F) / 256.0F);
					double var45 = ((double)(var51 + 16) - 0.01D) / 256.0D;
					float var47 = var1.getBlockBrightness(this.blockAccess, var49, var3, var27);
					if(var24 < 2) {
						var47 *= var12;
					} else {
						var47 *= var13;
					}

					var5.setColorOpaque_F(var11 * var47, var11 * var47, var11 * var47);
					var5.addVertexWithUV((double)var33, (double)((float)var3 + var31), (double)var34, var37, var41);
					var5.addVertexWithUV((double)var35, (double)((float)var3 + var32), (double)var36, var39, var43);
					var5.addVertexWithUV((double)var35, (double)(var3 + 0), (double)var36, var39, var45);
					var5.addVertexWithUV((double)var33, (double)(var3 + 0), (double)var34, var37, var45);
				}
			}

			var1.minY = var14;
			var1.maxY = var16;
			return var9;
		}
	}

	private float getFluidHeight(int var1, int var2, int var3, Material var4) {
		int var5 = 0;
		float var6 = 0.0F;

		for(int var7 = 0; var7 < 4; ++var7) {
			int var8 = var1 - (var7 & 1);
			int var10 = var3 - (var7 >> 1 & 1);
			if(this.blockAccess.getBlockMaterial(var8, var2 + 1, var10) == var4) {
				return 1.0F;
			}

			Material var11 = this.blockAccess.getBlockMaterial(var8, var2, var10);
			if(var11 != var4) {
				if(!var11.isSolid()) {
					++var6;
					++var5;
				}
			} else {
				int var12 = this.blockAccess.getBlockMetadata(var8, var2, var10);
				if(var12 >= 8 || var12 == 0) {
					var6 += BlockFluid.getPercentAir(var12) * 10.0F;
					var5 += 10;
				}

				var6 += BlockFluid.getPercentAir(var12);
				++var5;
			}
		}

		return 1.0F - var6 / (float)var5;
	}

	public void renderBlockFallingSand(Block var1, World var2, int var3, int var4, int var5) {
		float var6 = 0.5F;
		float var7 = 1.0F;
		float var8 = 0.8F;
		float var9 = 0.6F;
		Tessellator var10 = Tessellator.instance;
		var10.startDrawingQuads();
		float var11 = var1.getBlockBrightness(var2, var3, var4, var5);
		float var12 = var1.getBlockBrightness(var2, var3, var4 - 1, var5);
		if(var12 < var11) {
			var12 = var11;
		}

		var10.setColorOpaque_F(var6 * var12, var6 * var12, var6 * var12);
		this.renderBottomFace(var1, -0.5D, -0.5D, -0.5D, var1.getBlockTextureFromSide(0));
		var12 = var1.getBlockBrightness(var2, var3, var4 + 1, var5);
		if(var12 < var11) {
			var12 = var11;
		}

		var10.setColorOpaque_F(var7 * var12, var7 * var12, var7 * var12);
		this.renderTopFace(var1, -0.5D, -0.5D, -0.5D, var1.getBlockTextureFromSide(1));
		var12 = var1.getBlockBrightness(var2, var3, var4, var5 - 1);
		if(var12 < var11) {
			var12 = var11;
		}

		var10.setColorOpaque_F(var8 * var12, var8 * var12, var8 * var12);
		this.renderEastFace(var1, -0.5D, -0.5D, -0.5D, var1.getBlockTextureFromSide(2));
		var12 = var1.getBlockBrightness(var2, var3, var4, var5 + 1);
		if(var12 < var11) {
			var12 = var11;
		}

		var10.setColorOpaque_F(var8 * var12, var8 * var12, var8 * var12);
		this.renderWestFace(var1, -0.5D, -0.5D, -0.5D, var1.getBlockTextureFromSide(3));
		var12 = var1.getBlockBrightness(var2, var3 - 1, var4, var5);
		if(var12 < var11) {
			var12 = var11;
		}

		var10.setColorOpaque_F(var9 * var12, var9 * var12, var9 * var12);
		this.renderNorthFace(var1, -0.5D, -0.5D, -0.5D, var1.getBlockTextureFromSide(4));
		var12 = var1.getBlockBrightness(var2, var3 + 1, var4, var5);
		if(var12 < var11) {
			var12 = var11;
		}

		var10.setColorOpaque_F(var9 * var12, var9 * var12, var9 * var12);
		this.renderSouthFace(var1, -0.5D, -0.5D, -0.5D, var1.getBlockTextureFromSide(5));
		var10.draw();
	}

	public boolean renderStandardBlock(Block var1, int var2, int var3, int var4) {
		int var5 = var1.getRenderColor(this.blockAccess, var2, var3, var4);
		float var6 = (float)(var5 >> 16 & 255) / 255.0F;
		float var7 = (float)(var5 >> 8 & 255) / 255.0F;
		float var8 = (float)(var5 & 255) / 255.0F;
		return this.renderStandardBlockWithColorMultiplier(var1, var2, var3, var4, var6, var7, var8);
	}

	public boolean renderStandardBlockWithColorMultiplier(Block var1, int var2, int var3, int var4, float var5, float var6, float var7) {
		Tessellator var8 = Tessellator.instance;
		boolean var9 = false;
		float var10 = 0.5F;
		float var11 = 1.0F;
		float var12 = 0.8F;
		float var13 = 0.6F;
		float var14 = var10 * var5;
		float var15 = var11 * var5;
		float var16 = var12 * var5;
		float var17 = var13 * var5;
		float var18 = var10 * var6;
		float var19 = var11 * var6;
		float var20 = var12 * var6;
		float var21 = var13 * var6;
		float var22 = var10 * var7;
		float var23 = var11 * var7;
		float var24 = var12 * var7;
		float var25 = var13 * var7;
		float var26 = var1.getBlockBrightness(this.blockAccess, var2, var3, var4);
		float var27;
		if(this.renderAllFaces || var1.shouldSideBeRendered(this.blockAccess, var2, var3 - 1, var4, 0)) {
			var27 = var1.getBlockBrightness(this.blockAccess, var2, var3 - 1, var4);
			if(Block.lightValue[var1.blockID] > 0) {
				var27 = 1.0F;
			}

			var8.setColorOpaque_F(var14 * var27, var18 * var27, var22 * var27);
			this.renderBottomFace(var1, (double)var2, (double)var3, (double)var4, var1.getBlockTextureGeneric(this.blockAccess, var2, var3, var4, 0));
			var9 = true;
		}

		if(this.renderAllFaces || var1.shouldSideBeRendered(this.blockAccess, var2, var3 + 1, var4, 1)) {
			var27 = var1.getBlockBrightness(this.blockAccess, var2, var3 + 1, var4);
			if(var1.maxY != 1.0D && !var1.blockMaterial.getIsLiquid()) {
				var27 = var26;
			}

			if(Block.lightValue[var1.blockID] > 0) {
				var27 = 1.0F;
			}

			var8.setColorOpaque_F(var15 * var27, var19 * var27, var23 * var27);
			this.renderTopFace(var1, (double)var2, (double)var3, (double)var4, var1.getBlockTextureGeneric(this.blockAccess, var2, var3, var4, 1));
			var9 = true;
		}

		if(this.renderAllFaces || var1.shouldSideBeRendered(this.blockAccess, var2, var3, var4 - 1, 2)) {
			var27 = var1.getBlockBrightness(this.blockAccess, var2, var3, var4 - 1);
			if(var1.minZ > 0.0D) {
				var27 = var26;
			}

			if(Block.lightValue[var1.blockID] > 0) {
				var27 = 1.0F;
			}

			var8.setColorOpaque_F(var16 * var27, var20 * var27, var24 * var27);
			this.renderEastFace(var1, (double)var2, (double)var3, (double)var4, var1.getBlockTextureGeneric(this.blockAccess, var2, var3, var4, 2));
			var9 = true;
		}

		if(this.renderAllFaces || var1.shouldSideBeRendered(this.blockAccess, var2, var3, var4 + 1, 3)) {
			var27 = var1.getBlockBrightness(this.blockAccess, var2, var3, var4 + 1);
			if(var1.maxZ < 1.0D) {
				var27 = var26;
			}

			if(Block.lightValue[var1.blockID] > 0) {
				var27 = 1.0F;
			}

			var8.setColorOpaque_F(var16 * var27, var20 * var27, var24 * var27);
			this.renderWestFace(var1, (double)var2, (double)var3, (double)var4, var1.getBlockTextureGeneric(this.blockAccess, var2, var3, var4, 3));
			var9 = true;
		}

		if(this.renderAllFaces || var1.shouldSideBeRendered(this.blockAccess, var2 - 1, var3, var4, 4)) {
			var27 = var1.getBlockBrightness(this.blockAccess, var2 - 1, var3, var4);
			if(var1.minX > 0.0D) {
				var27 = var26;
			}

			if(Block.lightValue[var1.blockID] > 0) {
				var27 = 1.0F;
			}

			var8.setColorOpaque_F(var17 * var27, var21 * var27, var25 * var27);
			this.renderNorthFace(var1, (double)var2, (double)var3, (double)var4, var1.getBlockTextureGeneric(this.blockAccess, var2, var3, var4, 4));
			var9 = true;
		}

		if(this.renderAllFaces || var1.shouldSideBeRendered(this.blockAccess, var2 + 1, var3, var4, 5)) {
			var27 = var1.getBlockBrightness(this.blockAccess, var2 + 1, var3, var4);
			if(var1.maxX < 1.0D) {
				var27 = var26;
			}

			if(Block.lightValue[var1.blockID] > 0) {
				var27 = 1.0F;
			}

			var8.setColorOpaque_F(var17 * var27, var21 * var27, var25 * var27);
			this.renderSouthFace(var1, (double)var2, (double)var3, (double)var4, var1.getBlockTextureGeneric(this.blockAccess, var2, var3, var4, 5));
			var9 = true;
		}

		return var9;
	}

	public boolean renderBlockFence(Block var1, int var2, int var3, int var4) {
		boolean var5 = false;
		float var6 = 6.0F / 16.0F;
		float var7 = 10.0F / 16.0F;
		var1.setBlockBounds(var6, 0.0F, var6, var7, 1.0F, var7);
		this.renderStandardBlock(var1, var2, var3, var4);
		boolean var8 = false;
		boolean var9 = false;
		if(this.blockAccess.getBlockId(var2 - 1, var3, var4) == var1.blockID || this.blockAccess.getBlockId(var2 + 1, var3, var4) == var1.blockID) {
			var8 = true;
		}

		if(this.blockAccess.getBlockId(var2, var3, var4 - 1) == var1.blockID || this.blockAccess.getBlockId(var2, var3, var4 + 1) == var1.blockID) {
			var9 = true;
		}

		if(!var8 && !var9) {
			var8 = true;
		}

		var6 = 7.0F / 16.0F;
		var7 = 9.0F / 16.0F;
		float var10 = 12.0F / 16.0F;
		float var11 = 15.0F / 16.0F;
		if(var8) {
			var1.setBlockBounds(0.0F, var10, var6, 1.0F, var11, var7);
			this.renderStandardBlock(var1, var2, var3, var4);
		}

		if(var9) {
			var1.setBlockBounds(var6, var10, 0.0F, var7, var11, 1.0F);
			this.renderStandardBlock(var1, var2, var3, var4);
		}

		var10 = 6.0F / 16.0F;
		var11 = 9.0F / 16.0F;
		if(var8) {
			var1.setBlockBounds(0.0F, var10, var6, 1.0F, var11, var7);
			this.renderStandardBlock(var1, var2, var3, var4);
		}

		if(var9) {
			var1.setBlockBounds(var6, var10, 0.0F, var7, var11, 1.0F);
			this.renderStandardBlock(var1, var2, var3, var4);
		}

		var1.setBlockBounds(0.0F, 0.0F, 0.0F, 1.0F, 1.0F, 1.0F);
		return var5;
	}

	public boolean renderBlockStairs(Block var1, int var2, int var3, int var4) {
		boolean var5 = false;
		int var6 = this.blockAccess.getBlockMetadata(var2, var3, var4);
		if(var6 == 0) {
			var1.setBlockBounds(0.0F, 0.0F, 0.0F, 0.5F, 0.5F, 1.0F);
			this.renderStandardBlock(var1, var2, var3, var4);
			var1.setBlockBounds(0.5F, 0.0F, 0.0F, 1.0F, 1.0F, 1.0F);
			this.renderStandardBlock(var1, var2, var3, var4);
		} else if(var6 == 1) {
			var1.setBlockBounds(0.0F, 0.0F, 0.0F, 0.5F, 1.0F, 1.0F);
			this.renderStandardBlock(var1, var2, var3, var4);
			var1.setBlockBounds(0.5F, 0.0F, 0.0F, 1.0F, 0.5F, 1.0F);
			this.renderStandardBlock(var1, var2, var3, var4);
		} else if(var6 == 2) {
			var1.setBlockBounds(0.0F, 0.0F, 0.0F, 1.0F, 0.5F, 0.5F);
			this.renderStandardBlock(var1, var2, var3, var4);
			var1.setBlockBounds(0.0F, 0.0F, 0.5F, 1.0F, 1.0F, 1.0F);
			this.renderStandardBlock(var1, var2, var3, var4);
		} else if(var6 == 3) {
			var1.setBlockBounds(0.0F, 0.0F, 0.0F, 1.0F, 1.0F, 0.5F);
			this.renderStandardBlock(var1, var2, var3, var4);
			var1.setBlockBounds(0.0F, 0.0F, 0.5F, 1.0F, 0.5F, 1.0F);
			this.renderStandardBlock(var1, var2, var3, var4);
		}

		var1.setBlockBounds(0.0F, 0.0F, 0.0F, 1.0F, 1.0F, 1.0F);
		return var5;
	}

	public boolean renderBlockDoor(Block var1, int var2, int var3, int var4) {
		Tessellator var5 = Tessellator.instance;
		BlockDoor var6 = (BlockDoor)var1;
		boolean var7 = false;
		float var8 = 0.5F;
		float var9 = 1.0F;
		float var10 = 0.8F;
		float var11 = 0.6F;
		float var12 = var1.getBlockBrightness(this.blockAccess, var2, var3, var4);
		float var13 = var1.getBlockBrightness(this.blockAccess, var2, var3 - 1, var4);
		if(var6.minY > 0.0D) {
			var13 = var12;
		}

		if(Block.lightValue[var1.blockID] > 0) {
			var13 = 1.0F;
		}

		var5.setColorOpaque_F(var8 * var13, var8 * var13, var8 * var13);
		this.renderBottomFace(var1, (double)var2, (double)var3, (double)var4, var1.getBlockTextureGeneric(this.blockAccess, var2, var3, var4, 0));
		var7 = true;
		var13 = var1.getBlockBrightness(this.blockAccess, var2, var3 + 1, var4);
		if(var6.maxY < 1.0D) {
			var13 = var12;
		}

		if(Block.lightValue[var1.blockID] > 0) {
			var13 = 1.0F;
		}

		var5.setColorOpaque_F(var9 * var13, var9 * var13, var9 * var13);
		this.renderTopFace(var1, (double)var2, (double)var3, (double)var4, var1.getBlockTextureGeneric(this.blockAccess, var2, var3, var4, 1));
		var7 = true;
		var13 = var1.getBlockBrightness(this.blockAccess, var2, var3, var4 - 1);
		if(var6.minZ > 0.0D) {
			var13 = var12;
		}

		if(Block.lightValue[var1.blockID] > 0) {
			var13 = 1.0F;
		}

		var5.setColorOpaque_F(var10 * var13, var10 * var13, var10 * var13);
		int var14 = var1.getBlockTextureGeneric(this.blockAccess, var2, var3, var4, 2);
		if(var14 < 0) {
			this.flipTexture = true;
			var14 = -var14;
		}

		this.renderEastFace(var1, (double)var2, (double)var3, (double)var4, var14);
		var7 = true;
		this.flipTexture = false;
		var13 = var1.getBlockBrightness(this.blockAccess, var2, var3, var4 + 1);
		if(var6.maxZ < 1.0D) {
			var13 = var12;
		}

		if(Block.lightValue[var1.blockID] > 0) {
			var13 = 1.0F;
		}

		var5.setColorOpaque_F(var10 * var13, var10 * var13, var10 * var13);
		var14 = var1.getBlockTextureGeneric(this.blockAccess, var2, var3, var4, 3);
		if(var14 < 0) {
			this.flipTexture = true;
			var14 = -var14;
		}

		this.renderWestFace(var1, (double)var2, (double)var3, (double)var4, var14);
		var7 = true;
		this.flipTexture = false;
		var13 = var1.getBlockBrightness(this.blockAccess, var2 - 1, var3, var4);
		if(var6.minX > 0.0D) {
			var13 = var12;
		}

		if(Block.lightValue[var1.blockID] > 0) {
			var13 = 1.0F;
		}

		var5.setColorOpaque_F(var11 * var13, var11 * var13, var11 * var13);
		var14 = var1.getBlockTextureGeneric(this.blockAccess, var2, var3, var4, 4);
		if(var14 < 0) {
			this.flipTexture = true;
			var14 = -var14;
		}

		this.renderNorthFace(var1, (double)var2, (double)var3, (double)var4, var14);
		var7 = true;
		this.flipTexture = false;
		var13 = var1.getBlockBrightness(this.blockAccess, var2 + 1, var3, var4);
		if(var6.maxX < 1.0D) {
			var13 = var12;
		}

		if(Block.lightValue[var1.blockID] > 0) {
			var13 = 1.0F;
		}

		var5.setColorOpaque_F(var11 * var13, var11 * var13, var11 * var13);
		var14 = var1.getBlockTextureGeneric(this.blockAccess, var2, var3, var4, 5);
		if(var14 < 0) {
			this.flipTexture = true;
			var14 = -var14;
		}

		this.renderSouthFace(var1, (double)var2, (double)var3, (double)var4, var14);
		var7 = true;
		this.flipTexture = false;
		return var7;
	}

	public void renderBottomFace(Block var1, double var2, double var4, double var6, int var8) {
		Tessellator var9 = Tessellator.instance;
		if(this.overrideBlockTexture >= 0) {
			var8 = this.overrideBlockTexture;
		}

		int var10 = (var8 & 15) << 4;
		int var11 = var8 & 240;
		double var12 = ((double)var10 + var1.minX * 16.0D) / 256.0D;
		double var14 = ((double)var10 + var1.maxX * 16.0D - 0.01D) / 256.0D;
		double var16 = ((double)var11 + var1.minZ * 16.0D) / 256.0D;
		double var18 = ((double)var11 + var1.maxZ * 16.0D - 0.01D) / 256.0D;
		if(var1.minX < 0.0D || var1.maxX > 1.0D) {
			var12 = (double)(((float)var10 + 0.0F) / 256.0F);
			var14 = (double)(((float)var10 + 15.99F) / 256.0F);
		}

		if(var1.minZ < 0.0D || var1.maxZ > 1.0D) {
			var16 = (double)(((float)var11 + 0.0F) / 256.0F);
			var18 = (double)(((float)var11 + 15.99F) / 256.0F);
		}

		double var20 = var2 + var1.minX;
		double var22 = var2 + var1.maxX;
		double var24 = var4 + var1.minY;
		double var26 = var6 + var1.minZ;
		double var28 = var6 + var1.maxZ;
		var9.addVertexWithUV(var20, var24, var28, var12, var18);
		var9.addVertexWithUV(var20, var24, var26, var12, var16);
		var9.addVertexWithUV(var22, var24, var26, var14, var16);
		var9.addVertexWithUV(var22, var24, var28, var14, var18);
	}

	public void renderTopFace(Block var1, double var2, double var4, double var6, int var8) {
		Tessellator var9 = Tessellator.instance;
		if(this.overrideBlockTexture >= 0) {
			var8 = this.overrideBlockTexture;
		}

		int var10 = (var8 & 15) << 4;
		int var11 = var8 & 240;
		double var12 = ((double)var10 + var1.minX * 16.0D) / 256.0D;
		double var14 = ((double)var10 + var1.maxX * 16.0D - 0.01D) / 256.0D;
		double var16 = ((double)var11 + var1.minZ * 16.0D) / 256.0D;
		double var18 = ((double)var11 + var1.maxZ * 16.0D - 0.01D) / 256.0D;
		if(var1.minX < 0.0D || var1.maxX > 1.0D) {
			var12 = (double)(((float)var10 + 0.0F) / 256.0F);
			var14 = (double)(((float)var10 + 15.99F) / 256.0F);
		}

		if(var1.minZ < 0.0D || var1.maxZ > 1.0D) {
			var16 = (double)(((float)var11 + 0.0F) / 256.0F);
			var18 = (double)(((float)var11 + 15.99F) / 256.0F);
		}

		double var20 = var2 + var1.minX;
		double var22 = var2 + var1.maxX;
		double var24 = var4 + var1.maxY;
		double var26 = var6 + var1.minZ;
		double var28 = var6 + var1.maxZ;
		var9.addVertexWithUV(var22, var24, var28, var14, var18);
		var9.addVertexWithUV(var22, var24, var26, var14, var16);
		var9.addVertexWithUV(var20, var24, var26, var12, var16);
		var9.addVertexWithUV(var20, var24, var28, var12, var18);
	}

	public void renderEastFace(Block var1, double var2, double var4, double var6, int var8) {
		Tessellator var9 = Tessellator.instance;
		if(this.overrideBlockTexture >= 0) {
			var8 = this.overrideBlockTexture;
		}

		int var10 = (var8 & 15) << 4;
		int var11 = var8 & 240;
		double var12 = ((double)var10 + var1.minX * 16.0D) / 256.0D;
		double var14 = ((double)var10 + var1.maxX * 16.0D - 0.01D) / 256.0D;
		double var16 = ((double)var11 + var1.minY * 16.0D) / 256.0D;
		double var18 = ((double)var11 + var1.maxY * 16.0D - 0.01D) / 256.0D;
		double var20;
		if(this.flipTexture) {
			var20 = var12;
			var12 = var14;
			var14 = var20;
		}

		if(var1.minX < 0.0D || var1.maxX > 1.0D) {
			var12 = (double)(((float)var10 + 0.0F) / 256.0F);
			var14 = (double)(((float)var10 + 15.99F) / 256.0F);
		}

		if(var1.minY < 0.0D || var1.maxY > 1.0D) {
			var16 = (double)(((float)var11 + 0.0F) / 256.0F);
			var18 = (double)(((float)var11 + 15.99F) / 256.0F);
		}

		var20 = var2 + var1.minX;
		double var22 = var2 + var1.maxX;
		double var24 = var4 + var1.minY;
		double var26 = var4 + var1.maxY;
		double var28 = var6 + var1.minZ;
		var9.addVertexWithUV(var20, var26, var28, var14, var16);
		var9.addVertexWithUV(var22, var26, var28, var12, var16);
		var9.addVertexWithUV(var22, var24, var28, var12, var18);
		var9.addVertexWithUV(var20, var24, var28, var14, var18);
	}

	public void renderWestFace(Block var1, double var2, double var4, double var6, int var8) {
		Tessellator var9 = Tessellator.instance;
		if(this.overrideBlockTexture >= 0) {
			var8 = this.overrideBlockTexture;
		}

		int var10 = (var8 & 15) << 4;
		int var11 = var8 & 240;
		double var12 = ((double)var10 + var1.minX * 16.0D) / 256.0D;
		double var14 = ((double)var10 + var1.maxX * 16.0D - 0.01D) / 256.0D;
		double var16 = ((double)var11 + var1.minY * 16.0D) / 256.0D;
		double var18 = ((double)var11 + var1.maxY * 16.0D - 0.01D) / 256.0D;
		double var20;
		if(this.flipTexture) {
			var20 = var12;
			var12 = var14;
			var14 = var20;
		}

		if(var1.minX < 0.0D || var1.maxX > 1.0D) {
			var12 = (double)(((float)var10 + 0.0F) / 256.0F);
			var14 = (double)(((float)var10 + 15.99F) / 256.0F);
		}

		if(var1.minY < 0.0D || var1.maxY > 1.0D) {
			var16 = (double)(((float)var11 + 0.0F) / 256.0F);
			var18 = (double)(((float)var11 + 15.99F) / 256.0F);
		}

		var20 = var2 + var1.minX;
		double var22 = var2 + var1.maxX;
		double var24 = var4 + var1.minY;
		double var26 = var4 + var1.maxY;
		double var28 = var6 + var1.maxZ;
		var9.addVertexWithUV(var20, var26, var28, var12, var16);
		var9.addVertexWithUV(var20, var24, var28, var12, var18);
		var9.addVertexWithUV(var22, var24, var28, var14, var18);
		var9.addVertexWithUV(var22, var26, var28, var14, var16);
	}

	public void renderNorthFace(Block var1, double var2, double var4, double var6, int var8) {
		Tessellator var9 = Tessellator.instance;
		if(this.overrideBlockTexture >= 0) {
			var8 = this.overrideBlockTexture;
		}

		int var10 = (var8 & 15) << 4;
		int var11 = var8 & 240;
		double var12 = ((double)var10 + var1.minZ * 16.0D) / 256.0D;
		double var14 = ((double)var10 + var1.maxZ * 16.0D - 0.01D) / 256.0D;
		double var16 = ((double)var11 + var1.minY * 16.0D) / 256.0D;
		double var18 = ((double)var11 + var1.maxY * 16.0D - 0.01D) / 256.0D;
		double var20;
		if(this.flipTexture) {
			var20 = var12;
			var12 = var14;
			var14 = var20;
		}

		if(var1.minZ < 0.0D || var1.maxZ > 1.0D) {
			var12 = (double)(((float)var10 + 0.0F) / 256.0F);
			var14 = (double)(((float)var10 + 15.99F) / 256.0F);
		}

		if(var1.minY < 0.0D || var1.maxY > 1.0D) {
			var16 = (double)(((float)var11 + 0.0F) / 256.0F);
			var18 = (double)(((float)var11 + 15.99F) / 256.0F);
		}

		var20 = var2 + var1.minX;
		double var22 = var4 + var1.minY;
		double var24 = var4 + var1.maxY;
		double var26 = var6 + var1.minZ;
		double var28 = var6 + var1.maxZ;
		var9.addVertexWithUV(var20, var24, var28, var14, var16);
		var9.addVertexWithUV(var20, var24, var26, var12, var16);
		var9.addVertexWithUV(var20, var22, var26, var12, var18);
		var9.addVertexWithUV(var20, var22, var28, var14, var18);
	}

	public void renderSouthFace(Block var1, double var2, double var4, double var6, int var8) {
		Tessellator var9 = Tessellator.instance;
		if(this.overrideBlockTexture >= 0) {
			var8 = this.overrideBlockTexture;
		}

		int var10 = (var8 & 15) << 4;
		int var11 = var8 & 240;
		double var12 = ((double)var10 + var1.minZ * 16.0D) / 256.0D;
		double var14 = ((double)var10 + var1.maxZ * 16.0D - 0.01D) / 256.0D;
		double var16 = ((double)var11 + var1.minY * 16.0D) / 256.0D;
		double var18 = ((double)var11 + var1.maxY * 16.0D - 0.01D) / 256.0D;
		double var20;
		if(this.flipTexture) {
			var20 = var12;
			var12 = var14;
			var14 = var20;
		}

		if(var1.minZ < 0.0D || var1.maxZ > 1.0D) {
			var12 = (double)(((float)var10 + 0.0F) / 256.0F);
			var14 = (double)(((float)var10 + 15.99F) / 256.0F);
		}

		if(var1.minY < 0.0D || var1.maxY > 1.0D) {
			var16 = (double)(((float)var11 + 0.0F) / 256.0F);
			var18 = (double)(((float)var11 + 15.99F) / 256.0F);
		}

		var20 = var2 + var1.maxX;
		double var22 = var4 + var1.minY;
		double var24 = var4 + var1.maxY;
		double var26 = var6 + var1.minZ;
		double var28 = var6 + var1.maxZ;
		var9.addVertexWithUV(var20, var22, var28, var12, var18);
		var9.addVertexWithUV(var20, var22, var26, var14, var18);
		var9.addVertexWithUV(var20, var24, var26, var14, var16);
		var9.addVertexWithUV(var20, var24, var28, var12, var16);
	}

	public void renderBlockOnInventory(Block var1) {
		byte var2 = -1;
		Tessellator var3 = Tessellator.instance;
		int var4 = var1.getRenderType();
		if(var4 == 0) {
			GL11.glTranslatef(-0.5F, -0.5F, -0.5F);
			var3.startDrawingQuads();
			var3.setNormal(0.0F, -1.0F, 0.0F);
			this.renderBottomFace(var1, 0.0D, 0.0D, 0.0D, var1.getBlockTextureFromSide(0));
			var3.draw();
			var3.startDrawingQuads();
			var3.setNormal(0.0F, 1.0F, 0.0F);
			this.renderTopFace(var1, 0.0D, 0.0D, 0.0D, var1.getBlockTextureFromSide(1));
			var3.draw();
			var3.startDrawingQuads();
			var3.setNormal(0.0F, 0.0F, -1.0F);
			this.renderEastFace(var1, 0.0D, 0.0D, 0.0D, var1.getBlockTextureFromSide(2));
			var3.draw();
			var3.startDrawingQuads();
			var3.setNormal(0.0F, 0.0F, 1.0F);
			this.renderWestFace(var1, 0.0D, 0.0D, 0.0D, var1.getBlockTextureFromSide(3));
			var3.draw();
			var3.startDrawingQuads();
			var3.setNormal(-1.0F, 0.0F, 0.0F);
			this.renderNorthFace(var1, 0.0D, 0.0D, 0.0D, var1.getBlockTextureFromSide(4));
			var3.draw();
			var3.startDrawingQuads();
			var3.setNormal(1.0F, 0.0F, 0.0F);
			this.renderSouthFace(var1, 0.0D, 0.0D, 0.0D, var1.getBlockTextureFromSide(5));
			var3.draw();
			GL11.glTranslatef(0.5F, 0.5F, 0.5F);
		} else if(var4 == 1) {
			var3.startDrawingQuads();
			var3.setNormal(0.0F, -1.0F, 0.0F);
			this.renderCrossedSquares(var1, var2, -0.5D, -0.5D, -0.5D);
			var3.draw();
		} else if(var4 == 6) {
			var3.startDrawingQuads();
			var3.setNormal(0.0F, -1.0F, 0.0F);
			this.renderBlockCropsImpl(var1, var2, -0.5D, -0.5D, -0.5D);
			var3.draw();
		} else if(var4 == 2) {
			var3.startDrawingQuads();
			var3.setNormal(0.0F, -1.0F, 0.0F);
			this.renderTorchAtAngle(var1, -0.5D, -0.5D, -0.5D, 0.0D, 0.0D);
			var3.draw();
		} else if(var4 != 3 && var4 == 5) {
		}

	}
}
