import * as THREE from 'three';
import Water from './objects/Water/Water';
const OrbitControls = require( 'three-orbit-controls' )( THREE );

export default class Webgl {
  constructor( width, height ) {
    this.params = {};

    this.width = width;
    this.height = height;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
    this.camera._type = 'perspective';

    // this.camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, -1000, 1000 );
    // this.camera._type = 'orthographic';

    this.camera.position.z = 100;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( width, height );
    this.renderer.setClearColor( 0x262626 );

    this.controls = new OrbitControls( this.camera );

    this.composer = null;

    this.water = new Water({
      height: this.height,
      width: this.width,
    });
    this.water.position.set( 0, 0, 0 );
    this.scene.add( this.water );
  }

  resize( width, height ) {

    this.height = height;
    this.width = width;

    if ( this.composer ) {
      this.composer.setSize( width, height );
    }

    if (this.camera._type === 'perspective') {

      this.camera.aspect = width / height;
    } else {

      this.camera.left = width / - 2;
      this.camera.right = width / 2;
      this.camera.top = height / 2;
      this.camera.bottom = height / - 2;
    }
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }

  render() {
    this.renderer.render( this.scene, this.camera );

    this.water.update();
  }
}
