import Automaton from "../Automaton.js";
import { moduloEuclidian } from "../../lib/math.js";

export default class InFlatTorus extends Automaton {
    constructor({ rows = 10, cols = 10, cellSize = 14, prob = 0.5, colorAlive = 'pink', colorDead = "black", birth, survival } = {}) {
        super({ rows, cols, cellSize, prob, colorAlive, colorDead, birth, survival });
    }


    livingCellsNeighbor({ row, col }) {

        let counter = 0;
        let rowEnd = row + 1;
        let rowStart = row - 1;
        let colEnd = col + 1;
        let colStart = col - 1;

        // fait le tour de toutes les cellules voisines
        for (let row = rowStart; row <= rowEnd; row++) {

            for (let col = colStart; col <= colEnd; col++) {

                // compte les cellules voisines vivantes
                if (this.matrix[moduloEuclidian(row, this.rows)][moduloEuclidian(col, this.cols)] == 1) {
                    counter++;
                }
            }
        }

        if (this.matrix[row][col]) counter--;

        return counter;
    }


}