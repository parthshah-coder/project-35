//Create variables here
var dog,happydog,database,food,foodStock;
var dog1,dog2;


function preload()
{
  //load images here
  dog1 =loadImage("dogImg.png");
  dog2 =loadImage("dogImg1.png")

}

function setup() {
  createCanvas(500,500);
  database= firebase.database();
  foodStock = database.ref(food);

  dog=createSprites(250,300,10,10);
  dog.addImage(dog1);
  dog.scale=0.6;
  happydog=createSprites(250,300,10,10);
  happydog.addImage(dog2);
  happydog.scale=0.3;
  happydog.visible=false;
}


function draw() {  
  background("#caadc2");
  if(keyWentdown(UP_ARROW)){
    writeStock(foodS);
    happydog.visible=true
    dog.visible=false
  }
  drawSprites();
  //add styles here
  fill("black");
  textSize(20);
  stroke(5);
  text("Press Up Arrow Key To Feed My pet",80,70);

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
database.ref('/').update({
  food:x
})
}






