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


const without = function(source, itemsToRemove) {
  let newArr = [...source];
  for (let i = 0; i < newArr.length; i++) {
    //console.log(source[i], itemsToRemove[i])
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArr[i] === itemsToRemove[j]) {
        newArr.splice(i, 1)
      }
    }
  }
  return newArr;
}
console.log(without(['hello', 'see ya', 'bye', 'goodbye'], ['goodbye', 'hello']))
console.log(without([1, 2, 3], [1])) 