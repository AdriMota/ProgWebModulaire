import Automaton from "../Automaton.js";

export default class WithPathFinding extends Automaton {
    constructor({ rows = 10, cols = 10, cellSize = 14, prob = 0.5, colorAlive = 'white', colorDead = "black" } = {}) {
        super({ rows, cols, cellSize, prob, colorAlive, colorDead });
    }



}