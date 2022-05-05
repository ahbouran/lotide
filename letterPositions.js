const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    //console.log(char)
    if (char !== " ") {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }
  return results;
};
  





console.log(letterPositions('lighthouse in the house')) 
//console.log('lighthouse in the house'.length)






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

//console.log(assertArraysEqual([1, 2 , 3], [1, 2, 3])) 
//console.log(assertArraysEqual([1, 2 , 3], [1, 2, '3'])) 

//console.log(letterPositions('lighthouse in the house')) 
//console.log('lighthouse in the house'.length)