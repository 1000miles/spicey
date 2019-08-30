class FoodItem {
    constructor(posX, posY, img) {
        this.posX = posX % windowWidth;
        this.posY = posY;
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
