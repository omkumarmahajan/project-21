

var bullet,wall;
var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 50, 50);
 bullet.shapeColor="white"
 wall = createSprite(1200,200,thickness,height/2)
 wall.shapeColor=color(80,80,80)
  speed=random(59,90)
  weight=random(30,52)
  thickness=random(22,83)
  bullet.velocityX=speed;
  
}

function draw() {
  background("blue");  
  drawSprites();
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor="red"
    }
    else wall.shapeColor="pink"
  }
 }
 
  