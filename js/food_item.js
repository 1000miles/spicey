class FoodItem {
    constructor(x, y, img) {
        this.posX = x % windowWidth;
        this.posY = y;
        this.image = img.img;
        this.name = img.name;
    }

    setup() {

    }

    draw() {
        // TODO: Draw food image but stay within window width, let food move by +3
        image(this.image, this.posX, this.posY += 3, 30, 30);
    }
}
