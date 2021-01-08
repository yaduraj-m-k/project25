const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,basket1,basket2,basket3,paper;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,300,50,50);
    box2 = new Box(640,100,50,100);
    ground = new Ground(600,height,1200,20);
    basket1 = new Basket(1000,300,200,200);
    basket2 = new Basket(1100,340,20,100);
    basket3 = new Basket(900,340,20,100);
    paper = new Paper(200,399,50);


   
}

function draw(){
    background("black");
    Engine.update(engine);
    
    ground.display();
    basket1.display();
   // basket2.display();
    //basket3.display();
    paper.display();
    keyPressed();
    
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-20})
    }
}
