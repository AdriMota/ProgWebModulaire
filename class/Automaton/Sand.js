import Automaton from "../Automaton.js";
import { clone } from "../../lib/matrix.js";

export default class Sand extends Automaton {
    update() {
        const nextGen = clone(this.matrix);
        
        for (let row = 0; row < this.rows - 1; row++) {
            for (let col = 0; col < this.cols; col++) { 
                if(this.matrix[row][col] == 0) continue;
                if(this.matrix[row + 1][col] == 0) {
                    nextGen[row + 1][col] = this.matrix[row][col];
                    nextGen[row][col] = 0;
                } else if(this.matrix[row + 1][col + 1] == 0) {
                    nextGen[row + 1][col + 1] = this.matrix[row][col];
                    nextGen[row][col] = 0;
                } else if(this.matrix[row + 1][col - 1] == 0) {
                    nextGen[row + 1][col - 1] = this.matrix[row][col];
                    nextGen[row][col] = 0;
                }
            }
        }

        this.matrix = nextGen;
    }
}