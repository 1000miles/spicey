let posX = 0;
let posY = 0;
let playerImg;

class Player {
    constructor(x, y) {
        this.posX = x;
        this.posY = y;
    }
    setup(){
        this.down =loadImage("assets/player1/idle.png");
        this.up =loadImage("assets/player1/jump.png");
        this.right =loadImage("assets/player1/run.png");
        this.left =loadImage("assets/player1/landing.png");
        this.playerImg = this.down;
    }
    checkCollision(objects) {
        objects.forEach((object) => {
            // TODO: Check distance from objects to object
            let dist =  distance(this , object);

            if (dist <= PLAYER_WIDTH){
                text("CONGRATS! YOU WON POINTS!", this.posY - 50);
                image(award1, this.posX, (this.posY - 30) % windowHeight);
            }
        });
    }
    draw() {
        push();
            // TODO: Load the players
            // Syntax: image(src, posX % windowWidth, posY % windoHeight, width, height)
            image(this.playerImg, this.posX, this.posY, PLAYER_WIDTH, PLAYER_HEIGHT);
        pop();
    } 
}
