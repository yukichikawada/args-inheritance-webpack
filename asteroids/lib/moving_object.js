function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = (ctx) => {
  const canvas = document.getElementById('game-canvas');

  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();
};

module.exports = MovingObject;
