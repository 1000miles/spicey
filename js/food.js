class Food {
    constructor(posX,posY,frame) {
        this.posX = posX;
        this.posY = posY;
        this.foods= [];
        this.frame = frame;
        this.foodItem = [];
    }

    draw() {
        // @DEBUG console.log(this.foodItem)

        // Load Food Delivery by plane
        // image(src, xPos, yPos, width, height)
        this.posX += 4;
        image(plane1, this.posX % windowWidth, this.posY, 100, 75);
        // image(plane2, (this.posX + 150) % windowWidth, this.posY + 150, 100, 75);

        // TODO: Loop though food array and print food item
        foodArr.forEach( item => { this.foodItem.push(item) } );

        if (frameCount % this.frame === 0) {
            this.foods.push(new FoodItem(this.posX, this.posY + 75, this.foodItem[Math.floor(Math.random()*this.foodItem.length)]));
        }

        // TODO: For every item index bigger than 10 take out first item
        if (this.foods.length > 10) this.foods.shift();

        // TODO: Loop through foods array and draw each item
        this.foods.forEach(food => food.draw());
    }
}