const eqArrays = require('./eqArrays'); 
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
};

/*const words = ["ground", "control", "to", "major", "tom"];
const results = map(words, word => word[0]);
console.log(results)*/

module.exports = map; 




