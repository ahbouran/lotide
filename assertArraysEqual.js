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
  //console.log("actual and expected:", actual, expected)
  if (eqArrays(actual, expected)) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`)
  }
};

console.log(assertEqual([1, 2 , 3], [1, 2, 3])) 
console.log(assertEqual([1, 2 , 3], [1, 2, '3'])) 

const without = function(source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    console.log(source, itemsToRemove)
  }
}

console.log(without(['hello'], ['goodbye']))