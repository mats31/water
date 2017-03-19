import * as THREE from 'three';
import WaveTexture from './WaveTexture';
const glsl = require('glslify');

export default class Water extends THREE.Object3D {
  constructor(opts) {
    super();

    this.wave = new WaveTexture({
      width: opts.width,
      height: opts.height,
    });

    this.waveMap = new THREE.Texture( this.wave.getCanvas() );

    this.geometry = new THREE.PlaneBufferGeometry( 100, 100, 200, 200 );
    this.material = new THREE.ShaderMaterial({
      transparent: true,
      // wireframe: true,
      uniforms: {
        u_wave: { type: 't', value: this.waveMap },
      },
      vertexShader: glsl.file('./shaders/waterVertex.glsl'),
      fragmentShader: glsl.file('./shaders/waterFragment.glsl'),
    });

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    // this.mesh.rotation.x = -1;

    this.add( this.mesh );
  }

  update() {

    this.wave.draw();
    this.waveMap.needsUpdate = true;
  }
}
