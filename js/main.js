let game = new Game();

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("gameboard");
    game.player.setup();
    game.setup();
}

function draw() {
    clear();
    game.draw();
    keyPressed();
}

// ! Use arrow function to prevent returning `undefined`
const distance = (a,b) => {
    return Math.sqrt((a.posX - b.posX) ** 2 + (a.posY - b.posY) ** 2);
}

function keyPressed() {
    if (keyIsDown(RIGHT_ARROW)){
        // If player's posX is smaller than windowWidth and player-width, move right
        if (game.player.posX < innerWidth - PLAYER_WIDTH) game.player.posX += 10;
        game.player.playerImg = game.player.right;
    }
    if (keyIsDown(LEFT_ARROW)) {
        // If player's posX is bigger than 0, then player can move to left
        if (game.player.posX > 0) game.player.posX -= 10;
        game.player.playerImg = game.player.left;
    }
    if (keyIsDown(UP_ARROW)) {
        // If player's posY is bigger than 0, player can move up
        if (game.player.posY > 0) game.player.posY -= 10;
        game.player.playerImg = game.player.up;
    }
    if (keyIsDown(DOWN_ARROW)) {
        // If player's posY is smaller than windowHeight and player-height, player can move down
        if (game.player.posY < innerHeight - PLAYER_HEIGHT) game.player.posY += 10;
        game.player.playerImg = game.player.down;
    }
}

// Prevent browser from moving based on nav keys down
window.addEventListener("keydown", function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
