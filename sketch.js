const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var ground;
var hero;
var fly;
var backgroundImg;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box50, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28;

function preload() {
//preload the images here
  backgroundImg = loadImage("Images/GamingBackground.png");
}

function setup() {
  createCanvas(1200, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 780, 1200, 40);
  hero = new Hero(120, 300, 10);
  fly = new Fly(hero.body, {x: 500, y: 500});
  box1 = new Block(270, 255, 50, 50);
  box2 = new Block(270, 270, 50, 50);
  box3 = new Block(270, 285, 50, 50);
  box4 = new Block(270, 300, 50, 50);
  box5 = new Block(270, 315, 50, 50);
  box6 = new Block(270, 330, 50, 50);
  box7 = new Block(270, 345, 50, 50);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground.display();
  hero.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
}

function mouseDragged () {
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}

// function mouseReleased() {
//   fly.Fly();
// }

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(hero.body, {x: 120, y: 300});
    fly.attach(hero.body);
  }
}