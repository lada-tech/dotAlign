const {getDuckStart,
       logger,
       getPondSize,
       getInstruction} = require('./utils.js');
const Duck = require('./duck.js');
const Pond = require('./pond.js');
function mission() {

let duck = new Duck(...getDuckStart());
//let pondSize = getPondSize();
let pond = new Pond(...getPondSize());
let instruction = getInstruction();
logger(`Start:   ${duck.x}  ${duck.y}   ${duck.heading}`);
logger(`Pond:   ${pond.maxX}   ${pond.maxY}`);
logger(`Instruction:   ${instruction}`);

}

module.exports = mission;
