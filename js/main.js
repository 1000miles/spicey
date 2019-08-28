let game = new Game(); // Instantiate game

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("gameboard"); // id => get parentNode for DOM manipulation
}

function draw() {
    game.draw();
}
