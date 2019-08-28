let game = new Game(); // Instantiate game

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("gameboard"); // id => get parentNode for DOM manipulation
}

function draw() {
    game.draw();

    keyPressed(); // call the keyPressed function
}

function keyPressed() {
    if (keyIsDown(RIGHT_ARROW)){
        game.player.posX += 1;
    }
    if (keyIsDown(LEFT_ARROW)) {
        game.player.posX -= 1;
    }
    if (keyIsDown(UP_ARROW)) {
        game.player.posY -= 1;
    }
    if (keyIsDown(DOWN_ARROW)) {
        game.player.posY += 1;
    }
}