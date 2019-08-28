let flightObj = 0;

class Obstacle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        // Load Obstacles
        push();
            // image(src, xPos, yPos, width, height)
            // image(plane1, (flightObj += 1) % windowWidth, 50, 37.50, 25);
            // image(plane2, (flightObj += 1) % windowWidth, 75, 37.5, 25);
            image(plane3, (flightObj += 1) % windowWidth, 100, 75, 50);
            image(plane4, (flightObj += 1) % windowWidth, 175, 100, 75);
        pop();
    }
}