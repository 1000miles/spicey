class FoodItem {
    constructor(x, y, img) {
        // this.width = width;
        // this.height = height;
        this.x = x;
        this.y = y;
        this.image = img;
    }

    setup() {

    }

    draw() {
        console.log(this.image.width)
        this.y +=  3
        image(this.image, this.x /*% windowWidth*/, this.y, 30, 30);
    }
}
