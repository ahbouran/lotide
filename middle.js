const eqArrays = require('./eqArrays'); 
const assertArraysEqual = require('./assertArraysEqual')

const middle = function(array) {
  let midArray = [];
  let getLength = array.length;
  //console.log(getLength)
  if (getLength === 1 || getLength === 2 || getLength === 0) {
    return midArray;
  } else if (getLength % 2 !== 0) {
    let half = Math.round(getLength / 2);
    //console.log(half)
    midArray.push(half);
  } else if (getLength % 2 === 0) {
    let half = getLength / 2;
    midArray.push(half);
    midArray.push(half + 1);
  }
  return midArray;
};

module.exports = middle;

console.log(middle([1, 2, 3, 4, 5, 6]))