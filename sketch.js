var bg;
var steve, steveImg;
var invisibleBlock, invisibleBlock2;
var edges;
var zombie1, zombie1a, zombieGroup;
var zombie2, zombie2a
var zombiea, zombieb, zombiec, zombied
var zombiee, zombief, zombieg, zombieh, zombiei
var bullet, bulletImg
var life = 185;
var shoot = false

function preload() {
    bg=loadImage("Assets/Background2.png");
    steveImg=loadImage("Assets/Steve.png");
    zombie1=loadImage("Assets/Zombie1.png");
    zombie1a=loadImage("Assets/Zombie1a.png");
    zombie2=loadImage("Assets/Zombie2.png");
    zombie2a=loadImage('Assets/Zombie2a.png');
    bulletImg=loadImage('Assets/Bullet.png');
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    steve=createSprite(90,windowHeight -100);
    steve.addImage(steveImg);

    invisibleBlock=createSprite(10,200,200,10);
    invisibleBlock.visible=false;

    invisibleBlock2=createSprite(10,windowHeight-30,200,10);
    invisibleBlock2.visible=false;

    zombiea=createSprite(windowWidth,random(0,height),20,10)
    zombiea.addImage(zombie1)

    zombieb=createSprite(windowWidth,random(0,height),20,10)
    zombieb.addImage(zombie1a)

    zombiec=createSprite(windowWidth,random(0,height),20,10)
    zombiec.addImage(zombie1)

    zombied=createSprite(windowWidth,random(0,height),20,10)
    zombied.addImage(zombie1a)

    //zombiee=createSprite(windowWidth,random(0,height),20,10)
    //zombiee.addImage(zombie2)

    //zombief=createSprite(windowWidth,random(0,height),20,10)
    //zombief.addImage(zombie2)

    //zombieg=createSprite(windowWidth,random(0,height),20,10)
    //zombieg.addImage(zombie2)

    //zombieh=createSprite(windowWidth,random(0,height),20,10)
    //zombieh.addImage(zombie2a)

    //zombiei=createSprite(windowWidth,random(0,height),20,10)
    //zombiei.addImage(zombie2a)



    zombiea.visible=false;
    zombieb.visible=false;
    zombiec.visible=false;
    zombied.visible=false;



    zombiea.setCollider("rectangle",0,0,100,zombiea.height)
    zombiec.setCollider("rectangle",0,0,100,zombiec.height)
    zombieb.setCollider("rectangle",0,0,100,zombieb.height)
    zombied.setCollider("rectangle",0,0,100,zombied.height)
    steve.setCollider("rectangle",0,0,50,steve.height)
}

function draw() {
    background(bg);
    if(keyIsDown(UP_ARROW)) {
        steve.y=steve.y-10;
    }
    if(keyIsDown(DOWN_ARROW)) {
        steve.y=steve.y+10;
    }
  
    if(frameCount == 60) {
        zombiea.visible=true;
        zombiea.velocityX = -5;
    }
  
    if(steve.y>zombiea.y){
        zombiea.velocityY=2;
      }
      else{
       zombiea.velocityY=-2;
      }

      if(frameCount == 200) {
        zombieb.visible=true;
        zombieb.velocityX = -5.3;
    }
  
    if(steve.y>zombieb.y){
        zombieb.velocityY=2;
      }
      else{
       zombieb.velocityY=-2;
      }

      if(frameCount == 290) {
        zombiec.visible=true;
        zombiec.velocityX = -5.5;
    }
  
    if(steve.y>zombiec.y){
        zombiec.velocityY=2;
      }
      else{
       zombiec.velocityY=-2;
      }

      if(frameCount == 360) {
        zombied.visible=true;
        zombied.velocityX = -5.5;
    }
  
    if(steve.y>zombied.y){
        zombied.velocityY=2;
      }
      else{
       zombied.velocityY=-2;
      }
    



      if(zombiea.isTouching(steve)){
        zombiea.velocityX = 0;
        life=life-35;
        zombiea.destroy();
      }

      if(zombieb.isTouching(steve)){
        zombieb.velocityX = 0;
        life=life-35;
        zombieb.destroy();
      }

      if(zombiec.isTouching(steve)){
        zombiec.velocityX = 0;
        life=life-35;
        zombiec.destroy();
      }

      if(zombied.isTouching(steve)){
        zombied.velocityX = 0;
        life=life-35;
        zombied.destroy();
      }

      if(keyDown("space")) {
        bullet=createSprite(steve.x+60,steve.y-20);
        bullet.addImage(bulletImg);
        bullet.velocityX=4;
        bullet.scale=0.2;
        shoot=true;
      }

      if(shoot==true){
        if(bullet.isTouching(zombiea)){
          zombiea.destroy();
          bullet.destroy();
        }
  
        if(bullet.isTouching(zombieb)){
          zombieb.destroy();
          bullet.destroy();
        }
      }

      steve.collide(invisibleBlock);
      steve.collide(invisibleBlock2);

      fill("white");
      rect(100,20, 185, 20);
      fill("black");
      rect(100,20,life, 20);

      if(life<=0){
        textSize(55);
        text("GAME OVER",width/2-150,height/2);
        zombiea.destroy();
        zombieb.destroy();
        zombiec.destroy();
        zombied.destroy();
        steve.destroy();
      }

    drawSprites()

    lifebar();
}

function spawnZombie() {
    if(frameCount % 60 === 0) {
        var zombie = createSprite(width-10,random(110,windowHeight-30))
        var r=Math.round(random(1,2))
        if(r==2){
            zombie.addImage(zombie1a); 
            zombie.scale=0.9;
        }
        if(r==1) {
            zombie.addImage(zombie1);
        }
         zombie.velocityX = -5;
        zombie.y=steve.y;
        zombieGroup.add(zombie);
    }
}

function lifebar(){
    push();
   // image(lifeImage, width / 2 - 130, height - steve.positionY - 400, 20, 20);
    fill("white");
    rect(width / 2 - 100, height - steve.positionY - 400, 185, 20);
    fill("black");
    rect(width / 2 - 100, height - steve.positionY - 400,life, 20);
    noStroke();
    pop();
  }

