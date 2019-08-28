let game = new Game(); // Instantiate game

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("gameboard"); // id => get parentNode for DOM manipulation
    game.player.setup();
}

function draw() {
    game.draw();
    keyPressed(); // call the keyPressed function
    // @DEBUG console.log(game.player.posY, innerHeight);
}

function keyPressed() {
    // @DEBUG: console.log(game.player.playerImg);

    if (keyIsDown(RIGHT_ARROW)){
        // TODO: If player's posX is smaller than windowWidth and player-width, move right
        if (game.player.posX < innerWidth - PLAYER_WIDTH) game.player.posX += 3;
        game.player.playerImg = game.player.right;
    }
    if (keyIsDown(LEFT_ARROW)) {
        // TODO: If player's posX is bigger than 0, then player can move to left
        if (game.player.posX > 0) game.player.posX -= 3;
        game.player.playerImg = game.player.left;
    }
    if (keyIsDown(UP_ARROW)) {
        // TODO: If player's posY is bigger than 0, player can move up
        if (game.player.posY > 0) game.player.posY -= 3;
        game.player.playerImg = game.player.up;
    }
    if (keyIsDown(DOWN_ARROW)) {
        // TODO: If player's posY is smaller than windowHeight and player-height, player can move down
        if (game.player.posY < innerHeight - PLAYER_HEIGHT) game.player.posY += 3;
        game.player.playerImg = game.player.down;
    }
}