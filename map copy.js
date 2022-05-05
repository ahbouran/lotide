const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results = map(words, word => word[0]);
console.log(results)

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

const assertArraysEqual = function(actual, expected) {
  console.log("actual and expected:", actual, expected)
  if (eqArrays(actual, expected)) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`)
  }
};

test1 = [1, 2, 3]
test2 = [1, 2, 4]
//console.log(assertArraysEqual(eqArrays(test1, test2)))

assertArraysEqual(results, ['g', 'c', 't', 'm', 't'])

