package org.lwjgl.opengl;

import net.PeytonPlayz585.opengl.LWJGLMain;

public class Display {
	public static boolean isActive() {
		return LWJGLMain.isFocused();
	}

	public static void update() {
		LWJGLMain.updateDisplay();
	}
}
