//Create variables here
var foodS

function preload()
{
	//load images here
  dog=loadImage("images/dogImg.png")
  dog_happy=loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(800,800);
  foodstock=database.ref('Food')
  
  foodstock.on("value",readStock)
  dog2=createSprite(400,400,30,40)
  dog2.addImage(dog);
  
  //dog3=createSprite(200,100,30,40)
  //dog3.addImage=(dog1)
}


function draw() {  
  background(0,0,83)
  
  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog2.addImage(dog_happy);
  }
  textColor=("Yellow")
  text("Food="+""+foodS,400,100)
  textSize(6);
 // fill(color(100,255,255));
}

function readStock(data){
  foodS=data.val();
}


function writeStock(x){

  if(x<=0)
  {
    x=0;
  }
  else
  {
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  }
  )
 
  }



