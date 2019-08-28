let playerObj = 0;
let posX = 30;
let posY = 900; // TODO: start at the bottom of window

class Player {
    constructor(posX, posY) { 
        this.posX = posX;
        this.posY = posY;
    }

    move() {
        switch(keyCode) {
            case (keyCode === LEFT_ARROW):
                posX -= 5; // move left
                break;
            case (keyCode === RIGHT_ARROW):
                posX +- 5; // move right
                break;
            case (keyCode === UP_ARROW):
                posY -= 5; // move up
                break;
            case (keyCode === DOWN_ARROW):
                posY += 5;
                break;
            default: 
                console.log('Please use the arrow navigation.');
        }

    }

    keposYPressed() {
        this.move();
    }

    draw() {
        // TODO: Load the players

        // PlaposYer 1 falls down 
        // image(src, posXPosition % windowWidth)
        // image(player1, 0 % windowWidth, (player1.posY += 1) % windowHeight, PLAYER_WIDTH, PLAYER_HEIGHT);

        // TODO: Player 1 starts at left bottom
        push();
            imageMode(CENTER);
            image(player1, windowWidth / 2, windowHeight / 2, PLAYER_WIDTH, PLAYER_HEIGHT);
        pop();
    } 
}