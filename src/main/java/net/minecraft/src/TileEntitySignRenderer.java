package net.minecraft.src;

import org.lwjgl.opengl.GL11;

public class TileEntitySignRenderer extends TileEntitySpecialRenderer {
	private SignModel modelSign = new SignModel();

	public void a(TileEntitySign var1, double var2, double var4, double var6, float var8) {
		GL11.glPushMatrix();
		GL11.glTranslatef((float)var2 + 0.5F, (float)var4 + 12.0F / 16.0F, (float)var6 + 0.5F);
		float var9 = (float)(var1.getBlockMetadata() * 360) / 16.0F;
		GL11.glRotatef(-var9, 0.0F, 1.0F, 0.0F);
		this.bindTextureByName("/item/sign.png");
		GL11.glPushMatrix();
		GL11.glScalef(1.0F, -1.0F, -1.0F);
		this.modelSign.renderSign();
		GL11.glPopMatrix();
		float var10 = (float)(1.0D / 60.0D);
		GL11.glTranslatef(0.0F, 0.5F, 0.09F);
		GL11.glScalef(var10, -var10, var10);
		GL11.glNormal3f(0.0F, 0.0F, -1.0F * var10);
		FontRenderer var11 = this.getFontRenderer();

		for(int var12 = 0; var12 < var1.signText.length; ++var12) {
			String var13 = var1.signText[var12];
			if(var12 == var1.lineBeingEdited) {
				var13 = "> " + var13 + " <";
				var11.drawString(var13, -var11.getStringWidth(var13) / 2, var12 * 10 - var1.signText.length * 5, 0);
			} else {
				var11.drawString(var13, -var11.getStringWidth(var13) / 2, var12 * 10 - var1.signText.length * 5, 0);
			}
		}

		GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
		GL11.glPopMatrix();
	}

	public void renderTileEntityMobSpawner(TileEntity var1, double var2, double var4, double var6, float var8) {
		this.a((TileEntitySign)var1, var2, var4, var6, var8);
	}
}
