uniform float uTime;
uniform sampler2D uPositions;

varying vec2 vUv;
varying vec3 vPosition;

void main()
{
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}