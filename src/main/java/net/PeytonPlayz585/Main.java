package net.PeytonPlayz585;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.UUID;

import org.lwjgl.opengl.Display;
import org.teavm.jso.JSBody;
import org.teavm.jso.browser.Window;
import org.teavm.jso.dom.html.HTMLElement;

import net.PeytonPlayz585.opengl.LWJGLMain;
import net.minecraft.src.Minecraft;
import net.minecraft.src.Session;

public class Main {
	
	public static HTMLElement rootElement = null;
	public static Minecraft instance = null;
	private static Thread mcThread = null;
	
	@JSBody(params = { }, script = "return window.minecraftOpts;")
	public static native String[] getOpts();
	
	public static void main(String args[]) {
    	String[] e = getOpts();
    	try {
	    	try {
	    		LWJGLMain.initializeContext(rootElement = Window.current().getDocument().getElementById(e[0]), e[1]);
	    	}catch(Exception ex) {
	    		return;
	    	}
    	}catch(Throwable ex2) {
    		StringWriter s = new StringWriter();
    		ex2.printStackTrace(new PrintWriter(s));
    		return;
    	}
    	//LocalStorageManager.loadStorage();
    	run0();
	}
	
	public static void run0() {
		instance = new Minecraft(Display.getDisplayMode().getWidth(), Display.getDisplayMode().getHeight(), false);
		instance.session = new Session("Player", UUID.randomUUID().toString());
		instance.session.mpPassParameter = UUID.randomUUID().toString();
		mcThread = new Thread(instance, "Minecraft main thread");
		mcThread.start();
	}

}
