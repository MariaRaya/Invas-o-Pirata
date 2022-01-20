const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground;
var cannon, cannonBall;
var boat;

var bolas = [];


function preload() {
  backgroundImg = loadImage("./imagem/background.gif");
  towerImage = loadImage("./imagem/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  // propriedades do canhão
  angleMode(DEGREES); //conversão para graus
  angle = 20;
  cannon = new Cannon(180, 110, 130, 100, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);
  boat = new Boat(width, height - 60, 170, 170, -80);


}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  

  // mostrando canhão na tela
  cannon.display();
  boat.display();

  for(i = 0; i < bolas.length; i++){
    mostrarCannonBalls(bolas[i],i);
  }
}

function keyReleased(){
  if(keyCode == DOWN_ARROW){
    bolas[bolas.length - 1].atirar();
  }
}

function keyPressed(){
  if(keyCode == DOWN_ARROW){
    cannonBall = new CannonBall(cannon.x, cannon.y);
    bolas.push(cannonBall);
  }
}

function mostrarCannonBalls(bola,i){
    if(bola){
      bola.display();
    }
}
