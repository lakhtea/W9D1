const CONSTANTS = {
    GRAVITY: 0.8,
    FLAP_SPEED: -8,
    TERMINAL_VEL: 12,
    BIRD_WIDTH: 40,
    BIRD_HEIGHT: 30
};

export default class Bird {

    constructor (dimensions){
        this.velocity =0;
        this.cx = dimensions.width;
        this.cy = dimensions.height;
        this.x = Math.floor(this.cx/3);
        this.y = Math.floor(this.cy/2);

    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
        ctx.fill();
    }
    animate(ctx) {
        this.move();
        this.drawBird(ctx);
    }
    
    move () {
        this.y += this.velocity;
        this.velocity += CONSTANTS.GRAVITY;
    }

    flap () {
        this.velocity = CONSTANTS.FLAP_SPEED;
    }

}