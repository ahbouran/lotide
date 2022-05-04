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

const assertEqual = function(actual, expected) {
  let statement = '';
  if (eqArrays(actual, expected)) {
    statement += `👍 Assertion Passed: ${actual} === ${expected}`
  } else {
    statement += `👎 Assertion Failed: ${actual} !== ${expected}`
  }
  return statement
};

console.log(assertEqual([1, 2 , 3], [1, 2, 3])) 
console.log(assertEqual([1, 2 , 3], [1, 2, '3'])) 