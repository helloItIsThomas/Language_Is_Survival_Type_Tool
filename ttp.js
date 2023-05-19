//console.log();

function ttp() {
  let counter = 0;
  if (!font) {
    return;
  }
  // Each point runs one of the 5 commands.
  for (let i=0; i<path.commands.length; i++) {
    pointVect[i] = createVector(path.commands[i].x, path.commands[i].y);
  }
  for (let n=0; n<path.commands.length; n++) {
    if (n < path.commands.length-1) {
      vectDist[n] = p5.Vector.dist(pointVect[n], pointVect[n+1]);
    } else {
      vectDist[path.commands.length-1] = p5.Vector.dist(pointVect[path.commands.length-1], pointVect[0]);
    }
  }
  numParts = pointVect.length;

  for (let cmd of path.commands) {
    stroke(255, 0, 0);
    strokeWeight(1.5);
    noFill();
    //circle(pointVect[counter].x, pointVect[counter].y, 7.5);
    noFill();
    stroke(c);
    //noStroke();
    // M == move to.
    if (cmd.type === 'M') {
      //beginShape();
      vertex(pointVect[counter].x, pointVect[counter].y);
      //push();

      //pop();
      //vertex(cmd.x, cmd.y);
      // L == line to.
    } else if (cmd.type === 'L') {
      vertex(pointVect[counter].x, pointVect[counter].y);
      // C == curve to.
    } else if (cmd.type === 'C') {
      bezierVertex(pointVect[counter].x, pointVect[counter].y);
      // Q == quad to.
    } else if (cmd.type === 'Q') {
      quadraticVertex(pointVect[counter].x, pointVect[counter].y);
      // Z == close.
    } else if (cmd.type === 'Z') {
      //endShape(CLOSE);
    }
    counter++;
  }
  console.log(pointVect);
  //console.log(numParts);
}
