// "default" permet de renommer la classe lorsqu'elle sera importée
export default class Sprite {
    // this = instance
    // self = la classe

    // Les {} dans la parenthèse du constructeur donne de la souplesse
    // de façon à ce qu'on puisse saisir les données (x, y, r ...) dans
    // le désordre. Le = {} dans la parenthèse permet de créer un cercle
    // sans indiquer les valeurs des différents paramètres
    constructor({src = "../../Images/helmet.png", x = 0, y = 0, width = 50, height = 50} = {}) { 
        this.src = src;
        this.image = new Image;
        this.image.src = this.src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        //this._x = x; --> Le _ empêche d'accéder à la propriété en dehors de l'objet
        // this.#r = r; --> Le # protège la donnée pour ne pas qu'elle change de valeur
    }

    draw(ctx, canvasWidth, canvasHeight) {
        // draw image
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      
        // set composite mode
        ctx.globalCompositeOperation = "source-in";
      
        // draw color
        ctx.fillStyle = "#09f";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        // reset comp. mode
        ctx.globalCompositeOperation = "source-over";
    }
       
}