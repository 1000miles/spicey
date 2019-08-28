let posX = 0;
let posY = 0;
// let playerImg;

class Player {
    constructor(posX, posY) { 
        this.posX = posX;
        this.posY = posY;
    }
    setup(){
        this.down =loadImage("assets/player1/idle.png");
        this.up =loadImage("assets/player1/jump.png");
        this.right =loadImage("assets/player1/run.png");
        this.left =loadImage("assets/player1/landing.png");
        this.playerImg = this.down;
    }

    draw() {
        push();
            // TODO: Load the players
            // Syntax: image(src, posX % windowWidth, posY % windoHeight, width, height)
            // TODO: Player 1 starts at left bottom
            image(this.playerImg, this.posX, this.posY, PLAYER_WIDTH, PLAYER_HEIGHT);
        pop();
    } 
}
