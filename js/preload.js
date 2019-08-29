
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
let wolfImg;
let wolfImg2;
let foodArr;

function preload() {
    // Backgrounds
    bgImage1 = loadImage("assets/backgrounds/game_background_1.png");
    bgImage2 = loadImage("assets/backgrounds/Flat-Nature-Art.png");

    // TODO: Plane sprite
    plane1 = loadImage("assets/obstacles/plane/Fly1.png");
    plane2 = loadImage("assets/obstacles/plane/Fly2.png");
    plane3 = loadImage("assets/obstacles/plane/Shoot5.png");
    plane4 = loadImage("assets/obstacles/plane/Dead1.png");

    // TODO: Food sprite
    foodArr = [
        loadImage("assets/food/Apple.png"),
        loadImage("assets/food/Avocado.png"),
        loadImage("assets/food/Bacon.png"),
        loadImage("assets/food/Bread.png"),
        loadImage("assets/food/PepperRed.png")
    ];

    avocado = loadImage("assets/food/Avocado.png");
    chilli = loadImage("assets/food/PepperRed.png");

    // Obstacles
    wolfImg = loadImage("assets/obstacles/danger/wolf-blue.png");
    wolfImg2 = loadImage("assets/obstacles/danger/wolf-left.png");
    wolfImg3 = loadImage("assets/obstacles/danger/wolf-right.png");
}

