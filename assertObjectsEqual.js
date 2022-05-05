const eqObjects = function(object1, object2) {
  let equObjects = false;
  let keyCounter1 = 0;
  let keyCounter2 = 0;
  let char1;
  let char2;
  for (let prop in object1) {
    keyCounter1 += prop.length;
    char1 = object1[prop];
  }
  for (let prop in object2) {
    keyCounter2 += prop.length;
    char2 = object2[prop];
  }

  if (Array.isArray(char1) && Array.isArray(char2)) {
    console.log(`Testing array: ${eqArrays(char1, char2)}`);
    equObjects = true
  } else if (char1 === char2 && keyCounter1 === keyCounter2)
    equObjects = true;
  
  return equObjects;
};

const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let statement = '';
  if (eqObjects(actual, expected)) {
    statement += console.log(`👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    statement += console.log(`👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
  return statement
};


const ab = {
  a: "1",
  b: "2",
};

const ba = {
  b: "2",
  a: "1"
};

console.log(assertEqual(eqObject(ab, ba))
console.log(eqObjects(ab, ba))




