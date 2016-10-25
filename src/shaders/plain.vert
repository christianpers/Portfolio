precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec2 aExtra;
attribute vec3 aCenter;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform float uOffsetTimestamp;
uniform vec2 uPoint;

varying vec2 vTextureCoord;
varying float vExtra;
varying float vOffsetTimestamp;
varying float vDist;
varying float vPoint;
varying float vVertex;

void main(void) {

	vec3 newPos = aVertexPosition;
	
	float distance = sqrt(pow(uPoint.x - aCenter.x,2.0) + pow(uPoint.y - aCenter.y,2.0));
	float finalDist = max(.7 - distance, 0.0);

	newPos.z -= finalDist * 4.0;

	vDist = finalDist;
	// newPos.z += (aExtra.x * 10.0) * uOffsetTimestamp;
	// newPos
	gl_Position = uPMatrix * uMVMatrix * vec4(newPos, 1.0);
    // vTextureCoord = aTextureCoord;
    vExtra = aExtra.x;
    vPoint = uPoint.x;
    vVertex = aVertexPosition.z;

    // vOffsetTimestamp = uOffsetTimestamp;
}