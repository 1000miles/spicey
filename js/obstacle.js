let randomX;
let randomY;

class Obstacle {
    constructor(posX,posY,frame) {
        this.posX = posX;
        this.posY = posY;
        this.randomX = Math.random() * this.posX;
        this.randomY = Math.random() * this.posY;;
        this.frame = frame;
        this.wolves = [];
    }

    draw() {
        // console.log(image(wolfBlue,this.randomX % windowWidth, this.randomY % windowHeight, 50, 50));
        image(wolfImg, this.randomX % windowWidth, this.randomY % windowHeight, 50, 50);
    }
}