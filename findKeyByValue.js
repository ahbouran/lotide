const assertEqual = function(actual, expected) {
  let statement;
  if (actual === expected) {
    statement = console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    statement = console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
  return statement;
};

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (value === object[key]) {
      return key
    }
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"))
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"))
console.log(findKeyByValue(bestTVShowsByGenre, "That 70's show"))
