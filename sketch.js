const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var ground2;

var brick1;
var brick2;
var brick3;
var brick4;
var brick5;
var brick6;
var brick7;

var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16; 

var ball;
var chain;

var score=0;



function preload()
{
	
}

function setup() {
    createCanvas(1600, 700);
    engine = Engine.create();
    world = engine.world;

ground1=new Ground(390,260,155,15);
ground2=new Ground(521,555,155,15)

brick1=new Block(460,530,30,40);
brick2=new Block(490,530,30,40);
brick3=new Block(520,530,30,40);
brick4=new Block(550,530,30,40);
brick5=new Block(580,530,30,40);

brick6=new Block(490,490,30,40);
brick7=new Block(520,490,30,40);
brick8=new Block(550,490,30,40);

brick9=new Block(520,450,30,40);



block8=new Block(330,235,30,40);
block9=new Block(360,235,30,40);
block10=new Block(390,235,30,40);
block11=new Block(420,235,30,40);
block12=new Block(450,235,30,40);

block13=new Block(360,195,30,40);
block14=new Block(390,195,30,40);
block15=new Block(420,195,30,40);

block16=new Block(390,155,30,40);

ball=new Ball(150,450,20);

chain=new SlingShot(ball.body,{x:140,y:450});


    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  noStroke();
  textSize(35);
  fill("white");

  text("Score  " + score, width-300, 50);


ground1.display();
ground2.display();

block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();

brick1.display();
brick2.display();
brick3.display();
brick4.display();
brick5.display();

brick6.display();
brick7.display();
brick8.display();

brick9.display();

ball.display();

chain.display();

brick1.Score();
brick2.Score();
brick3.Score();
brick4.Score();
brick5.Score();
brick6.Score();
brick7.Score();
brick8.Score();
brick9.Score();
block8.Score();
block9.Score();
block10.Score();
block11.Score();
block12.Score();
block13.Score();
block14.Score();
block15.Score();
block16.Score();

getBackgroundImg();



  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
  if(keyCode===32){
    chain.attach(ball.body);  
  }    
  
  }
  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    console.log("datetime");
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
      noStroke();
      textSize(35)
      fill("black")
      text("DAY TIME!!",200, 50);
      
      
    } 
    else{
      noStroke();
      textSize(35)
      fill("black")
      text("NIGHT TIME!!", width-700, 50);
     
    }
  }










 