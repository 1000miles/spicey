let playerObj = 0;
let posX = 0;
let posY = 0; // TODO: start at the bottom of window

class Player {
    constructor(posX, posY) { 
        this.posX = posX;
        this.posY = posY;
    }

    draw() {

        push();
        // TODO: Load the players
        // Syntax: image(src, posXPosition % windowWidth)

        // TODO: Player 1 starts at left bottom
            image(player1, this.posX, this.posY , PLAYER_WIDTH, PLAYER_HEIGHT);
            keyPressed();
        pop();
    } 
}