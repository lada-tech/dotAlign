const prompt = require('prompt-sync')();
const colors = require('colors');

function getDuckStart() {
  let start = prompt('Enter duck start coords, separated by space    >'.blue);
  return(start.split(' '));

}
function isStartValid() {
  //some serious checking, should in format Number-space-Number-N||S||E||W
}
function getPondSize() {
  let pondSize = prompt('Enter pond size, separated by space    >'.blue);
  return(pondSize.split(' '));
}
function isPondSizeValid() {
  //some serious checking, should be nNumber-space-Number
}
function getInstruction() {
  let instruction = prompt('Enter instruction    >'.blue);
  return instruction;
}
function isInstructionValid() {
  //some serious checking, should be a string made of P||S||F
}
function logger(output) {
  console.log(output.green);
}

module.exports = {getDuckStart,
                  isStartValid,
                  getPondSize,
                  isPondSizeValid,
                  getInstruction,
                  isInstructionValid,
                  logger};
