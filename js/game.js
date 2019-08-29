class Game {
    constructor() {
        // TODO: Instantiate a new player
        this.player = new Player(10, window.innerHeight - PLAYER_HEIGHT - 30);
        // TODO: Instantiate a new obstacle
        this.food = new Food(100, 100,100);
        this.wolf = new Obstacle(WOLF_WIDTH, WOLF_HEIGHT, 100);
    }
    
    draw() {
        clear();
        // TODO: Load Background Image in full size
        image(bgImage1, 0, 0, windowWidth, windowHeight);
        
        this.player.draw();
        this.food.draw();
        this.wolf.draw();
        
    }
}
