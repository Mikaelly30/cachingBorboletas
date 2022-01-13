const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var jogador;
var grupoBorboletas;
var borboleta1Img;
var borboleta2Img;
var backgroundImg;
var colisor;
var score = 0;



function preload(){
  backgroundImg = loadImage("backgroundImg.png");
  borboleta1Img = loadImage("borboletaRosa.png");
  borboleta2Img = loadImage("borboletaLaranja.png");


}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  jogador = new Player(windowWidth/2,windowHeight/2 + 100,350,600);
  
  colisor = createSprite(windowWidth/2,windowHeight/2 + 100,350,625);


  grupoBorboletas = new Group();



}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  fill("white");
  textSize(45);
  text("SCORE :"+score,40,250);

  

  colisor.visible = false;

  colisor.display();
  jogador.display();
  gerarBorboletas();
 

  drawSprites();
}

function gerarBorboletas(){
  if(frameCount % 90 == 0 ){

    
    var borboleta1 = createSprite(30, 150, 20,20);
    borboleta1.velocityX = +5; 

    var borboleta2 = createSprite(1300,70, 20,20);
    borboleta2.velocityX = -5;

    var rand = Math.round(random(1,1) );
    switch(rand){
      
      case 1 : 
        borboleta2.addImage(borboleta2Img);
        borboleta1.addImage(borboleta1Img);
      break

      
    }
    if(grupoBorboletas.isTouching(colisor)){
      score = score+1;
    }


    grupoBorboletas.add(borboleta1);

    grupoBorboletas.add(borboleta2);

  }
  
}

