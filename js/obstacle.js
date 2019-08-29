let randomX;
let randomY;
let frame;

class Obstacle {
    constructor(posX,posY,frame) {
        this.posX = posX;
        this.posY = posY;
        this.randomX = Math.floor(Math.random() * window.innerWidth);
        this.randomY = Math.floor(Math.random() * window.innerHeight / 2) + (window.innerHeight / 2); // Generate a random number only along the lower half of Y-axis
        this.frame = frame;
        this.wolves = [];
    }

    draw() {
        // TODO: If frame count number is divisible by frame, generate random
        if (frameCount % this.frame === 0) {
            this.randomX = Math.floor(Math.random() * window.innerWidth);
            this.randomY = Math.floor(Math.random() * window.innerHeight / 2) + (window.innerHeight / 2);
        }
        image(wolfImg, this.randomX, this.randomY, 50, 50);
    }
}