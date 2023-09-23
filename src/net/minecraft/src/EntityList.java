package net.minecraft.src;

import java.util.HashMap;
import java.util.Map;

public class EntityList {
	private static Map stringToClassMapping = new HashMap();
	private static Map classToStringMapping = new HashMap();

	private static void addMapping(Class var0, String var1) {
		stringToClassMapping.put(var1, var0);
		classToStringMapping.put(var0, var1);
	}

	public static Entity createEntityInWorld(String var0, World var1) {
		Entity var2 = null;

		try {
			Class var3 = (Class)stringToClassMapping.get(var0);
			if(var3 != null) {
				var2 = (Entity)var3.getConstructor(new Class[]{World.class}).newInstance(new Object[]{var1});
			}
		} catch (Exception var4) {
			var4.printStackTrace();
		}

		return var2;
	}

	public static Entity createEntityFromNBT(NBTTagCompound var0, World var1) {
		Entity var2 = null;

		try {
			Class var3 = (Class)stringToClassMapping.get(var0.getString("id"));
			if(var3 != null) {
				var2 = (Entity)var3.getConstructor(new Class[]{World.class}).newInstance(new Object[]{var1});
			}
		} catch (Exception var4) {
			var4.printStackTrace();
		}

		if(var2 != null) {
			var2.readFromNBT(var0);
		} else {
			System.out.println("Skipping Entity with id " + var0.getString("id"));
		}

		return var2;
	}

	public static String getEntityString(Entity var0) {
		return (String)classToStringMapping.get(var0.getClass());
	}

	static {
		addMapping(EntityArrow.class, "Arrow");
		addMapping(EntityItem.class, "Item");
		addMapping(EntityPainting.class, "Painting");
		addMapping(EntityLiving.class, "Mob");
		addMapping(EntityMonster.class, "Monster");
		addMapping(EntityCreeper.class, "Creeper");
		addMapping(EntitySkeleton.class, "Skeleton");
		addMapping(EntitySpider.class, "Spider");
		addMapping(EntityGiant.class, "Giant");
		addMapping(EntityZombie.class, "Zombie");
		addMapping(EntityPig.class, "Pig");
		addMapping(EntitySheep.class, "Sheep");
		addMapping(EntityTNTPrimed.class, "PrimedTnt");
		addMapping(EntityFallingSand.class, "FallingSand");
		addMapping(EntityMinecart.class, "Minecart");
	}
}
