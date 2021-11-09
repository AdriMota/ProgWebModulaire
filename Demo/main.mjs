import Circle from "../Classes/Circle.js";

const ctx = document.querySelector('canvas').getContext('2d');

// Définir la taille de la toile identique à la taille de l'écran
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

const c1 = new Circle({y: 200, x: 100, color: '#11aa77'});

let lastTime = 0;
// Un tick = ce qui se produit à chaque frame
function tick(time) {
    let deltaT = time - lastTime;
    lastTime = time;

    ctx.canvas.height = ctx.canvas.clientHeight;
    ctx.canvas.width = ctx.canvas.clientWidth;

    c1.setX(c1.x + 0.1 * deltaT);
    c1.draw(ctx);

    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);