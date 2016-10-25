import View from "../framework/View";
import Mesh from "../framework/Mesh";

export default class ViewPlain extends View {

	constructor(transforms) {

		super(transforms, require("../../shaders/plain.vert"), require("../../shaders/plain.frag"));

		this.counter = 1;
		this.targetMove = 0;
		this.move = 0;

		var positions = [];
		var coords = [];
		var extra = [];
		var center = [];
		var indices = [];
		var tempIndices = [];
		
		var w = 2;
		var h = 2;

		var nrCols = 30;
		var nrRows = 30;

		var blockW = w/nrCols;
		var blockH = h/nrRows;
		var depth = 1;
		var counter = 0;
		var indiceCounter = 0;
		for (var i=0;i < nrCols;i++){
			for (var q=nrRows;q > 0;q--){

				var leftX = blockW * i -1;
				var topY = blockH * q -1;
				var rightX = blockW * (i+1) -1;
				var bottomY = blockH * (q-1) -1;
				
				positions.push([leftX, topY, depth]);
				positions.push([leftX, bottomY, depth]);
				positions.push([rightX, topY, depth]);
				positions.push([rightX, bottomY, depth]);


				extra.push([counter, i+q]);
				extra.push([counter, i+q]);
				extra.push([counter, i+q]);
				extra.push([counter, i+q]);

				var bottomRight = {};
				bottomRight.x = leftX + blockW;
				bottomRight.y = topY + blockH;
				bottomRight.z = 0;

				var centerPos = {};
				centerPos.x = (leftX + bottomRight.x) / 2;
				centerPos.y = (topY + bottomRight.y) / 2;
				centerPos.z = 0;
				
				for (var k=0;k<4;k++){
					center.push([centerPos.x, centerPos.y, centerPos.z]);
				}

				// debugger;

				counter+=.01;

				tempIndices.push([0+indiceCounter,1+indiceCounter,2+indiceCounter, 1+indiceCounter,2+indiceCounter,3+indiceCounter]);

				indiceCounter+=4;

			}
		}

		for (var tempI of tempIndices){
			for (var innerTempI of tempI){
				indices.push(innerTempI);
			}
			
		}

		// debugger;
		this.mesh = new Mesh(positions.length, indices.length, this.gl.TRIANGLES);
		this.mesh.bufferVertex(positions);
		// this.mesh.bufferTexCoords(coords);
		this.mesh.bufferIndices(indices);
		this.mesh.bufferData(extra, 'aExtra', 2);
		this.mesh.bufferData(center, 'aCenter',3);
	}

	resetCounter(){

		this.targetMove = 0;
		this.move = 0;

	}

	render(w,h, point) {

		
		// var moveV = (this.targetMove - this.move) * .0001;
		// this.move += Math.round(moveV * 100000) / 100000;

		this.transforms.push();

		var mvMatrix = this.transforms.getMvMatrix();

		mat4.scale(mvMatrix, mvMatrix, [w/h, 1.0, 1.0]);

		this.shader.bind();
			
		// this.shader.uniform("uOffsetTimestamp", "uniform1f", this.move);
		this.shader.uniform("uPoint", "uniform2fv", new Float32Array( [point.x, point.y] ));
		
		// this.shader.uniform("uTexture", "uniform1i", 0);
		// texturePos.bind(this.shader, 0);
		// texture.bind(this.shader, 0);
		this.draw(this.mesh);

		this.transforms.pop();
	}
}
