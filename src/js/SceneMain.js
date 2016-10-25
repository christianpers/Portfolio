import Scene from "./framework/Scene";
import ViewPlain from "./views/ViewPlain";
import MouseInteractor from "./framework/MouseInteractor";
import KeyboardInteractor from "./framework/KeyboardInteractor";
import SceneTransforms from "./framework/SceneTransforms";
import Texture from "./framework/Texture";

export default class SceneMain extends Scene {
	constructor(canvas) {

		super(canvas);
		this.dims = {w: 0, h: 0};
		this.onResize();
		window.addEventListener('resize', () => {
			this.onResize();
		});

		// this.currentPointTarget = {x: 0, y: 0};
		this.currentPoint = {x: -1, y: 1};
		this.xDirection = Math.random()/500;
		this.yDirection = Math.random()/500;

		this.camera.setPosition(new Array(0.0, 0.0, 1.708));
   		this.camera.setLookAtPoint(vec3.fromValues(0.0, 0.0,-1.0));

		// this.mouseInteractor = new MouseInteractor(this.camera, this.canvas);
	 //    this.mouseInteractor.setup();

	 //    this.keyboardInteractor = new KeyboardInteractor(this.camera, this.canvas);
	 //    this.keyboardInteractor.setup();

		this.transforms = new SceneTransforms(this.canvas);
		
		this.initViews();

		this._screenshot = null;
	}

	setTexture(img) {

		this.vPlain.resetCounter();
		this.vPlain.targetMove = 1;
		this._screenshot = new Texture(img, false);

	}

	initTextures() {


	}

	initViews() {

		this.vPlain = new ViewPlain(this.transforms);

	}

	update() {

		super.update();

		this.currentPoint.x += this.xDirection;
		this.currentPoint.y += this.yDirection;
		if (this.currentPoint.x > 1)
			this.xDirection = -Math.random()/500;
		else if (this.currentPoint.x < -1)
			this.xDirection = Math.random()/500;


		if (this.currentPoint.y > 1)
			this.yDirection = -Math.random()/500;
		else if (this.currentPoint.y < -1)
			this.yDirection = Math.random()/500;

	}

	render() {

		this.gl.enable(this.gl.DEPTH_TEST);

		this.gl.disable(this.gl.BLEND);

		this.gl.clearColor( 0, 0, 0, 1 );
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);

		this.transforms.push();
		this.transforms.setCamera(this.camera);

		this.camera.apply(this.gl.viewportWidth / this.gl.viewportHeight);
	    this.transforms.calculateModelView();

	    // this.gl.enable(this.gl.BLEND);
     //    this.gl.disable(this.gl.DEPTH_TEST);
		this.vPlain.render(this.dims.w, this.dims.h, this.currentPoint);

		this.transforms.pop();

	}


}