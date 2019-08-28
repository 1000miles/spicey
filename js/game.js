class Game {
    constructor() {
        // TODO: Instantiate a new player
        this.player = new Player(10, window.innerHeight - PLAYER_HEIGHT - 30);
        // TODO: Instantiate a new obstacle
        this.obstacle = new Obstacle(100, 100,100);
    }
    
    draw() {
        clear();
        // TODO: Load Background Image in full size
        image(bgImage1, 0, 0, windowWidth, windowHeight);
        
        this.player.draw();
        this.obstacle.draw();
        
    }
}
