// "default" permet de renommer la classe lorsqu'elle sera importée
export default class Circle {
    // this = instance
    // self = la classe

    // Les {} dans la parenthèse du constructeur donne de la souplesse
    // de façon à ce qu'on puisse saisir les données (x, y, r ...) dans
    // le désordre. Le = {} dans la parenthèse permet de créer un cercle
    // sans indiquer les valeurs des différents paramètres
    constructor({x = 0, y = 0, r = 100, color = 'red', speed = 0.01, colorBorder = 'white'} = {}) { 
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.speed = speed;
        this.colorBorder = colorBorder;

        //this._x = x; --> Le _ empêche d'accéder à la propriété en dehors de l'objet
        // this.#r = r; --> Le # protège la donnée pour ne pas qu'elle change de valeur
    }

    getRadius(r) {
        return this.r;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    setHeight(height) {
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    setColor(color) {
        this.color = color;
    }

    setColorBorder(colorBorder) {
        this.colorBorder = colorBorder;
    }

    compareTo(circle) {
        return this.getRadius() - circle.getRadius();
      }

    // Décrire les méthodes (les fonctionnalités de la classe)
    draw(ctx) {
        // Démarrer le path 2d (chemin 2D)
        ctx.beginPath();

        // Indiquer la couleur du cercle
        ctx.fillStyle = this.color;
        
        // Indiquer la bordure du cercle
        //ctx.lineWidth = 1;
        //ctx.strokeStyle = this.color;

        // Dessiner le cercle
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);

        // Arrêter le path 2d
        ctx.closePath();

        // Remplir le cercle
        ctx.fill();

        // Réaliser la bordure du cercle
        //ctx.stroke();
        
    }

    move(deltaT, direction) {
        const dx = this.speed * deltaT * Math.cos(direction);
        const dy = this.speed * deltaT * Math.sin(direction);

        this.x += dx;
        this.y += dy;
    }
    
}