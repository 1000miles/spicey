
// GLOBAL VARIABLES

// Backgrounds
let bgImage1;

// Players
let player1;
let player1x; // TODO
let player1y; // TODO

// Obstacles
let plane1;
let plane2;
let plane3;
let plane4;

function preload() {
    // Backgrounds
    bgImage1 = loadImage("assets/backgrounds/game_background_1.png");

    // Players
    player1 = loadImage("assets/player2/spr_m_pjnerd2.png");

    // Obstacles
    plane1 = loadImage("assets/obstacles/plane/Fly1.png");
    plane2 = loadImage("assets/obstacles/plane/Fly2.png");
    plane3 = loadImage("assets/obstacles/plane/Shoot5.png");
    plane4 = loadImage("assets/obstacles/plane/Dead1.png");

    // TODO: Food sprite
    foodArr = [
        "assets/food/Apple.png",
        "assets/food/AppleWorm.png",
        "assets/food/Avocado.png",
        "assets/food/Bacon.png",
        "assets/food/Beer.png",
        "assets/food/Bread.png"
    ];
}

