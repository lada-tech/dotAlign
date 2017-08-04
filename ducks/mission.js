const {getDuckStart,
       logger,
       getPondSize,
       getInstruction} = require('./utils.js')

function mission() {
let start = getDuckStart();
let pondSize = getPondSize();
let instruction = getInstruction();
logger(`Start:   ${start}`);
logger(`Pond:   ${pondSize}`);
logger(`Instruction:   ${instruction}`);

}

module.exports = mission;
