let randomX;
let randomY;
let frame;
let wolf;
class Obstacle {
    constructor(posX, posY, frame, imagePath) {
        this.posX = posX;
        this.posY = posY;
        this.randomX = Math.floor(Math.random() * window.innerWidth);
        this.randomY = Math.floor(Math.random() * window.innerHeight / 2);
        this.frame = frame;
        this.wolfType = [];
        this.imagePath = imagePath;
    }

    draw() {
        // TODO: If frame count number is divisible by frame, generate random
        if (frameCount % this.frame === 0) {
            this.randomX = Math.floor(Math.random() * window.innerWidth);
            this.randomY =random(500,window.innerHeight);
            this.posX = this.randomX;
            this.posY = this.randomY;
        }

        // Wolves should only appear on the lower half of Y-Axis (+ window.innerHeight / 2)
        image(this.imagePath, this.posX, this.posY , WOLF_WIDTH, WOLF_HEIGHT);
    }
}
