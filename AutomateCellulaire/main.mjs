import Automaton from "../class/Automaton.js";

const ctx = document.querySelector('canvas').getContext('2d');

// Définir la taille de la toile identique à la taille de l'écran
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

const automaton = new Automaton();
automaton.randomize();

automaton.draw(ctx);