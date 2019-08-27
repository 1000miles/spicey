let game = new Game();

function setup() {
    createCanvas(windowWidth, windowHeight);
    game.setup();
    // angleMode(DEGREES);
}

function draw() {
    game.draw();
}