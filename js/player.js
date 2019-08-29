let posX = 0;
let posY = 0;
let playerImg;
let foodItem;

class Player {
    constructor(x, y, foodItem) {
        this.posX = x;
        this.posY = y;
        this.foodItem = foodItem;
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
                console.log(`FOOD ITEM:`, object);

                let feedbackText = "You won 500 points!";

                textSize(32);
                fill(255);
                text(feedbackText, this.posX, this.posY - 70);
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
