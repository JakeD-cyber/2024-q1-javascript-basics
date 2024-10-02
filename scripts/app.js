//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore canvas is an CanvasRenderingContext2D
const ctx = canvas.getContext("2d");

class SquareShape {
}

let s1 = new SquareShape(0, 0);

let shapes = [];

for (let i = 0; i <100; i++) {
    shapes.push(new SquareShape(0, 0));

}

let LastTime = 0;

function drawLoop(timestamp); {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let elaspedTime = timestamp - LastTime;
    lastTime = timestamp;

    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width = 50;
        this.height = this.width;
        this.hue = 0;

        this.speedMult = 11;
        this.speedX = Math.floor(Math.random() * this.speedMult) + 1;
        this.speedX = Math.floor(Math.random() * this.speedMult) + 1;
        this.dirX = 1;
        this.dirY = 2;

    }

    update() {
        this.x += this.speedX; * this.dirX;
        this.y += this.speedY; * this.dirY;
        this.hue++;

        if(this.hue > 360) {
            this.hue = 0;
    }

    if(this.y < 0) {
         // offscreen top so move down
         this.dirY = 1;
    } else if(this.y + this.height> canvas.height) {
        // offscreen bottom so move up
        this.dirY = -1;
    }

}

draw() {}

ctx.fillStyle= "hsla(0, 100%, 50%, 100%)";
//"#ff0000";
//"red";

ctx.fillRect(0, 0, 50, 50);

ctx.beginPath();
ctx.arc(100, 100, 25, 0, Math.PI * 2);
ctx.fill();

let LastTime = 0;
let hue = 0;

let x1 = 0;
let y1 = 0;
let speedX = 1;
let speedY = 0.5;

function drawLoop(timestamp); {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let elaspedTime = timestamp - LastTime;
    lastTime = timestamp;

    s1.draw();
    s1.update();

    for (const shape of shapes) {
        shape.update();
        shape.draw();

    }


    ctx.fillStyle = `hsla(${hue}, 100%, 50%, 100%)`;
    ctx.fillRect(x1, y1, 100, 100);

    // hue = hue + 1;
   // hue += 1;
   hue++; // add one to the current value of hue

   x1 += speedX;
   y1 += speedY;


   // console.log(elapsedTime);

    
}

window.requestAnimationFrame(drawLoop);