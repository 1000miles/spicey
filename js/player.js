let playerObj = 0;

class Player {
    constructor(x, y) { 
        this.x = x;
        this.y = y;
    }

    draw() {
        // Load the players
        // Player 1 starts at width 0 and moves xPosition += 1
        image(player1, (playerObj += 1) % windowWidth, PLAYER_WIDTH, PLAYER_HEIGHT);
        image(player1, (playerObj += 1) % windowWidth, (playerObj) % windowHeight, PLAYER_WIDTH, PLAYER_HEIGHT);
        image(player1, (playerObj += 2) % windowWidth, (playerObj += 1) % windowHeight, PLAYER_WIDTH, PLAYER_HEIGHT);
    }
}