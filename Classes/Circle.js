// "default" permet de renommer la classe lorsqu'elle sera importée
export default class Circle {
    // this = instance
    // self = la classe

    // Les {} dans la parenthèse du constructeur donne de la souplesse
    // de façon à ce qu'on puisse saisir les données (x, y, r ...) dans
    // le désordre. Le = {} dans la parenthèse permet de créer un cercle
    // sans indiquer les valeurs des différents paramètres
    constructor({x = 0, y = 0, r = 100, color = 'red'} = {}) { 
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;

        //this._x = x; --> Le _ empêche d'accéder à la propriété en dehors de l'objet
        // this.#r = r; --> Le # protège la donnée pour ne pas qu'elle change de valeur
    }

    setRadius(r) {
        this.r = r;
    }

    setX(x) {
        this.x = x;
    }

    // Décrire les méthodes (les fonctionnalités de la classe)
    draw(ctx) {
        // Démarrer le path 2d (chemin 2D)
        ctx.beginPath();

        // Indiquer la couleur du cercle
        ctx.fillStyle = this.color;

        // Dessiner le cercle
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);

        // Arrêter le path 2d
        ctx.closePath();

        // Remplir le chemin
        ctx.fill();
    }

}