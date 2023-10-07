package net.minecraft.src;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.lwjgl.opengl.GL11;

public class PanelCrashReport {
	public PanelCrashReport(UnexpectedThrowable var1) {
		StringWriter var2 = new StringWriter();
		var1.exception.printStackTrace(new PrintWriter(var2));
		String var3 = var2.toString();
		String var4 = "";
		String var5 = "";

		try {
			var5 = var5 + "Generated " + (new SimpleDateFormat()).format(new Date()) + "\n";
			var5 = var5 + "\n";
			var5 = var5 + "Minecraft: Minecraft Infdev\n";
			var5 = var5 + "OS: " + System.getProperty("os.name") + " (" + System.getProperty("os.arch") + ") version " + System.getProperty("os.version") + "\n";
			var5 = var5 + "Java: " + "1.8" + ", " + "JDK (Java Development Kit)" + "\n";
			var5 = var5 + "VM: " + "OpenGL Desktop Emulator" + " (" + "WebGL 2.0" + "), " + "\n";
			var5 = var5 + "WebGL: " + "2.0" + "\n";
			var4 = GL11.gluErrorString(GL11.GL_VENDOR);
			var5 = var5 + "OpenGL: " + GL11.gluErrorString(GL11.GL_RENDERER) + " version " + GL11.gluErrorString(GL11.GL_VERSION) + ", " + GL11.gluErrorString(GL11.GL_VENDOR) + "\n";
		} catch (Throwable var8) {
			var5 = var5 + "[failed to get system properties]\n";
		}

		var5 = var5 + "\n";
		var5 = var5 + var3;
		String var6 = "";
		var6 = var6 + "\n";
		var6 = var6 + "\n";
		if(var3.contains("Pixel format not accelerated")) {
			var6 = var6 + "      Bad video card drivers!      \n";
			var6 = var6 + "      -----------------------      \n";
			var6 = var6 + "\n";
			var6 = var6 + "Minecraft was unable to start because it failed to find an accelerated OpenGL mode.\n";
			var6 = var6 + "This can usually be fixed by updating the video card drivers.\n";
			if(var4.toLowerCase().contains("nvidia")) {
				var6 = var6 + "\n";
				var6 = var6 + "You might be able to find drivers for your video card here:\n";
				var6 = var6 + "  http://www.nvidia.com/\n";
			} else if(var4.toLowerCase().contains("ati")) {
				var6 = var6 + "\n";
				var6 = var6 + "You might be able to find drivers for your video card here:\n";
				var6 = var6 + "  http://www.amd.com/\n";
			}
		} else {
			var6 = var6 + "      Minecraft has crashed!      \n";
			var6 = var6 + "      ----------------------      \n";
			var6 = var6 + "\n";
			var6 = var6 + "Minecraft has stopped running because it encountered a problem.\n";
			var6 = var6 + "\n";
			var6 = var6 + "If you wish to report this, please copy this entire text and email it to support@mojang.com.\n";
			var6 = var6 + "Please include a description of what you did when the error occured.\n";
		}

		var6 = var6 + "\n";
		var6 = var6 + "\n";
		var6 = var6 + "\n";
		var6 = var6 + "--- BEGIN ERROR REPORT " + Integer.toHexString(var6.hashCode()) + " --------\n";
		var6 = var6 + var5;
		var6 = var6 + "--- END ERROR REPORT " + Integer.toHexString(var6.hashCode()) + " ----------\n";
		var6 = var6 + "\n";
		var6 = var6 + "\n";
	}
}
