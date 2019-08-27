let game = new Game();

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("gameboard"); // id
}

function draw() {
    game.draw();
}