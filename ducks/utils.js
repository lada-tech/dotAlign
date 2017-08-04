const prompt = require('prompt-sync')();
const colors = require('colors');

function getDuckStart() {
  let start = prompt('Enter duck start coords, separated by space    >'.blue);
  let isValid = isStartValid(start);

  while (!isValid) {
    console.log('Invalid start coords'.red);
    start = prompt('Enter duck start coords, separated by space    >'.blue);
    isValid = isStartValid(start);
  }
  return (start.split(' '));
}
function isStartValid(str) {

  let allowed = new Set(['N', 'S', 'E', 'W']);
  let start = str.split('').filter(function(el) {
    return el !== ' ';
  }).slice(0, 3);

  if ( (typeof parseInt(start[0]) === 'number' &&
      !Number.isNaN(parseInt(start[0]))) &&
      (typeof parseInt(start[1]) === 'number' &&
      !Number.isNaN(parseInt(start[1]))) &&
      allowed.has(start[2]) ) return true;
  else return false;
}
function getPondSize() {

  let pondSize = prompt('Enter pond size, separated by space    >'.blue);
  let isValid = isPondSizeValid(pondSize);
  while (!isValid) {
    console.log('Pond size is not valid'.red);
    pondSize = prompt('Enter pond size, separated by space    >'.blue);
    isValid = isPondSizeValid(pondSize);
  }
  return (pondSize.split(' '));
}
function isPondSizeValid(str) {

  let size = str.split('').filter(function(el) {
    return el !== ' ';
  }).slice(0, 2);

  if ( (typeof parseInt(size[0]) === 'number' &&
      !Number.isNaN(parseInt(size[0]))) &&
      (typeof parseInt(size[1]) === 'number' &&
      !Number.isNaN(parseInt(size[1]))) ) return true;
  else return false;
}
function getInstruction() {
  let instruction = prompt('Enter instruction    >'.blue);
  return instruction;
}

function logger(output) {
  if (Array.isArray(output)) console.log(`Result:   ${output.join(' ')}`.green);
  else console.log(`Result:    ${output}`.red);
}

module.exports = {getDuckStart,
                  isStartValid,
                  getPondSize,
                  isPondSizeValid,
                  getInstruction,
                  logger};
