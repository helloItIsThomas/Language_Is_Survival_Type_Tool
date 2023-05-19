
var Engine = Matter.Engine,
  //Render = Matter.Render,
  Runner = Matter.Runner,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint;

// create an engine, world, and box
var engine;
var world;
var particles = [];
var ground;
var groundThickness = 40;

var frame;

var numParts;
var doOnce;

var distCount = 0;

function preload() {
  opentype.load('https://files.cargocollective.com/c1509438/resistance.otf', function (err, f) {
    if (err) {
      alert('Font could not be loaded: ' + err);
    } else {
      font = f;

      fSize = 300;
      msg = 'constellatlon';

      let x = width/2-800;
      let y = height/2+0;
      path = font.getPath(msg, x, y, fSize);
      //console.log(path.commands);
    }
  }
  );
}

let move;
let pointVect = [];
let vectDist = [];
let c;
let tempGravY = 0.0;

function setup() {
  frameRate(60);
  doOnce = true;
  createCanvas(windowWidth, windowHeight);

  var engineOptions = {
  gravity:
  {
  x:
    0,
    y:
    tempGravY,
    scale:
    0.001
  }
};

engine = Engine.create(engineOptions);

// Matter.Engine.world specifies the world the stuff is in.
world = engine.world;
Runner.run(engine);

boxA = new Box(200, 100, 50, 50);
var options = {
  isStatic:
true
  };
ground = Bodies.rectangle(0, height, width*10, groundThickness, options);
World.add(world, ground);

c = color('#111111');
c.setAlpha(100);
}

function draw() {
  noStroke();
  let c = color('#000000');
  c.setAlpha(9);
  fill(c);
  rect(0, 0, width, height);

  fill('#212121');
  stroke(c);

  ttp();
  // this stores the distance between particles.
  // I need to use this to create the initial constrait lengths.
  // I first need to make an array of constraints.
  createParticles();

  stroke('#ffffff');
  noFill();
  strokeWeight(2);
  beginShape();
  for (var i=0; i<particles.length; i++) {
    particles[i].show();
  }
  endShape();
}
