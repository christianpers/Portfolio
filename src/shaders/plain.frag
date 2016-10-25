precision highp float;

uniform sampler2D uTexture;
// uniform float uOffsetTimestamp;

varying vec2 vTextureCoord;
varying float vExtra;
varying float vOffsetTimestamp;
varying float vDist;
varying float vPoint;
varying float vVertex;

void main(void) {



   

    // float finalColor = smoothstep(0.0, .5, vDist);
   
    float modifier = abs(vPoint);
    gl_FragColor = vec4(vDist*(max(vVertex, 7.0)/10.0), vDist*max(abs(vVertex), .8), vDist*.7, 1.0);
}