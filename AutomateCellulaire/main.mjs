//import Automaton from "../class/Automaton/Sand.js";
import Automaton from "../class/Automaton/InFlatTorus.js";
import MainLoop from "../lib/mainloop.js";
import Keyboard from "../class/Keyboard.js";
import { domOn } from "../lib/dom.js";

const keyboard = new Keyboard(false);
keyboard.onKeyDown('KeyP', () => console.log('p is pressed'));

const ctx = document.querySelector('canvas').getContext('2d');

const birth = new Set([3]); // Birth rule: B3
const survival = new Set([2, 3]); // Survival rule: S23

// Définir la taille de la toile identique à la taille de l'écran
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

const cellSize = 14;
const rows = Math.round(ctx.canvas.height / cellSize);
const cols = Math.round(ctx.canvas.width / cellSize);

let pause = false;
let freq = 30;
let prob = 0.5;

let automaton = new Automaton({ rows, cols, cellSize, prob, birth, survival });


keyboard.onKeyDown('p', () => {
    pause = !pause;
});

keyboard.onKeyDown('s', () => {
    freq = Math.max(1, freq - 10);
    MainLoop.setSimulationTimestep(1000 / freq);
});

keyboard.onKeyDown('w', () => {
    freq = Math.min(500, freq + 10);
    MainLoop.setSimulationTimestep(1000 / freq);
});

keyboard.onKeyDown('r', () => {
    automaton = new Automaton({ rows, cols, cellSize, prob, birth, survival });
});

keyboard.onKeyDown('a', () => {
    prob = Math.max(0, prob - 0.05);
});

keyboard.onKeyDown('d', () => {
    prob = Math.min(1, prob + 0.05);
});

keyboard.onKeyDown('b', () => {
    console.log('b');
});

keyboard.onKeyDown('s', () => {
    console.log('s');
});

domOn('.rule', 'click', evt => {
    const dom = evt.currentTarget;
    const ruleType = dom.dataset.ruleType;
    const ruleNum = dom.dataset.ruleNum - 0;
    
    // Demande si la règle est "b".
    // Si oui -> affecte le set birth, si non -> affecte le set survival
    const rule = ruleType == 'b' ? birth : survival;

    // Si la règle est déjà appliquée, on la supprime, sinon on l'applique
    rule.has(ruleNum) ? rule.delete(ruleNum) : rule.add(ruleNum);
})


MainLoop.setUpdate(() => {
    if (pause) return;
    automaton.changeCellState();
})

MainLoop.setDraw(() => {
    ctx.canvas.height = ctx.canvas.clientHeight;
    ctx.canvas.width = ctx.canvas.clientWidth;

    automaton.draw(ctx);
})

MainLoop.start();