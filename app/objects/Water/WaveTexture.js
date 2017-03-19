export default class Wave {
  constructor(opts) {

    this.height = 256;
    this.width = 256;
    this.radius = this.width / 2;
    this.ease = 0;

    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.context = this.canvas.getContext('2d');
    this.context.strokeStyle = 'white';
    this.context.lineWidth = 5;
    this.context.shadowColor = 'white';
    this.context.shadowBlur = 10;

    // Debug
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0px';
    this.canvas.style.left = '0px';
    document.body.appendChild(this.canvas);
  }

  getCanvas() {

    return this.canvas;
  }

  draw() {

    this.ease += 0.005;

    if (this.ease >= 1) { this.ease = 0; }

    const currentRadius = this.ease * this.radius;
    const x = this.width * 0.5;
    const y = this.height * 0.5;

    this.context.clearRect( 0, 0, this.width, this.height );

    this.context.beginPath();
    this.context.arc( x, y, currentRadius, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.closePath();
  }
}
