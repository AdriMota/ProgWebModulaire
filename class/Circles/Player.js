import Circle from "../Circle.js";

export default class Player extends Circle {
    constructor({x = 0, y = 0, r = 100, direction = 0, speed = 0.1, color = 'red', colorBorder = 'white'} = {}) {
        super({x, y, r, color, colorBorder});
        this.direction = direction;
        this.speed = speed;
    }

    draw(ctx) {
        super.draw(ctx);
        // Démarrer le path 2d (chemin 2D)
        ctx.beginPath();

        // Indiquer la couleur du cercle
        ctx.strokeStyle = this.colorBorder;

        // Dessiner le cercle
        ctx.moveTo(this.x, this.y);

        //const distX = 2 * this.r * Math.cos(this.direction);
        //const distY = 2 * this.r * Math.sin(this.direction);

        //ctx.lineTo(this.x + distX, this.y + distY);

        // Arrêter le path 2d
        ctx.closePath();

        // Bordure
        ctx.stroke();
    }

    turn(dt, rotation) {
        this.direction += dt * rotation;
    }

    thrust(dt, factor) {
        this.speed += dt * factor;
    }

    friction(dt, factor) {
        this.speed *= dt/1000 * factor;
    }

    move(dt) {
        const distX = this.speed * dt * Math.cos(this.direction);
        const distY = this.speed * dt * Math.sin(this.direction);
        this.x += distX;
        this.y += distY;
    }
}