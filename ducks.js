class Duck {
  constructor(start) {
    this.x = start.split(" ")[0];
    this.y = start.split(" ")[1];
    this.heading = start.split(" ")[2];
  }
  getCoords() { return `${this.x} ${this.y} ${this.heading}` }
}

class duckMission {
  constructor(pondSize,duckStart) {
    this.xMax = pondSize[0];
    this.yMax = pondSize[2];
    this.duck = new Duck(duckStart);
  }
  makePTurn() {
    let pNext = {N: "W", W: "S", S: "E", E: "N"};
    this.duck.heading = pNext[this.duck.heading];
  }
  makeSTurn() {
    let sNext = {N: "E", W: "N", S: "W", E: "S"};
    this.duck.heading = sNext[this.duck.heading];
  }
  moveOneStep() {
    if(this.duck.heading === "N") this.duck.y ++;
    if(this.duck.heading === "E") this.duck.x ++;
    if(this.duck.heading === "S") this.duck.y --;
    if(this.duck.heading === "W") this.duck.x --;
    if(this.duck.x > this.xMax || this.duck.y > this.yMax) {
      alert("Hey, duck, stay in the pond!");
      return;
    }
  }
  moveTheDuck(instructions) {
    for(let i=0;i<instructions.length;i++) {
      switch(instructions[i]) {
        case "P":
          this.makePTurn();
          break;
        case "S":
          this.makeSTurn();
          break;
        case "F":
          this.moveOneStep();
          break;
        default:
          alert("Invalid instructions");
      }
    }
    return this.duck.getCoords();
  }
}

function mission(pond,firstDuckStart,secondDuckStart,instructions1,instructions2) {
  let firstDuckMission = new duckMission(pond,firstDuckStart);
  let firstDuckCoords = firstDuckMission.moveTheDuck(instructions1);

  let secondDuckMission = new duckMission(pond,secondDuckStart);
  let secondDuckCoords = secondDuckMission.moveTheDuck(instructions2);

  alert(`${firstDuckCoords}
${secondDuckCoords}`);
  return;
}







