 const assertEqual = function(actual, expected) {
  let statement;
  if (actual === expected) {
    statement = console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    statement = console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
  return statement;
};

const countLetters = function(sentence) {
  const results = {}; 
  for (let letters of sentence) {
    //console.log(letters)
    if (results[letters]) {
      //console.log(results)
      results[letters] += 1;
    } else {
      results[letters] = 1
    }
    delete results[' ']
  } 
  return results
};

console.log(countLetters('lighthouse in the house'))
console.log(countLetters('like a rolling stone'))