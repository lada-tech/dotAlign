class Duck {
  constructor(start) {
    let [x, y, heading] = start.split(' ');
    this.x = x;
    this.y = y;
    this.heading = heading;
  }
  getCoords() { return `${this.x} ${this.y} ${this.heading}` }
}

module.exports = Duck;
