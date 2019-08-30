let posX = 0;
let posY = 0;
let playerImg;
let foodItem;
let awardChilliText500 = "You won 500 points!";
let awardText250 = "You won 250 points!";
// let lossWolfRed500 = "That's a beast! You lost 500 points!";
// let lossWolf300 = "Sorry, you lost 300 points!";
let gameOverText = "GAME OVER! You lost.";
let scoring = [];
let sum;
let total;

class Player {
    constructor(posX, posY, foodItem) {
        this.posX = posX;
        this.posY = posY;
        this.foodItem = foodItem;
        this.scoreResult = total;
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
            let distance =  dist(this.posX, this.posY, object.posX, object.posY);

            if (distance <= PLAYER_WIDTH) {
                fill(255);
                stroke(255);

                let score = 0;

                if (object.name === "chilli") {
                    // AwardingText
                    push();
                        textSize(30);
                        text(awardChilliText500, this.posX, this.posY - 160);
                        // Show award image on chilli collision
                        image(award1, this.posX, (this.posY - 120) % windowHeight);
                    pop();

                    // Scores on collision
                    push();
                        score += 500;
                    pop();
                    
                } else if (object.name) {
                    // AwardingText
                    push();
                        textSize(20);
                        text(awardText250, this.posX, this.posY - 100);
                    pop();

                    // Scores on collision
                    push();
                        score += 250;
                    pop();
                }
                
                for (let i = 0; i < scoring.length; i++) {
                    // Get last score score on collision
                    console.log(`SUM:`, sum = scoring[i-1]);

                    // Get total of sum 
                    console.log(`TOTAL:`, total = scoring.reduce((a, b) => a + b, 0));

                    // console.log(`END RESULT`, result = total - sum)
                }

                scoring.push(score);

                textSize(100);
                text(total, this.posX, this.posY - 160);
                // console.log(`SUM:`, sum);
                // console.log(`TOTAL:`, total);
            }
        });
    }

    checkCollisionWolf(objects) {
        // console.log(`OBJECT:`, objects);
        objects.forEach((object) => {
            // Check distance from objects to object
            let distance = dist(this.posX, this.posY, object.posX, object.posY);

            // console.log(`OBJECT WOLF`, object);
            // console.log(dist)

            if (distance <= PLAYER_WIDTH && distance <= PLAYER_HEIGHT) {
                fill(255);
                stroke(255);

                // @DEBUG console.log(`COLLISION WOLF`, object);

                if (object) {
                    textSize(100);
                    text(gameOverText, this.posX, this.posY - 70);
                } 
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
