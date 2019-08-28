
// GLOBAL VARIABLES

// Backgrounds
let bgImage1;

// Help
let plane1;
let plane2;
let plane3;
let plane4;

// Obstacles
let wolfBlue;

// Food
let avocado;

function preload() {
    // Backgrounds
    bgImage1 = loadImage("assets/backgrounds/game_background_1.png");

    // TODO: Plane sprite
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

    avocado = loadImage("assets/food/Avocado.png");
    chilli = loadImage("assets/food/PepperRed.png");

    // TODO: Obstacles sprite
    wolfBlue = loadImage("assets/obstacles/danger/wolf-blue.png");
}

