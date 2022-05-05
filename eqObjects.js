const assertEqual = function(actual, expected) {
  let statement;
  if (actual === expected) {
    statement = console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    statement = console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
  return statement;
};

const eqObjects = function(object1, object2) {
  let isTheSame = true;
  let key1 = Object.keys(object1)
  let key2 = Object.keys(object2)
  //console.log(key1, key2)
  let key1Length = key1.length
  let key2Length = key2.length
  if (key1Length !== key2Length) {
    return false
  } 
  for (let property of key1) {
    //console.log(object1[property], object2[property])
    if (object1[property] !== object2[property]) {
      isTheSame = false
      return isTheSame
    } else {
      isTheSame = true
    }
  }
  return isTheSame
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

//assertEqual(ab, ba)
console.log(eqObjects(ab, ba))