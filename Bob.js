class Bob{
    constructor(x,y,radius) {
      var options = {
        isStatic:false,
        restitution:1,
        friction:0,
        density:0.8
      }
      this.body = Matter.Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.radius);
    }
}