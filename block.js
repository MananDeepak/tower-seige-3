class Block {
    constructor(x,y,width,height) {
      var options = {
          //isStatic:false,
       restitution:0.4,
       friction:0,
       
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visibility=255;
      
     World.add(world, this.body);
     
    }
    display(){
      if(this.body.speed<3){
        
        var angle=this.body.angle;
        var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
     strokeWeight(2)
     stroke("black")
      rectMode(CENTER);
      rotate(angle)
      fill("pink");
      rect(0,0,this.width,this.height);
      pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
     pop();

    }

  }
    
    Score(){
      if (this.Visibility < 0 && this.Visibility > -105){
        score=score+1;
      }
    }
    
  }

