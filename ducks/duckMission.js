const colors = require('colors');

class DuckMission {
  constructor(duck, pond) {
    this.duck = duck;
    this.pond = pond;
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
          console.log('Invalid instructions'.red);
      }
    }

     if(!this.pond.isDuckInside(this.duck.x, this.duck.y)) return false;
     else return this.duck.getCoords();
  }
}


module.exports = DuckMission;
