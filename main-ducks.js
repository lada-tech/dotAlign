const colors = require('colors');
const prompt = require('prompt-sync')();
const mission = require('./ducks/mission.js');

console.log('Ready to send ducks on a mission\n\n'.blue);

let isComplited = false;
while (!isComplited) {
 mission();
 let answer = prompt('Do you want to send another duck? Y/N    >'.blue);
 if (answer === 'N') {
  isComplited = true;
 }
}

