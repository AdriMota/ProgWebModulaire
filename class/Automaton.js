import { generate } from "../lib/matrix.js";

// "default" permet de renommer la classe lorsqu'elle sera importée
export default class Automaton {
    constructor({ rows = 10, cols = 10, cellSize = 100, colorAlive = 'yellow', colorDead = "brown" } = {}) {
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.colorAlive = colorAlive;
        this.colorDead = colorDead;
    }


    randomize(prob = 0.5) {
        this.matrix = generate(this.rows, this.cols);

        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.matrix[row][col] = Math.random() < prob ? 0 : 1;
            }
        }

        console.log(this.matrix);
    }


    setColorAlive(colorAlive) {
        this.colorAlive = colorAlive;
    }

    setColorDead(colorDead) {
        this.colorDead = colorDead;
    }


    draw(ctx) {
        // Démarrer le path 2d (chemin 2D)
        ctx.beginPath();

        // Indiquer la couleur
        //ctx.fillStyle = this.colorAlive;
        //ctx.fillStyle = this.colorDead;


        
        // Dessiner les cellules
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                ctx.fillRect(row, col, row * this.cellSize, col * this.cellSize);
            }
        }
        
        





        // Arrêter le path 2d
        ctx.closePath();

        // Remplir le cercle
        ctx.fill();
    }



    // Pour le dessin, dessiner chacune des cellules de l'automate. Pour que la position (x, y) des 
    // cellules corresponde au bon (x, y) du canvas n'oubliez pas de les multiplier 
    // par la taille des cellules. Pour leur couleur (fillStyle), choisissez la bonne 
    // en fonction de l'état de la cellule. Finalement, pour simuler une grille, dessinez 
    // les cellules avec une marge externe de 1 [px]. Vous pouvez utiliser la méthode 
    // fillRect pour le dessin des cellules (et de la grille). Testez votre classe avec 
    // les étapes suivantes:

    // Créez un automate cellulaire de taille identique au canvas divisé (division entière) 
    // par la taille des cellules (fixée à 14px par exemple).

    // Initialisez l'automate aléatoirement en appelant sa méthode randomize avec une 
    // probabilité de 0.1 pour générer un bruit de test.

    // Dessinez l'automate sur le canvas grâce à sa méthode draw.

}