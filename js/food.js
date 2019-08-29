class Food {
    constructor(posX,posY,frame, foodItem) {
        this.posX = posX;
        this.posY = posY;
        this.foods= [];
        this.frame = frame;
        this.foodItem = foodItem;
    }
    

    draw() {
        console.log(this.foodItem)
        // Load Food Delivery by plane
        // image(src, xPos, yPos, width, height)
        image(plane1, (this.posX += 1) % windowWidth, this.posY, 100, 75);

        // TODO: Loop though food array and print food item
        foodArr.forEach( item => { this.foodItem = item } );

        //  console.log(`FOOD INDEX:`, this.foodItem);

        if (frameCount % this.frame === 0) {
            this.foods.push(new FoodItem(this.posX, this.posY + 75, this.foodItem));
        }

        if (this.foods.length > 10) this.foods.shift();

        this.foods.forEach(food => food.draw());
    }
}