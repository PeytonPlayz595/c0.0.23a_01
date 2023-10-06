package net.minecraft.src;

import org.lwjgl.input.Mouse;
import net.PeytonPlayz585.opengl.LWJGLMain;

public class MouseHelper {

	public void grabMouseCursor() {
		Mouse.setNativeCursor(true);
		deltaX = 0;
		deltaY = 0;
	}

	public void ungrabMouseCursor() {
		Mouse.setCursorPosition(LWJGLMain.getCanvasWidth() / 2, LWJGLMain.getCanvasHeight() / 2);
		Mouse.setNativeCursor(false);
	}

	public void mouseXYChange() {
		if(LWJGLMain.isPointerLocked2()) {
			deltaX = Mouse.getDX();
			deltaY = Mouse.getDY();
		}else {
			deltaX = 0;
			deltaY = 0;
		}
	}
	
	public int deltaX;
	public int deltaY;
}