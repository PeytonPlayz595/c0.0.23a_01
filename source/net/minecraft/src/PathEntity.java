package net.minecraft.src;

public class PathEntity {
	private final PathPoint[] points;
	public final int pathLength;
	private int pathIndex;

	public PathEntity(PathPoint[] var1) {
		this.points = var1;
		this.pathLength = var1.length;
	}

	public void incrementPathIndex() {
		++this.pathIndex;
	}

	public boolean isFinished() {
		return this.pathIndex >= this.points.length;
	}

	public Vec3D getPosition(Entity var1) {
		float var2 = (float)this.points[this.pathIndex].xCoord + (float)((int)(var1.width + 1.0F)) * 0.5F;
		float var3 = (float)this.points[this.pathIndex].yCoord;
		float var4 = (float)this.points[this.pathIndex].zCoord + (float)((int)(var1.width + 1.0F)) * 0.5F;
		return Vec3D.createVector((double)var2, (double)var3, (double)var4);
	}
}
