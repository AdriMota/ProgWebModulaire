import Automaton from "../class/Automaton/WithPathfinding.js";
import MainLoop from "../lib/mainloop.js";


// Initialisation du canvas
const ctx = document.querySelector('canvas').getContext('2d');

// Définir la taille de la toile identique à la taille de l'écran
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

// Création d'un automate cellulaire de la taille du canvas divisé par 40 px avec une largeur des cases valant 40 px
const cellSize = 40;
let prob = 0.5;

const rows = Math.round(ctx.canvas.height / cellSize);
const cols = Math.round(ctx.canvas.width / cellSize);

let automaton = new Automaton({ rows, cols, cellSize, prob });

console.log(automaton);


// Initialisation de l'automate cellulaire avec toutes ses cases à l'état vivant


// Dessin de l'automate sur le canvas
MainLoop.setUpdate(() => {


})

MainLoop.setDraw(() => {
    ctx.canvas.height = ctx.canvas.clientHeight;
    ctx.canvas.width = ctx.canvas.clientWidth;

    automaton.draw(ctx);
})

MainLoop.start();