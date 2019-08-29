class FoodItem {
    constructor(x, y, img) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = img;
    }

    draw() {
        image(this.image, this.x % windowWidth, this.y += 3, 30, 30);
    }
}
