class Game {
    constructor() {
        // Make sure player always starts at the same point (left bottom)
        this.player = new Player(10, window.innerHeight - PLAYER_HEIGHT - 30);
        this.obstacle = new Obstacle(100, 100);
        // this.foods = [];
    }

    draw() {
        clear();
        // TODO: Load Background Image in full size
        image(bgImage1, 0, 0, windowWidth, windowHeight);

        this.player.draw();
        this.obstacle.draw();
    }
}
