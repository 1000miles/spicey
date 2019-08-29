let randomX;
let randomY;
let frame;
let wolf;
class Obstacle {
    constructor(posX,posY,frame,imagePath) {
        this.posX = posX;
        this.posY = posY;
        this.randomX = Math.floor(Math.random() * window.innerWidth);
        this.randomY = Math.floor(Math.random() * window.innerHeight / 2) + (window.innerHeight / 2); // Generate a random number only along the lower half of Y-axis
        this.frame = frame;
        this.wolfType = [];
        this.imagePath = imagePath;
    }

    draw() {
        // TODO: If frame count number is divisible by frame, generate random
        if (frameCount % this.frame === 0) {
            this.randomX = Math.floor(Math.random() * window.innerWidth);
            this.randomY = Math.floor(Math.random() * window.innerHeight / 2) + (window.innerHeight / 2);
            this.posX = this.randomX;
            this.posY = this.randomY;
        }

        image(this.imagePath, this.posX, this.posY, WOLF_WIDTH, WOLF_HEIGHT )
    }
}