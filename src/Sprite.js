export default class Sprite {
  constructor(context, image) {
    this._position = {x: 0, y:0};
    this._velocity = {x: 0, y:0};
    this._rotation = 0;
    
    this._image = image;
    this._context = context;    
  }
  
  animate(){
    const _this = this;
    setInterval(() => {
      _this.updatePosition(0.05);
      _this.draw();
    }, 50);
  }
  
  draw(){
    this._context.setTransform(1.0, 0, 0, 1.0, this._position.x, this._position.y);
    this._context.rotate(this._rotation * Math.PI/180 );    
    this._context.drawImage( this._image, - this._image.width/2, - this._image.height/2 );    
  }

  updatePosition(elapsedSeconds){
    this._position = {
      x: this.position.x += this.velocity.x * elapsedSeconds,
      y: this.position.y += this.velocity.y * elapsedSeconds
    }
  }

  set position(arg){
    if(this.isValidObjectWithXY(arg)){
      this._position = arg;
    }
  };
  
  get position(){
    return this._position;
  };
  
  set velocity(arg){
    if(this.isValidObjectWithXY(arg)){
      this._velocity = arg;
    }
  };
  
  get velocity(){
    return this._velocity;
  };
  
  isValidObjectWithXY(obj){
    return obj 
      && obj.x 
      && obj.y 
      && typeof(obj.x) == "number" 
      && typeof(obj.y) == "number";
  };
  
  set rotation(arg){
    if(arg && typeof(arg) == "number") {
      let rot = arg
      while(rot < 0) {
        rot = rot + 360;
      }
      this._rotation = rot % 360;
    }  
  };
  
  get rotation() {
    return this._rotation;
  }
}
