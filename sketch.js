var tom,jerry,background;
var catImg,catImg2,catImg3,mouseImg,bgImg;


function preload() {
    //load the images here
    catImg = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimation("cat4.png");

    mouseImg = loadAnimation("mouse1.png","mouse2.png","mouse3.png");
    mouseImg2 = loadAnimation("mouse4.png");

    bgImg = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(700,700,30,30);
    tom.addAnimation(catImg);

    jerry = createSprite(100,700,20,20);
    jerry.addAnimation(mouseImg);

    background = createSprite(500,400,1000,800);

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    
    if(catImg.x-mouseImg.x < (cat.width/2 - mouseImg.width/2)){
       tom.addAnimation(catImg3);
       tom.changeAnimation(catImg3);
       
       jerry.addAnimation(mouseImg2);
       jerry.changeAnimation(mouseImg2);
    }
    
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation(catImg2);
        tom.changeAnimation(catImg2);
    }

}
