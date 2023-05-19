// This creates the particles
function Particle(x, y, r, fixed) {
  var options = {
  frictionAir:
  1,
    //torque:
    //0.9,
  density:
  0.3,
  restitution:
  0.69,
  isStatic:
  fixed
};
this.body = Bodies.circle(x, y, r, options);
this.r = r;

World.add(world, this.body);

this.show = function() {
  var pos = this.body.position;
  var angle = this.body.angle;
  if (pos.x > 10 && pos.y > 10) {
    curveVertex(pos.x, pos.y);
  }
}
}






















//
