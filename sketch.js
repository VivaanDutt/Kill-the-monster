const Engine;
const World;
const Bodies;
const Constraint;

var engine;
var world;

var ground;
var hero;
var fly;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(480, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 580, 480, 40);
  hero = new Hero(120, 300, 10);
  fly = new fly(body)
}

function draw() {
  background(0);

}

