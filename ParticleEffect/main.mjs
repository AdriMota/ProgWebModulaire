import Sprite from "../class/ParticleEffect/Sprite.js";
import Tweens from "../class/Tweens.js";
import MainLoop from "../lib/mainloop.js";
import * as random from "../lib/randomInt.mjs";
import { domOn } from "../lib/dom.js";

const ctx = document.querySelector('canvas').getContext('2d');

// Définir la taille de la toile identique à la taille de l'écran
ctx.canvas.height = ctx.canvas.clientHeight;
ctx.canvas.width = ctx.canvas.clientWidth;

const sprites = new Array(300);
const imgHeight = 64;
const imgWidth = 64;
let mouse = { x: -100, y: -100, height: 150, width: 150 };

for (let i = 0; i < sprites.length; i++) {

    const randDenominateur = random.getInt(2, 5);

    sprites[i] = new Sprite({
        x: random.getInt(0, ctx.canvas.width),
        y: random.getInt(0, ctx.canvas.height),
        width: Math.round(imgWidth / randDenominateur),
        height: Math.round(imgHeight / randDenominateur),
        color: `hsl(0, 100%, 50%)`,
        velX: (Math.random() - 0.5) / 5,
        velY: (Math.random() - 0.5) / 5
    })

}

const tweens = new Tweens();

tweens.create({
    to: 360,
    duration: 50000,
    loop: true,
    animate: hue => {
        sprites.forEach(sprite => {
            sprite.setColor(`hsl(${hue}, 100%, 50%)`);
        })
    }
})

domOn('canvas', 'mousemove', event => {
    const rect = ctx.canvas.getBoundingClientRect();

    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
})

MainLoop.setUpdate(dt => {
    tweens.update(dt, ctx.canvas.width, ctx.canvas.height);

    sprites.forEach(sprite => {
        sprite.move(dt);
        sprite.bounceOffTheWalls(ctx);

        if (sprite.isInHitbox(mouse.x, mouse.y, mouse.width, mouse.height)) {
            const angle = sprite.getAngle(mouse.x, mouse.y);
            sprite.setVelFromAngle(angle);
        }

    })

});

MainLoop.setDraw(() => {
    ctx.canvas.height = ctx.canvas.clientHeight;
    ctx.canvas.width = ctx.canvas.clientWidth;

    sprites.forEach(sprite => sprite.draw(ctx));

    // set composite mode
    ctx.globalCompositeOperation = "source-in";

    // draw color
    ctx.fillStyle = sprites[0].color;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // reset comp. mode
    ctx.globalCompositeOperation = "source-over";

});

MainLoop.setEnd((fps, panic) => {
    if (panic) console.log('panic');

})

MainLoop.start();