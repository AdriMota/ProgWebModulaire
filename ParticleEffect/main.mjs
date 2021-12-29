import Sprite from "../class/ParticleEffect/Sprite.js";
import MainLoop from "../lib/mainloop.js";
//import * as random from "../lib/randomInt.mjs";
//import randomColor from "../lib/randomColor.mjs";

const ctx = document.querySelector('canvas').getContext('2d');

// Définir la taille de la toile identique à la taille de l'écran
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

const sprite = new Sprite();



MainLoop.setUpdate(dt => {
    
});

MainLoop.setDraw(() => {
    ctx.canvas.height = ctx.canvas.clientHeight;
    ctx.canvas.width = ctx.canvas.clientWidth;

    sprite.draw(ctx, ctx.canvas.width, ctx.canvas.height);
});

MainLoop.start();