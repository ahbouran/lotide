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
  let statement = '';
  if (eqArrays(actual, expected)) {
    statement += `👍 Assertion Passed: ${actual} === ${expected}`
  } else {
    statement += `👎 Assertion Failed: ${actual} !== ${expected}`
  }
  return statement
};

//console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); 

const middle = function(array) {
  let midArray = [];
  let getLength = array.length
  //console.log(getLength)
  if (getLength === 1 || getLength === 2 || getLength === 0) {
    return midArray; 
  } else if (getLength % 2 !== 0) {
    let half = Math.round(getLength / 2)
    //console.log(half)
    midArray.push(half)
  } else if (getLength % 2 === 0) {
    let half = getLength / 2
    midArray.push(half)
    midArray.push(half + 1)
  }
  return midArray
}

console.log(middle([1, 2, 3, 4, 5, 6]))