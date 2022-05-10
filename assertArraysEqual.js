const eqArrays = require('./eqArrays'); 



const assertArraysEqual = function(actual, expected) {
  console.log("actual and expected:", actual, expected)
  let statement = true;
  if (eqArrays(actual, expected)) {
    statement = true
  } else {
    statement = false
  }
 return statement
};

module.exports = assertArraysEqual;

