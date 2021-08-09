class Snow {
    constructor(x,y,r)
      {
          var options = { 
              density: 0.6, 
              friction: 0.8,
              restitution:0.4
  
          };
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("snow4.webp");
          World.add(world, this.body);
  
      }
      
      display()
      {
              
              var snowPos=this.body.position;		
              push()
              translate(snowPos.x, snowPos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,this.r+150, this.r)
              pop()
              
      }
  }
  