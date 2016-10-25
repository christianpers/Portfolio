import FreeCamera from '../cameras/FreeCamera';
import BaseCamera from '../cameras/BaseCamera';

export default class Scene {
	constructor(canvas) {
		this.canvas = canvas;
		// this.gl = this.canvas.getContext("webgl");

		// window.NS.GL.glContext = this.gl;
		this.gl = window.NS.GL.glContext;

	


		this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
			// gl.enable(gl.CULL_FACE);
		// gl.enable(gl.BLEND);
		this.gl.clearColor( 0, 0, 0, 1 );
		this.gl.clearDepth( 1 );
		this.depthTextureExt  = this.gl.getExtension("WEBKIT_WEBGL_depth_texture"); // Or browser-appropriate prefix
		// this.floatTextureExt   = gl.getExtension("OES_texture_float") // Or browser-appropriate prefix
		this.deravitives = this.gl.getExtension("GL_OES_standard_derivatives");
		

		this.setCamera();
	}

	setCamera() {

		this.camera = new FreeCamera();
		
	}

	loop() {

		this.update();
		this.render();
		
	}

	update() {

		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
	}

	render() {
	}

	onResize(w,h) {

		this.dims.w = w;
		this.dims.h = h;

		this.gl.viewportWidth = w;
		this.gl.viewportHeight = h;

		this.canvas.width = w;
		this.canvas.height = h;

		this.canvas.style.height = h + 'px';
		this.canvas.style.width = w + 'px';

	}
}