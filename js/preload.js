
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
let foodArr;
let wolvesArr;

function preload() {

    // Backgrounds
    bgImage1 = loadImage("assets/backgrounds/game_background_1.png");
    // bgImage2 = loadImage("assets/backgrounds/Flat-Nature-Art.png");

    // Plane sprite
    plane1 = loadImage("assets/obstacles/plane/Fly1.png");
    plane2 = loadImage("assets/obstacles/plane/Fly2.png");
    // plane3 = loadImage("assets/obstacles/plane/Shoot5.png");
    // plane4 = loadImage("assets/obstacles/plane/Dead1.png");

    // Food sprite
    foodArr = [
        {
            img: loadImage("assets/food/Apple.png"),
            name: 'apple'

        },
        {
            img: loadImage("assets/food/Avocado.png"),
            name: 'avocado'

        },
        {
            img: loadImage("assets/food/PepperRed.png"),
            name: 'chilli'

        },
        {
            img: loadImage("assets/food/Chicken.png"),
            name: 'chicken'

        },
        {
            img: loadImage("assets/food/Bread.png"),
            name: 'bread'

        },
        {
            img: loadImage("assets/food/PepperRed.png"),
            name: 'chilli'

        },
        {
            img: loadImage("assets/food/Eggs.png"),
            name: 'eggs'

        },
        {
            img: loadImage("assets/food/PepperRed.png"),
            name: 'chilli'

        },
        {
            img: loadImage("assets/food/Fish.png"),
            name: 'fish'
        },
        {
            img: loadImage("assets/food/Lemon.png"),
            name: 'lemon'
        }

    ];

    // Obstacles

    wolvesArr = [
        {
            img: loadImage("assets/obstacles/danger/wolf-blue.png"),
            name: "wolfBlue"
        },
        {
            img: loadImage("assets/obstacles/danger/wolf-red.png"),
            name: "wolfRed"
        },
        {
            img: loadImage("assets/obstacles/danger/wolf-white.png"),
            name: "wolfWhite"
        },
    ];

    // Images on collision
    award1 = loadImage("assets/obstacles/danger/estrelectra.png");
}

