const colors = require('colors');

class Pond {
  constructor(maxX, maxY) {

    this.maxX = maxX;
    this.maxY = maxY;
  }
  isDuckInside(x, y) {
    if(x > this.maxX ||
       y > this.maxY ||
       x < 0 || y < 0) {
      return false;
    }
    else {
      return true;
    }
  }
}

module.exports = Pond;
