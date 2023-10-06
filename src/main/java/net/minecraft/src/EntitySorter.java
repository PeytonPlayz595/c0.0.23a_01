package net.minecraft.src;

import java.util.Comparator;

public class EntitySorter implements Comparator {
	private Entity comparedEntity;

	public EntitySorter(Entity var1) {
		this.comparedEntity = var1;
	}

	public int a(WorldRenderer var1, WorldRenderer var2) {
		return var1.distanceToEntitySquared(this.comparedEntity) < var2.distanceToEntitySquared(this.comparedEntity) ? -1 : 1;
	}

	public int compare(Object var1, Object var2) {
		return this.a((WorldRenderer)var1, (WorldRenderer)var2);
	}
}
