package net.minecraft.src;

public class MathHelper {
    private static final float[] SIN_TABLE = new float[65536];
    private static final float SIN_CONVERSION_FACTOR = 10430.378F;
    private static final float COS_CONVERSION_FACTOR = 16384.0F;
    private static final float INVERSE_SIN_TABLE_LENGTH = 1.0F / SIN_TABLE.length;

    static {
        for (int i = 0; i < SIN_TABLE.length; ++i) {
            SIN_TABLE[i] = (float) Math.sin(i * 2 * Math.PI * INVERSE_SIN_TABLE_LENGTH);
        }
    }

    public static final float sin(float var0) {
        return SIN_TABLE[(int) (var0 * SIN_CONVERSION_FACTOR) & 65535];
    }

    public static final float cos(float var0) {
        return SIN_TABLE[(int) (var0 * SIN_CONVERSION_FACTOR + COS_CONVERSION_FACTOR) & 65535];
    }

    public static final float sqrt_float(float var0) {
        return (float) Math.sqrt((double) var0);
    }

    public static final float sqrt_double(double var0) {
        return (float) Math.sqrt(var0);
    }

    public static int floor_float(float var0) {
        int var1 = (int) var0;
        return var0 < (float) var1 ? var1 - 1 : var1;
    }

    public static int floor_double(double var0) {
        int var2 = (int) var0;
        return var0 < (double) var2 ? var2 - 1 : var2;
    }

    public static float abs(float var0) {
        return var0 >= 0.0F ? var0 : -var0;
    }

    public static double abs_max(double var0, double var2) {
        if (var0 < 0.0D) {
            var0 = -var0;
        }

        if (var2 < 0.0D) {
            var2 = -var2;
        }

        return var0 > var2 ? var0 : var2;
    }

    public static int bucketInt(int var0, int var1) {
        return var0 < 0 ? -((-var0 - 1) / var1) - 1 : var0 / var1;
    }
}