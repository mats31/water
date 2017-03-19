uniform sampler2D u_wave;

varying vec2 vUv;

void main() {

  vUv = uv;

  vec4 texture = texture2D(u_wave, uv);

  vec3 newPosition = position;
  newPosition.z += texture.a * 5.;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
