let posX = 0;
let posY = 0;
let playerImg;
let foodItem;
let awardChilliText500 = "You won 500 points!";
let awardText250 = "You won 250 points!";
let lossWolfRed500 = "That's a beast! You lost 500 points!";
let lossWolf300 = "Sorry, you lost 300 points!";

class Player {
    constructor(posX, posY, foodItem) {
        this.posX = posX;
        this.posY = posY;
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
            // Check distance from objects to object
            let dist =  distance(this , object);

            if (dist <= PLAYER_WIDTH && dist <= PLAYER_HEIGHT){
                fill(255);
                stroke(255);

                if (object.name === "chilli") {
                    textSize(30);
                    text(awardChilliText500, this.posX, this.posY - 160);
                    // Show award image on chilli collision
                    image(award1, this.posX, (this.posY - 120) % windowHeight);
                } else if (object.name) {
                    textSize(20);
                    text(awardText250, this.posX, this.posY - 100);
                }
            }
        });
    }

    checkCollisionWolf(objects) {
        // console.log(`OBJECT:`, objects);
        objects.forEach((object) => {
            // Check distance from objects to object
            let dist = distance(this, object);

            // console.log(`OBJECT WOLF`, object);
            // console.log(dist)

            if (dist <= PLAYER_WIDTH) {
                fill(255);
                stroke(255);

                // @DEBUG console.log(`COLLISION WOLF`, object);

                if (object) {
                    textSize(30);
                    text(lossWolfRed500, this.posX, this.posY - 70);
                } else {
                    textSize(20);
                    text(lossWolf300, this.posX, this.posY - 70);
                }
                // Show award image above player's Y-axis
                image(award1, this.posX, (this.posY - 30) % windowHeight);
            }
        });
    }

    draw() {
        push();
            // Load the players images
            // Syntax: image(src, posX % windowWidth, posY % windoHeight, width, height)
            image(this.playerImg, this.posX, this.posY - 80, PLAYER_WIDTH, PLAYER_HEIGHT);
        pop();
    } 
}
