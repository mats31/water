uniform sampler2D u_wave;

varying vec2 vUv;

void main() {

  vec4 texture = texture2D(u_wave, vUv);

  // vec3 color = mix( vec3(0.5), vec3(1.), texture.a );
  vec3 color = mix( vec3(1.), vec3(0.75), texture.a );
  // vec3 color = texture.rgb;

  float alpha = 1.;
  // float alpha = texture.a;

  gl_FragColor = vec4(color, alpha);
}
