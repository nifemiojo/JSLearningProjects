import {GameObject} from './GameObject.js';

export function EvilBall(randomFunc, width, height, ctx) {
    this.color = 'white';
    this.size = 10;
    let x = randomFunc(0 + this.size,width - this.size);
    let y = randomFunc(0 + this.size,height - this.size);
    
    GameObject.call(this, x, y, 10, 10, ctx);
    
  }
  
  EvilBall.prototype = Object.create(GameObject.prototype);
  EvilBall.prototype.constructor = EvilBall;
  
  EvilBall.prototype.draw = function() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color;
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.lineWidth = 3;
    this.ctx.stroke();
  }
  
  EvilBall.prototype.checkBounds = function(width, height) {
    if ((this.x + this.size) >= width) {
      this.x -= this.size;
    }
  
    if ((this.x - this.size) <= 0) {
      this.x += this.size;
    }
  
    if ((this.y + this.size) >= height) {
      this.y -= this.size;
    }
  
    if ((this.y - this.size) <= 0) {
      this.y += this.size;
    }
  }
  
  EvilBall.prototype.setControls = function() {
  
    let _this = this;
    window.onkeydown = function(e) {
      if (e.key === 'h') {
        _this.x -= _this.velX;
      } else if (e.key === 'l') {
        _this.x += _this.velX;
      } else if (e.key === 'k') {
        _this.y -= _this.velY;
      } else if (e.key === 'j') {
        _this.y += _this.velY;
      }
    }
  
  }
  
  EvilBall.prototype.collisionDetect = function(balls) {
    for (let j = 0; j < balls.length; j++) {
      if (balls[j].exists) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
          balls[j].exists = false;
        }
      }
    }
  }
