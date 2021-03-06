class Arrow extends BaseClass {
    constructor(x,y){
      super(x,y,150,100);
      this.image = loadImage("Images/arrow.png");
      //this.trajectory =[];
    }
  
    display() {
      super.display();
    }
  }