// This creates the ground.
function Box(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h);
  this.body.friction=0.3;
  this.body.restitution=0;
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rect(0, 0, this.w, this.h);
    pop();
  }
}































//
