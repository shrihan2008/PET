//Create variables here
var foodstock
var readstock
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
  readstock=database.on
  foodstock.on("value",readstock)
  dog2=createSprite(100,200,30,40)
  dog2.addImage=(dog)
  
  dog3=createSprite(200,100,30,40)
  dog3.addImage=(dog1)
}


function draw() {  
  background(46,139,87)
  drawSprites();
  //add styles here

}



