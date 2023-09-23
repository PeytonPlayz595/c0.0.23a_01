package net.minecraft.src;

import java.awt.AWTException;
import java.awt.Component;
import java.awt.MouseInfo;
import java.awt.Point;
import java.awt.Robot;
import java.nio.IntBuffer;
import org.lwjgl.LWJGLException;
import org.lwjgl.input.Cursor;
import org.lwjgl.input.Mouse;

public class MouseHelper {
	private Component windowComponent;
	private Robot robot;
	private int componentWidth;
	private int componentHeight;
	private Cursor cursor;
	public int deltaX;
	public int deltaY;
	private int mouseInt = 10;

	public MouseHelper(Component var1) {
		this.windowComponent = var1;

		try {
			this.robot = new Robot();
		} catch (AWTException var6) {
			var6.printStackTrace();
		}

		IntBuffer var2 = GLAllocation.createIntBuffer(1);
		var2.put(0);
		var2.flip();
		IntBuffer var3 = GLAllocation.createIntBuffer(1024);

		try {
			this.cursor = new Cursor(32, 32, 16, 16, 1, var3, var2);
		} catch (LWJGLException var5) {
			var5.printStackTrace();
		}

	}

	public void grabMouseCursor() {
		try {
			Mouse.setNativeCursor(this.cursor);
		} catch (LWJGLException var2) {
			var2.printStackTrace();
		}

		this.mouseXYChange();
		this.deltaX = 0;
		this.deltaY = 0;
	}

	public void ungrabMouseCursor() {
		try {
			Mouse.setNativeCursor((Cursor)null);
		} catch (LWJGLException var2) {
			var2.printStackTrace();
		}

	}

	public void mouseXYChange() {
		Point var1 = MouseInfo.getPointerInfo().getLocation();
		Point var2 = this.windowComponent.getLocationOnScreen();
		this.robot.mouseMove(this.componentWidth, this.componentHeight);
		this.componentWidth = var2.x + this.windowComponent.getWidth() / 2;
		this.componentHeight = var2.y + this.windowComponent.getHeight() / 2;
		if(this.mouseInt == 0) {
			this.deltaX = var1.x - this.componentWidth;
			this.deltaY = var1.y - this.componentHeight;
		} else {
			this.deltaX = this.deltaY = 0;
			--this.mouseInt;
		}

	}
}
