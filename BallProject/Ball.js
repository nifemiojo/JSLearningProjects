import {GameObject} from './GameObject.js';

export function Ball( color, size,  ...args) {
    GameObject.apply(this, args);
    this.color = color;
    this.size = size;
  }

  Ball.prototype = Object.create(GameObject.prototype);
  Ball.prototype.constructor = Ball;

  Ball.prototype.draw = function() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  Ball.prototype.update = function(width, height) {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
  }

  Ball.prototype.collisionDetect = function(balls, randomFunc) {
    for (let j = 0; j < balls.length; j++) {
      if (!(this === balls[j]) && balls[j].exists) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = 'rgb(' + randomFunc(0, 255) + ',' + randomFunc(0, 255) + ',' + randomFunc(0, 255) +')';
        }
      }
    }
  }