class Game {
    constructor() {
        this.player = new Player(PLAYER_WIDTH, PLAYER_HEIGHT);
        this.foods = [];
    }

    setup() {
        this.player.setup();
    }

    draw() {
        // Load Background Image
        image(bgImage1, 0, 0, windowWidth, windowHeight);

        this.player.draw();

        // if (frameCount % 300 === 0) {
        //     foodArr.forEach((animation, i) => {
        //         if (Math.random() < 0.5) {
        //             let newFood = new Food(i * 100 + 100, -20, animation);
        //             newFood.setup();
        //             this.foods.push(newFood);
        //         }
        //     });
        // }
    }
}