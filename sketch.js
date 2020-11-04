var wall , thickness;
var bullet,speed, weight;


function setup() {
  createCanvas(1600,400);
 bullet = createSprite(400, 200, 50, 5);
 bullet.shapeColor='brown';
 wall = createSprite (1200,200,thickness,height/2)
 wall.shapeColor=color(230,230,230);
 thickness = random (22,83)
 speed = random (40,90)
 weight = random (400,1500);
 bullet.velocityX = speed;


 



}


function draw() {
  background("orange");  

  
      
    

    
    if (hascollided (bullet,wall)){
    
    bullet.velocityX = 0 ; 
    
    
    var damage = 0.5  *  weight   * speed * speed/(thickness * thickness * thickness);
    
    
    if (damage>10){
    wall.shapeColor = color (255,0,0);
    
    }
    
    if (damage<10){
    
    wall.shapeColor = color (0,255,0)
    
    }
    
  
}
         
    

  drawSprites();
  }
    
  function hascollided (lbullet,lwall){

    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x
    if (bulletRightEdge>= wallLeftEdge){
    
      return true
    }
    return false
    
    
    }   
















