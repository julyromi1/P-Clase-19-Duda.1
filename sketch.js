var roadImg;
var carroImg;
var gameoverImg;
var guasonImg;
var harleyquinnImg;
var InsigniaImg;
var KaboomImg;
var WinnerImg;
var ZaapImg;
var roadImg;
var road;
var carro;
var guason;
var harleyquinn;
var insignia;
var kaboom;
var JUGANDO = 1;
var FIN = 0;
var estadodejuego= JUGANDO;
var Score=0;
var vidas=3;

function preload(){
carroImg = loadImage ("carrobatman.png");
gameoverImg = loadImage ("gameover.png");
guasonImg = loadImage ("guason.png");
harleyquinnImg = loadImage ("harleyquinn.png");
InsigniaImg = loadImage ("insignia.png");
KaboomImg = loadImage ("kaboom.png");
WinnerImg = loadImage ("winner.png");
ZaapImg = loadImage ("zaap.png");
roadImg = loadImage ("Road.png");
}

function setup() {
    createCanvas(1200,300);

road=createSprite(100,150);
road.addImage(roadImg);
road.velocityX = -8;

carro=createSprite(100,150);
carro.addImage(carroImg);
carro.scale= 0.1;



//guasongroup = new Group ();
//harleyquinngroup = new Group ();
insigniagroup = new Group ();


carro.setCollider ("rectangle",0,0,carro.width,carro.height);
carro.debug=true;

}

function draw() {
background ("black");
drawSprites ();

text("vidas..."+vidas, 30, 30);

if (Score%100==0){
}

if (estadodejuego == JUGANDO) { 
  round.velocityX=-(5 + Score/100);
  Score+=Math.round(getFrameRate()/60);
    carro.y = World.mouseY;
    //road.velocityX=-5;

if(road.x < 0){
  road.x = width/2;
}

if (World.frameCount % 20 == 0){
  holaguason ();
}
if (World.frameCount % 40 == 0){
  holaharleyquinn ();
}
if (World.frameCount % 60 ==0) {
  holainsignia ();
}

if (guason.isTouching (carro))
  {
  vidas-=1;
  console.log (vidas);
  }

if (harleyquinn.isTouching (carro))
  {
  vidas-=1;
  }

  //if (insigniagroup.isTouching (carro)) {
    //road.velocityX+=-6;
  //}


  }
  else if (estadodejuego==FIN){
  road.x=0;
  guason.setVelocityXEach(0);
  harleyquinn.setVelocityXEach (0);
  insigniagroup.setVelocityXEach(0);
  guason.setLifetimeEach (-1);
  harleyquinn.setLifetimeEach (-1);
  insigniagroup.setLifetimeEach (-1);
  kaboom=createSprite(600,150);
  kaboom.addAnimation("stop", KaboomImg);
  kaboom.scale=.5;
  carro.y =150;
  
  }

  text ("score..." + Score, width-100, height/2-100);
  text ("vidas..." + vidas, width-100, height/2-80);

  if (vidas==0){
    estadodejuego=FIN;

  }



}







function holaguason (){
  var guason= createSprite (990,Math.round(random(20,200)),1,2);  
  guason.addImage (guasonImg);
  guason.velocityX=-3;
  guason.lifetime=350;
  guason.scale=0.1;
  //guasongroup.add (guason);
  if (guason.isTouching (carro)){  //group
  guason.velocityX+=-4;  
  }
}

function holaharleyquinn (){
  var harleyquinn= createSprite (890,Math.round(random(20,200)),1,2);
  harleyquinn.addImage(harleyquinnImg);
  harleyquinn.velocityX= -4;
  harleyquinn.lifetime=300;
  harleyquinn.scale=0.1;
  //harleyquinngroup.add (harleyquinn);
  harleyquinn.velocityX+=-3;
  
}

function holainsignia (){
  var insignia= createSprite (990,Math.round(random(20,200)),1,2);
  insignia.addImage (InsigniaImg);
  insignia.velocityX= -6;
  insignia.lifetime=500;
  insignia.scale=0.04;
  insigniagroup.add (insignia);
  insignia.velocityX+=-3;

}
