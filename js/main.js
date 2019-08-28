let game = new Game(); // Instantiate game

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("gameboard"); // id => get parentNode for DOM manipulation
    game.player.setup();
}

function draw() {
    game.draw();
    keyPressed(); // call the keyPressed function
}

function keyPressed() {
    // console.log(game.player.playerImg);

    if (keyIsDown(RIGHT_ARROW)){
        game.player.posX += 1;
        game.player.playerImg = game.player.right;
    }
    if (keyIsDown(LEFT_ARROW)) {
        game.player.posX -= 1;
        game.player.playerImg = game.player.left;
    }
    if (keyIsDown(UP_ARROW)) {
        game.player.posY -= 1;
        game.player.playerImg = game.player.up;
    }
    if (keyIsDown(DOWN_ARROW)) {
        game.player.posY += 1;
        game.player.playerImg = game.player.down;
    }
}