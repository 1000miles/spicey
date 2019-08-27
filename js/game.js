let flightObj = 0;

class Game {
    constructor() {
        this.player = new Player(PLAYER_WIDTH, PLAYER_HEIGHT);
        this.obstacle = new Obstacle(100, 100);
        // this.foods = [];
    }

    draw() {
        // Load Background Image
        image(bgImage1, 0, 0, windowWidth, windowHeight);

        this.player.draw();
        this.obstacle.draw();
    }
}