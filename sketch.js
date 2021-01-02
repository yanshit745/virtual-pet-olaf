var dog, happyDog, database, foodS, foodStock
var dogImg, HappydogImg;
var milkbottle, milkbottleImg;


function preload()
{
  dogImg = loadImage("dog.png");
  dogHappyImg = loadImage("happydog.png");
  milkImg = loadImage("milkbottle.png");
  

}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;

  emo = createSprite(200,200,1,1);
  
  food = database.ref('food');
  food.on("value",read);
  food.set(20);
  
  milkbottle = createSprite(140,435,10,10);
  milkbottle.addImage(milkbottleImg);
  milkbottle.scale = 0.025;

  milkbottle1 = createSprite(210,280,10,10);
  milkbottle1.addImage(milkbottleImg);
  milkbottle1.scale = 0.025;
  milkbottle1.visible = false;


  for (var i = 5; i < 500; i=i+10) 
{

var dot = createSprite(i, 5, 3, 3);
dot.shapeColor = "yellow";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(i, 495, 3, 3);
dot1.shapeColor = "yellow";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(495,i, 3, 3);
dot1.shapeColor = "yellow";

}
for (var i = 5; i < 500; i=i+10) 
{

var dot1 = createSprite(5,i, 3, 3);
dot1.shapeColor = "yellow";

}
}


function draw() {  
  background(46,139,87)

  if(foodS !== 0){
  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happydogImg);
    milkbottle1.visible = true;

   
  }

  if(keyWentUp(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg);
    milkbottle1.visible = false;
  }
}

if(food == 0){
  
  dog.addImage(dogImg);
  food = 20;

}



  drawSprites();
  textSize(17);
  fill("yellow");
  text("hey!im your buddy Olaf! I am hungry please feed me  ",100,150);
  fill("white");
  text("Long Press up arrow key to feed your pet Dog GENO",50,50);
  fill("cyan");
  text("Milk Bottles Remaining  "+food,170,440);
}

function read(data)
{
  food = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    food:x
  })
}

