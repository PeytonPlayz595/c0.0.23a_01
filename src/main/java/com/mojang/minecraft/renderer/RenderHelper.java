package com.mojang.minecraft.renderer;

import com.mojang.minecraft.Minecraft;
import com.mojang.minecraft.character.Vec3;
import com.mojang.minecraft.level.Level;
import com.mojang.minecraft.level.liquid.Liquid;
import com.mojang.minecraft.level.tile.Tile;
import com.mojang.minecraft.player.Player;
import java.nio.FloatBuffer;
import org.lwjgl.BufferUtils;
import org.lwjgl.opengl.GL11;

public final class RenderHelper {
	public Minecraft a;
	public float fogColorMultiplier = 1.0F;
	public boolean displayActive = false;
	public float fogColorRed = 0.5F;
	public float fogColorGreen = 0.8F;
	public float fogColorBlue = 1.0F;
	public float renderDistance = 0.0F;
	private volatile int unusedInt1 = 0;
	private volatile int unusedInt2 = 0;
	private FloatBuffer lb = BufferUtils.createFloatBuffer(16);

	public RenderHelper(Minecraft var1) {
		this.a = var1;
	}

	public void toggleLight(boolean var1) {
		if(!var1) {
			GL11.glDisable(GL11.GL_LIGHTING);
			GL11.glDisable(GL11.GL_LIGHT0);
		} else {
			GL11.glEnable(GL11.GL_LIGHTING);
			GL11.glEnable(GL11.GL_LIGHT0);
			GL11.glEnable(GL11.GL_COLOR_MATERIAL);
			GL11.glColorMaterial(GL11.GL_FRONT_AND_BACK, GL11.GL_AMBIENT_AND_DIFFUSE);
			float var4 = 0.7F;
			float var2 = 0.3F;
			Vec3 var3 = (new Vec3(0.0F, -1.0F, 0.5F)).normalize();
			GL11.glLight(GL11.GL_LIGHT0, GL11.GL_POSITION, this.getBuffer(var3.x, var3.y, var3.z, 0.0F));
			GL11.glLight(GL11.GL_LIGHT0, GL11.GL_DIFFUSE, this.getBuffer(var2, var2, var2, 1.0F));
			GL11.glLight(GL11.GL_LIGHT0, GL11.GL_AMBIENT, this.getBuffer(0.0F, 0.0F, 0.0F, 1.0F));
			GL11.glLightModel(GL11.GL_LIGHT_MODEL_AMBIENT, this.getBuffer(var4, var4, var4, 1.0F));
		}
	}

	public final void initGui() {
		int var1 = this.a.width * 240 / this.a.height;
		int var2 = this.a.height * 240 / this.a.height;
		GL11.glClear(GL11.GL_DEPTH_BUFFER_BIT);
		GL11.glMatrixMode(GL11.GL_PROJECTION);
		GL11.glLoadIdentity();
		GL11.glOrtho(0.0D, (double)var1, (double)var2, 0.0D, 100.0D, 300.0D);
		GL11.glMatrixMode(GL11.GL_MODELVIEW);
		GL11.glLoadIdentity();
		GL11.glTranslatef(0.0F, 0.0F, -200.0F);
	}

	public void setupFog() {
		Level var1 = this.a.level;
		Player var2 = this.a.player;
		GL11.glFog(GL11.GL_FOG_COLOR, this.getBuffer(this.fogColorRed, this.fogColorGreen, this.fogColorBlue, 1.0F));
		GL11.glNormal3f(0.0F, -1.0F, 0.0F);
		GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
		Tile var3 = Tile.tiles[var1.getTile((int)var2.x, (int)(var2.y + 0.12F), (int)var2.z)];
		if(var3 != null && var3.getLiquidType() != Liquid.none) {
			Liquid var4 = var3.getLiquidType();
			GL11.glFogi(GL11.GL_FOG_MODE, GL11.GL_EXP);
			if(var4 == Liquid.water) {
				GL11.glFogf(GL11.GL_FOG_DENSITY, 0.1F);
				GL11.glLightModel(GL11.GL_LIGHT_MODEL_AMBIENT, this.getBuffer(0.4F, 0.4F, 0.9F, 1.0F));
			} else if(var4 == Liquid.lava) {
				GL11.glFogf(GL11.GL_FOG_DENSITY, 2.0F);
				GL11.glLightModel(GL11.GL_LIGHT_MODEL_AMBIENT, this.getBuffer(0.4F, 0.3F, 0.3F, 1.0F));
			}
		} else {
			GL11.glFogi(GL11.GL_FOG_MODE, GL11.GL_LINEAR);
			GL11.glFogf(GL11.GL_FOG_START, 0.0F);
			GL11.glFogf(GL11.GL_FOG_END, this.renderDistance);
			GL11.glLightModel(GL11.GL_LIGHT_MODEL_AMBIENT, this.getBuffer(1.0F, 1.0F, 1.0F, 1.0F));
		}

		GL11.glEnable(GL11.GL_COLOR_MATERIAL);
		GL11.glColorMaterial(GL11.GL_FRONT, GL11.GL_AMBIENT);
		GL11.glEnable(GL11.GL_LIGHTING);
	}

	private FloatBuffer getBuffer(float var1, float var2, float var3, float var4) {
		this.lb.clear();
		this.lb.put(var1).put(var2).put(var3).put(var4);
		this.lb.flip();
		return this.lb;
	}
}
