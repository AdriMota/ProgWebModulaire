import Circle from "../Circle.js";

export default class InFlatTorus extends Circle {
    constructor({x = 0, y = 0, r = 100, color = 'red', speed = 0.01, colorBorder = 'white', width, height} = {}) {
        super({x, y, r, color, speed, colorBorder });
        this.width = width;
        this.height = height;
    }

    move(deltaT, direction) {
        super.move(deltaT, direction);

        if(this.x - this.r > this.width) {
            this.x = 0 - this.r;
        } else if(this.x < 0 - this.r) {
            this.x = this.width + this.r;
        }

        if (this.y - this.r > this.height) {
            this.y = 0 - this.r;
        } else if (this.y < 0 - this.r) {
            this.y = this.height + this.r;
        }
    }
}