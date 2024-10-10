//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore canvas is an CanvasRenderingContext2D
const ctx = canvas.getContext("2d");

class SquareShape {
      constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width = 50;
        this.height = this.width;
        this.hue = 0;

        this.speedMult = 11;
        this.speedX = Math.floor(Math.random() * this.speedMult) + 1;
        this.speedY = Math.floor(Math.random() * this.speedMult) + 1;
        this.dirX = 1;
        this.dirY = 2;

    }

    update() {
        this.x += this.speedX * this.dirX;
        this.y += this.speedY * this.dirY;
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

    draw() {
        
screensize = (800,600)
screen = display.set_mode(screensize,0)
display.set_caption("Animation Test")



x = 100
y = 200
dx = 2
dy = 2
go = True

    Colour = RED
    }
}

let s1 = new SquareShape(0, 0);

let shapes = [];

for (let i = 0; i <100; i++) {
    shapes.push(new SquareShape(0, 0));

}

let LastTime = 0;
let hue = 0;


function drawLoop(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let elaspedTime = timestamp - LastTime;
    LastTime = timestamp;

    s1.draw();
    s1.update();

    for (const shape of shapes) {
        shape.update();
        shape.draw();

    }


   // console.log(elapsedTime);

   window.requestAnimationFrame(drawLoop);    
}

window.requestAnimationFrame(drawLoop);