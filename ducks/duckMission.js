const Duck = require('./duck.js');

class DuckMission {
  constructor(pondSize, duckStart) {
    this.xMax = pondSize[0];
    this.yMax = pondSize[2];
    this.duck = new Duck(duckStart);
  }
  makePTurn() {
    let pNext = {N: 'W', W: 'S', S: 'E', E: 'N'};
    this.duck.heading = pNext[this.duck.heading];
  }
  makeSTurn() {
    let sNext = {N: 'E', W: 'N', S: 'W', E: 'S'};
    this.duck.heading = sNext[this.duck.heading];
  }
  moveOneStep() {
    if (this.duck.heading === 'N') this.duck.y ++;
    if (this.duck.heading === 'E') this.duck.x ++;
    if (this.duck.heading === 'S') this.duck.y --;
    if (this.duck.heading === 'W') this.duck.x --;
    if (this.duck.x > this.xMax || this.duck.y > this.yMax) {
      console.log('Hey, duck, stay in the pond!');
    }
  }
  moveTheDuck(instructions) {
    for (let i = 0;i < instructions.length;i++) {
      switch (instructions[i]) {
        case 'P':
          this.makePTurn();
          break;
        case 'S':
          this.makeSTurn();
          break;
        case 'F':
          this.moveOneStep();
          break;
        default:
          console.log('Invalid instructions');
      }
    }
    return this.duck.getCoords();
  }
}


module.exports = DuckMission;
