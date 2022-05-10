const eqArrays = require('./eqArrays'); 
const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    //console.log(char)
    if (char !== " ") {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }
  return results;
};
  

module.exports = letterPositions;

//console.log(assertArraysEqual([1, 2 , 3], [1, 2, 3])) 
//console.log(assertArraysEqual([1, 2 , 3], [1, 2, '3'])) 

//console.log(letterPositions('lighthouse in the house')) 
//console.log('lighthouse in the house'.length)