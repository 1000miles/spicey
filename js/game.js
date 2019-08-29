class Game {
    constructor() {
        this.player = new Player(10, window.innerHeight - PLAYER_HEIGHT - 30);
        this.food = new Food(100, 100,100);
        this.wolves = [];
    }
    
    setup(){
         wolvesArr.forEach((wolf, i) => {
             let newWolf = new Obstacle(WOLF_WIDTH, WOLF_HEIGHT, 300, wolf.img);
             this.wolves.push(newWolf)
         });
    }

    draw() {
        clear();
        // Adopt canvas to user's window width and window height
        image(bgImage1, 0, 0, windowWidth, windowHeight);
        
        this.player.draw();

        if(this.food.foods.length){
            this.player.checkCollision(this.food.foods);
        }
        // Draw each wolf from the wolves array
        this.wolves.forEach(wolf => wolf.draw())
        this.food.draw();
    }
}
