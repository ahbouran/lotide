const assertEqual = function(actual, expected) {
  let statement;
  if (actual === expected) {
    statement = console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    statement = console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
  return statement;
}; 

const eqArrays = function(arrOne, arrTwo) {
  let isTheSame = true;
  for (let i = 0; i < arrOne.length; i++) {
    //console.log(arrOne[i], arrTwo[i])
    if (arrOne[i] !== arrTwo[i]) {
      isTheSame = false
    } 
  }
  return isTheSame;
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true);

