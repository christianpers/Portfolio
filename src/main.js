'use strict';
require("./scss/main.scss");
import SceneMain from "./js/SceneMain";
import PortfolioMain from "./js/PortfolioMain";

class Starter {
	constructor() {
		document.body.style.margin = 0;
		
		this.sceneMain = null;
		window.NS = {};
		window.NS.maxW = 1280;
		window.NS.GL = {};
		window.NS.GL.params = {};

		this.portfolioMain = new PortfolioMain(this.onPortfolioClick, this);
		if (window.innerWidth > 800)
			this.initScene();
		
		window.addEventListener('resize', () => {
			this.onResize();
		})

		this.onResize();

		this.reqFrame();
	
	}

	initScene() {

		let canvas = document.createElement("canvas");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.className = "Main-Canvas";
		canvas.id = 'gl';
		document.body.appendChild(canvas);

		this.gl = canvas.getContext("webgl");

		if (this.gl) {

			window.NS.GL.glContext = this.gl;

			this.sceneMain = new SceneMain(canvas);
		}else{

			document.body.removeChild(canvas);
		}

		
	}

	reqFrame() {

		requestAnimationFrame(() => {
			this.reqFrame();
		});

		if (this.sceneMain)
			this.sceneMain.loop();

		this.portfolioMain.update();
	}

	onResize() {

		var w = window.innerWidth;
		var h = window.innerHeight;

		if (w > window.NS.maxW)
			w = window.NS.maxW;

		this.portfolioMain.onResize(w,h,window.innerWidth);

		document.body.style.height = this.portfolioMain.currentHeight + 'px';

		if (this.sceneMain)
			this.sceneMain.onResize(window.innerWidth,h);
	}

};

if(document.body) new Starter();
else {
	window.addEventListener("load", new Starter());
}






