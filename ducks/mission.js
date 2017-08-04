const {getDuckStart,
       logger,
       getPondSize,
       getInstruction} = require('./utils.js');
const Duck = require('./duck.js');
const Pond = require('./pond.js');
const DuckMission = require('./duckMission');


function mission() {

let duck = new Duck(...getDuckStart());
let pond = new Pond(...getPondSize());
let instruction = getInstruction();

let newMission = new DuckMission(duck, pond);
let duckStopCoords = newMission.moveTheDuck(instruction);

logger(duckStopCoords);

}

module.exports = mission;
