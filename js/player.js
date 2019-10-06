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
let total= 0;

class Player {
    constructor(posX, posY, foodItem) {
        this.posX = posX;
        this.posY = posY;
        this.foodItem = foodItem;
        this.total = total;
        this.displayScore = false
    }

    setup(){
        this.down = loadImage("assets/player1/idle.png");
        this.up = loadImage("assets/player1/jump.png");
        this.right = loadImage("assets/player1/run.png");
        this.left = loadImage("assets/player1/landing.png");
        this.playerImg = this.down;
    }

    checkCollision(objects) {
        objects.forEach((object,i) => {
            // Check distance from objects to object
            let distance =  dist(this.posX, this.posY, object.posX, object.posY);

            if (distance <= PLAYER_WIDTH) {
                fill(255);
                stroke(255);

                let score = 0;

                if (object.name === "chilli") {
                    // Scores on collision
                    score += 500;

                    game.food.foods.splice(i, 1);

                    this.displayScore = true;

                    setTimeout(() => {
                    this.displayScore = false;

                    }, 2000);

                } else if (object.name) {
                    // AwardingText
                    textSize(50);
                    text(awardText250, this.posX, this.posY - 100);

                    // Scores on collision
                    score += 250;

                }

                for (let i = 0; i < scoring.length; i++) {
                    // Get last score on collision
                    console.log(`SUM:`, sum = scoring[i - 1]);

                    // Get total of sum
                    console.log(`TOTAL:`, total = scoring.reduce((a, b) => a + b, 0));
                }

                scoring.push(score);
            }
        });
    }

    checkCollisionWolf(objects) {
        // console.log(`OBJECT:`, objects);
        objects.forEach((object) => {
            // Check distance from objects to object
            let distance = dist(this.posX, this.posY, object.posX, object.posY);
            // console.log(distance,this.posX,this.posY,object.posX, object.posY);

            if (distance <= PLAYER_WIDTH) {
                console.log("crash")
                fill(255);
                stroke(255);

                if (object) {
                    textSize(50);
                    text(gameOverText, this.posX, this.posY - 20);
                }
            }
        });
    }

    draw() {
        textSize(100);
        fill('black');
        text(total, 100, 100 );

        if(this.displayScore){
             textSize(70);
             text(awardChilliText500, this.posX, this.posY - 60);
             // Show award image on chilli collision
             image(award1, this.posX, (this.posY - 80) % windowHeight);

        }
        // Load the players images
        // Syntax: image(src, posX % windowWidth, posY % windoHeight, width, height)
        image(this.playerImg, this.posX, this.posY - 80, PLAYER_WIDTH, PLAYER_HEIGHT);

    }
}
