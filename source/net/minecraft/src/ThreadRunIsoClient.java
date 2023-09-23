package net.minecraft.src;

class ThreadRunIsoClient extends Thread {
	final CanvasIsomPreview isoCanvas;

	ThreadRunIsoClient(CanvasIsomPreview var1) {
		this.isoCanvas = var1;
	}

	public void run() {
		while(CanvasIsomPreview.a(this.isoCanvas)) {
			this.isoCanvas.render();

			try {
				Thread.sleep(1L);
			} catch (Exception var2) {
			}
		}

	}
}