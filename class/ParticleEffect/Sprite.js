// "default" permet de renommer la classe lorsqu'elle sera importée
export default class Sprite {
    // this = instance
    // self = la classe

    // Les {} dans la parenthèse du constructeur donne de la souplesse
    // de façon à ce qu'on puisse saisir les données (x, y, r ...) dans
    // le désordre. Le = {} dans la parenthèse permet de créer un cercle
    // sans indiquer les valeurs des différents paramètres
    constructor({src = "../../Images/helmet.png", x = 0, y = 0, width = 50, height = 50, color = 'pink', velX = 0, velY = 0 } = {}) { 
        this.src = src;
        this.image = new Image;
        this.image.src = this.src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.velX = velX;
        this.velY = velY;

        //this._x = x; --> Le _ empêche d'accéder à la propriété en dehors de l'objet
        // this.#r = r; --> Le # protège la donnée pour ne pas qu'elle change de valeur
    }

    setColor(color) {
        this.color = color;
    }

    setVelX(velX) {
        this.velX = velX;
    }

    draw(ctx) {
        // draw image
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    move(dt) {
        this.x += this.velX * dt;
        this.y += this.velY * dt;
    }

    bounceOffTheWalls(ctx) {
        let width = ctx.canvas.width;
        let height = ctx.canvas.height;

        if (this.x + this.width > width) {
          this.velX = -Math.abs(this.velX);
          this.x = width - this.width;
        }

        if (this.x < 0) {
          this.velX = +Math.abs(this.velX);
          this.x = 0;
        }

        if (this.y + this.height > height) {
          this.velY = -Math.abs(this.velY);
          this.y = height - this.height;
        }

        if (this.y < 0) {
          this.velY = +Math.abs(this.velY);
          this.y = 0;
        }  
    }
}