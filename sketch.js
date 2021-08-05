//Create variables here
var foodstock

function preload()
{
	//load images here
  dog=loadImage("images/dogImg.png")
  dog_happy=loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(800, 700);
  foodstock=database.ref('Food')
  
  foodstock.on("value",readStock)
  dog2=createSprite(100,200,30,40)
  dog2.addImage=(dog)
  
  //dog3=createSprite(200,100,30,40)
  //dog3.addImage=(dog1)
}


function draw() {  
  background(46,139,87)
  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage=(dog_happy)
    foodS=foodS-1
  }
}
function readStock(data){
  foodS=data.val()
 
  }


function writeStock(x){
  database.ref('/').update({
    Food:x
  })
 
  }



