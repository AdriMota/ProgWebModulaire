//import Automaton from "../class/Automaton/Sand.js";
import Automaton from "../class/Automaton.js";
import MainLoop from "../lib/mainloop.js";
import Keyboard from "../class/Keyboard.js";

const keyboard = new Keyboard();
keyboard.onKeyDown('KeyP', () => console.log('p is pressed'));

const ctx = document.querySelector('canvas').getContext('2d');

const birth = new Set([3]); // Birth rule: B3
const survival = new Set([2, 3]); // Survival rule: S23

// Définir la taille de la toile identique à la taille de l'écran
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

const cellSize = 14;
const rows = Math.round(ctx.canvas.height/cellSize);
const cols = Math.round(ctx.canvas.width/cellSize);

const automaton = new Automaton({ rows, cols, cellSize, birth, survival });
automaton.randomize();

// MainLoop.setSimulationTimestep(1000);

MainLoop.setUpdate(() => {
    automaton.changeCellState();
})

MainLoop.setDraw(() => {
    ctx.canvas.height = ctx.canvas.clientHeight;
    ctx.canvas.width = ctx.canvas.clientWidth;

    automaton.draw(ctx);
})

MainLoop.start();

//automaton.update();
//automaton.livingCellsNeighbor({x : 0, y : 0});