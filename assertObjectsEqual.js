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
    //console.log(`Testing array: ${eqArrays(char1, char2)}`);
    equObjects = true
  } else if (char1 === char2 && keyCounter1 === keyCounter2)
    equObjects = true;
  
  return equObjects;
};

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log('Assertion Passed')
  } else {
    console.log('Assertion Failed')
  }
  return ''
}

const ab = {
  a: [1, 2, ,3],
  b: "2",
};

const ba = {
  a: [1, 2, 3],
  b: "2"
};

console.log(assertObjectsEqual(ab, ba))
