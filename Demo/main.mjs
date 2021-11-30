import Circle from "../class/Circles/InFlatTorus.js";
import * as random from "../lib/randomInt.mjs";
import randomColor from "../lib/randomColor.mjs";
import MainLoop from "../lib/mainloop.js";
import Keyboard from "../class/Keyboard.js";
import { generate } from "../lib/matrix.js";

const ctx = document.querySelector('canvas').getContext('2d');

// Définir la taille de la toile identique à la taille de l'écran
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

const keyboard = new Keyboard();

// Stockage des cercles
const tabCercles = [];

// Générer 300 cercles aléatoires
for (let i = 0; i < 300; i++) {
    const x = random.getInt(0, ctx.canvas.width);
    const y = random.getInt(0, ctx.canvas.height);
    const r = random.getIntMini(5, 30);
    const speed = r / 100;
    const direction = Math.PI/2;
    const color = randomColor();
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    const cercle = new Circle({ x, y, r, speed, direction, color, width, height });
    tabCercles.push(cercle);

}

tabCercles.sort((c1, c2) => c1.compareTo(c2));

MainLoop.setUpdate(dt => {
    for (const cercle of tabCercles) {
        if (keyboard.isKeyDown('KeyA')) {
            cercle.move(dt, (Math.PI));
        };
        
        if (keyboard.isKeyDown('KeyD')) {
            cercle.move(dt, 0);
        };

        if (keyboard.isKeyDown('KeyW')) {
            cercle.move(dt, (Math.PI * 1.5));
        };

        if (keyboard.isKeyDown('KeyS')) {
            cercle.move(dt, (Math.PI * 0.5));
        };

        //cercle.move(dt, ctx.canvas.width, ctx.canvas.height);
    }
});

MainLoop.setDraw(() => {
    ctx.canvas.height = ctx.canvas.clientHeight;
    ctx.canvas.width = ctx.canvas.clientWidth;
    for (const cercle of tabCercles) {
        cercle.draw(ctx);
    }
});

MainLoop.start();