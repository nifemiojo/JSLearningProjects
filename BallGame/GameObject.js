export function GameObject(x, y, velX, velY, ctx) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = true;
    this.ctx = ctx;
}