const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var gameState = "onSling";
var score;

function preload() {
  getBackgroundimg();
}

function setup() {
  createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);

  score = 0;

  ground = new Ground(550,height,1200,20);
  platform = new Ground(150, 405, 1200, 170);
  arrow = new Arrow(200, 200);
  slingshot = new SlingShot(arrow.body, {x:200, y:175})
  baloon1 = new balloon(900, 250);
  baloon2 = new balloon(800, 150);
}

function draw() {
  if (backgroundImg) {
    background(backgroundImg);
    }

  textSize(30);
  fill("white");
  text("Score: "+ score, 800, 50);  
    
  Engine.update(engine);
  //drawSprites();
  ground.display();
  platform.display();
  arrow.display();
  slingshot.display();
  baloon1.display();
  baloon2.display();
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32 && arrow.body.speed < 1) {
     slingshot.attach(bird.body);
  }
}


async function getBackgroundimg() {
    var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responsejson = await response.json();
    var datetime = responsejson.datetime;
    var hour = datetime.slice(11, 13);

    if (hour>= 06 && hour<= 19) {
        bg = "Images/Daybg.jpg";
    }
    else {
      bg = "Images/nightbg.jpg";
    }

    backgroundImg = loadImage(bg);
}
