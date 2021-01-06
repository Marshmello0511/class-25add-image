class Bird extends BaseClass{
    constructor(x, y) {   //user shouldn't enter the value of width and height
    
    super(x,y,50,50);  //super is a keyword used to call the parent class
    this.image=loadImage("sprites/bird.png");
}

display(){
    this.body.position.x=mouseX;
    this.body.position.y=mouseY;
    super.display();
}

}