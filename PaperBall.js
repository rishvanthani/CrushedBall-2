class PaperBall {
    constructor() {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.7,
          'density':1.2
      }
      this.body = Bodies.circle(100,640,50,options);
      this.image=loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
     
    
      
    imageMode(RADIUS)
     image(this.image,this.body.position.x,this.body.position.y,90,90)
     
    }
  };