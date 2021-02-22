import Bird from "./bird.js";
import Level from "./level.js";

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }

  animate() {
    debugger
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
    const that = this;
    if (this.running) requestAnimationFrame(this.animate.bind(that));
  }

  restart() {
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    // this.running=false;
    this.animate();
    this.play();
  }

  play() {
    this.running = true;
    this.animate();
  }
}
