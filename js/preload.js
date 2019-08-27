let bgImage1;
let player1;
let plane1;
let plane4;

function preload() {
    // Backgrounds
    bgImage1 = loadImage("assets/backgrounds/game_background_1.png");

    // Players
    player1 = loadImage("assets/player2/spr_m_pjnerd2.png");

    // Obstacles
    plane1 = loadImage("assets/obstacles/plane/Fly1.png");
    plane4 = loadImage("assets/obstacles/plane/Dead1.png");

    // Food
    foodArr = [
        "assets/food/Apple.png",
        "assets/food/AppleWorm.png",
        "assets/food/Avocado.png",
        "assets/food/Bacon.png",
        "assets/food/Beer.png",
        "assets/food/Bread.png"
    ];
}

