const eqObjects = require('./eqObjects'); 

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let statement = true;
  if (eqObjects(actual, expected)) {
    statement += console.log(`👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    statement += console.log(`👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
  return statement
};


module.exports = assertObjectsEqual;