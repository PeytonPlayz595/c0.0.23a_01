package net.minecraft.isom;

import java.applet.Applet;
import java.awt.BorderLayout;
import net.minecraft.src.CanvasIsomPreview;

public class IsomPreviewApplet extends Applet {
	private CanvasIsomPreview isomCanvas = new CanvasIsomPreview();

	public IsomPreviewApplet() {
		this.setLayout(new BorderLayout());
		this.add(this.isomCanvas, "Center");
	}

	public void start() {
		this.isomCanvas.start();
	}

	public void stop() {
		this.isomCanvas.stop();
	}
}
