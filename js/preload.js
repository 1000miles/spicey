let foodArr;
let bgImage1;

function preload() {
    bgImage1 = loadImage("assets/backgrounds/game_background_1.png");

    foodArr = [
        "assets/food/Apple.png",
        "assets/food/AppleWorm.png",
        "assets/food/Avocado.png",
        "assets/food/Bacon.png",
        "assets/food/Beer.png",
        "assets/food/Bread.png"
    ];

    // ! @FIX Not showing
    foodArr.map(image => { loadAnimation(image) });

    playerAnimation = {
        // TODO: Load player images
    }
}

