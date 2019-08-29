class FoodItem {
    constructor(x, y, img) {
        this.posX = x;
        this.posY = y;
        this.image = img;
    }

    setup() {

    }

    draw() {
        // TODO: Draw food image but stay within window width, let food move by +3
        image(this.image, this.posX % windowWidth, this.posY += 3, 30, 30);
    }
}
