package org.lwjgl;

import java.nio.ByteBuffer;
import java.nio.FloatBuffer;
import java.nio.IntBuffer;

public class BufferUtils extends GLAllocation {
	public static FloatBuffer createFloatBuffer(int i1) {
		return createDirectFloatBuffer(i1);
	}
	
	public static IntBuffer createIntBuffer(int i1) {
		return createDirectIntBuffer(i1);
	}
	
	public static ByteBuffer createByteBuffer(int i1) {
		return createDirectByteBuffer(i1);
	}
}