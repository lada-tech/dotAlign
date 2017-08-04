class Duck {
  constructor(x, y, heading) {

    this.x = x;
    this.y = y;
    this.heading = heading;
  }
  getCoords() { return [this.x, this.y, this.heading]; }
}

module.exports = Duck;
