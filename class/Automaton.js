import { generate, clone } from "../lib/matrix.js";

// "default" permet de renommer la classe lorsqu'elle sera importée
export default class Automaton {
    constructor({ rows = 10, cols = 10, cellSize = 14, colorAlive = 'pink', colorDead = "black", birth, survival } = {}) {
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.colorAlive = colorAlive;
        this.colorDead = colorDead;
        this.birth = birth;
        this.survival = survival;
        this.matrix = generate(this.rows, this.cols);
    }


    randomize(prob = 0.1) {
        this.matrix = generate(this.rows, this.cols);

        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.matrix[row][col] = Math.random() < prob ? 1 : 0;
            }
        }
    }


    draw(ctx) {
        // Dessiner les cellules
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                // Colorie les carrés en fonction de leur état
                ctx.fillStyle = this.matrix[row][col] == 0 ? this.colorDead : this.colorAlive;

                // Indiquer la bordure du carré
                ctx.lineWidth = 1;
                ctx.strokeStyle = "black";

                // Dessine les carrés (+1 et -1 permettent de simuler une bordure)
                ctx.fillRect(col * this.cellSize + 1, row * this.cellSize + 1, this.cellSize - 1, this.cellSize - 1);
                // Dessine les bordures des carrés autrement
                //ctx.strokeRect(col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize);
            }
        }
    }


    // Retournera le nombre de cellules vivantes dans le voisinage de Moore d'une cellule.
    livingCellsNeighbor({ x, y }) {
        let counter = 0;

        // vérifie si le x des cellules voisines n'est pas hors de l'écran (hors du tableau)
        let rowEnd = x + 1;
        if (rowEnd >= this.rows) rowEnd = x;

        let rowStart = x - 1;
        if (rowStart < 0) rowStart = 0;

        // vérifie si le y des cellules voisines n'est pas hors de l'écran (hors du tableau)
        let colEnd = y + 1;
        if (colEnd >= this.cols) colEnd = y;

        let colStart = y - 1;
        if (colStart < 0) colStart = 0;


        // fait le tour de toutes les cellules voisines
        for (let row = rowStart; row <= rowEnd; row++) {

            for (let col = colStart; col <= colEnd; col++) {

                    // compte les cellules voisines vivantes
                    if (this.matrix[row][col] == 1) {
                        counter++;
                    }
            }
        }

        if (this.matrix[x][y]) counter--;

        return counter;
    }


    // Applique les règles B/S à l’ensemble des cellules du tableau. 
    changeCellState() {

        const newCellState = clone(this.matrix);

        // Calculer le nombre de cellules vivantes dans le voisinage de Moore de la cellule [x][y].
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const counter = this.livingCellsNeighbor({ x: row, y: col });

                // Si la cellule est morte et respecte les règles des 3 voisins
                if (this.matrix[row][col] == 0 && this.birth.has(counter)) {
                    // Naîssance de la cellule
                    newCellState[row][col] = 1;
                } else if (this.matrix[row][col] == 1 && !this.survival.has(counter)) {
                    // Mort de la cellule
                    newCellState[row][col] = 0;
                }
            }
        }

        this.matrix = newCellState;
    }
}