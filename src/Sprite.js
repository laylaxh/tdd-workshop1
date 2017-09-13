export default class Sprite {
  constructor() {
    this._position = { x: 0.0, y: 0.0 }
    this._velocity = { x: 0.0, y: 0.0 }
    this._rotation = 0;
  }

  updateSelf(elapsedTime) {
    if (!elapsedTime) {
      return;
    }
    this._position.x = this._position.x + this._velocity.x * elapsedTime;
    this._position.y = this._position.y + this._velocity.y * elapsedTime;
  }

  get position() {
    return this._position;
  }
  set position(arg) {
    if(this.isValidVectorWithXY(arg) ){
      this._position = arg;
    }
  }
  get velocity() {
    return this._velocity;
  }
  set velocity(arg) {
    if(this.isValidVectorWithXY(arg) ){
      this._velocity = arg;
    }
  }
  isValidVectorWithXY(arg){
    return typeof arg == "object"
      && arg.x
      && arg.y
      && typeof arg.x == "number"
      && typeof arg.y == "number";
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(arg) {
    if (typeof(arg) == "number") {
      this._rotation = arg;
    }
  }
}
