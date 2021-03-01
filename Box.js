class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visiblity=255
  }
  display(){
    if(this.body.speed>5.5){
      this.visiblity=this.visiblity-5 
      //rect(this.body.position.x,this.body.position.y,this.width,this.height)
      World.remove(world,this.body)
    }
    else{
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rect(0,0,this.width,this.height)
    rotate(angle);
    pop();
  }
}
};
