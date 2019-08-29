class Obstacle {
    constructor(posX,posY,frame) {
        this.posX = posX;
        this.posY = posY;
        this.foods= [];
        this.frame = frame;
        this.wolves = [];
    }

    draw() {
        // // Load Obstacles
        // // image(src, xPos, yPos, width, height)
        // image(plane1, (this.posX+=1) % windowWidth, this.posY, 100, 75);
        // image(wolfBlue, (this.posX += 1) % windowWidth, this.posY, 50, 50);

        // if (frameCount % this.frame === 0) {
        //     this.foods.push(new FoodItem(this.posX, this.posY + 75, chilli));
        // }

        // if (this.foods.length > 10) this.foods.shift();
        
        // this.foods.forEach(food => food.draw());
    }
}