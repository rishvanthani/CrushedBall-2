class Box {
    constructor(x, y) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 0,0, options);
      this.width = 0;
      this.height = 0;
      this.image=loadImage("Bin.png")
    
      World.add(world, this.body);
    }
    display(){
     
      
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y);
      
    }
  };