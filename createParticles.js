
function createParticles() {
  if (doOnce == true) {

    // numParts = pointVect.length is at the bottom of ttp.
    var prev = null;
    for (var n=0; n < numParts-1; n++) {
      var fixed = false;

      if (!prev) {
        // This turns on and off the fixedness of the first particle.
        //fixed= true;
      }

        var p = new Particle(pointVect[n].x, pointVect[n].y, 10);
        particles.push(p);

      if (prev) {
        var constOptions = {
        bodyA:
        p.body,
        bodyB:
        prev.body,
        length:
        vectDist[distCount],
        stiffness:
        1
      };

      // This constraint stuff is baked into the particle loop
      var constraint = Constraint.create(constOptions);
      //This turns on and off the constraints
      World.add(world, constraint);
      distCount++;
    }
    prev = p;
  }
  doOnce = false;
}
}





















//
