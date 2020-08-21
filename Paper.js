class Paper{
    constructor(){
       var options = {
           isStatic : false,
           restitution : 0.3,
           friction : 0,
           density: 1.2
          
       }
    
    this.body = Bodies.circle(100,400,50,options);
    this.image = loadImage("images/paper.png")
    World.add (world,this.body)
    }

    display(){
     // push();
      //translate(this.body.position.x,this.body.position.y)
      //rotate(this.body.angle)
     // imageMode(CENTER)
    //  image(this.image,this.body.position.x,this.body.position.y,50,50)
    //ellipseMode(RADIUS)
   // ellipse(this.body.position.x,this.body.position.y,30)
   fill("white")
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,50,50)

    //  pop();
  }
}