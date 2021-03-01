import {EvilBall} from './EvilBall.js';
import {Ball} from './Ball.js';

// setup canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

let balls = [];
while (balls.length < 25) {
  let size = random(10,20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size,
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    ctx
  );

  balls.push(ball);
}

let evilBall = new EvilBall(random, width, height, ctx);
evilBall.setControls();

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
      if (balls[i].exists) {
        balls[i].draw();
        balls[i].update(width, height);
        balls[i].collisionDetect(balls, random);
      }
      evilBall.draw();
      evilBall.checkBounds(width, height);
      evilBall.collisionDetect(balls);
    }
  
    requestAnimationFrame(loop);
  }

  loop();

 