//Create variables here
var dog
var happyDog
var foodS
var foodStock
var database
function preload()
{
	loadImage("dogimg.png");
  loadImage("dogimg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog=new (250, 250, 20, 20);
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
foodStock=foodStock-1
writeStock(foodS);
dog.addImage(dogHappy)
}
  drawSprites();
  textSize(20)
  fill("black")
  Text("Food left: "+foodStock, 50, 100)
  //add styles here

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  if(x>=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}
