const assertEqual = function(actual, expected) {
  let statement;
  if (actual === expected) {
    statement = console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    statement = console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
  return statement;
};

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false
  }
  for (let i = 0; i < arrOne.length; i++) {
    //console.log(arrOne[i], arrTwo[i])
    if (arrOne[i] !== arrTwo[i]) {
      return false
    } 
  }
  return true;
}

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
    if (Array.isArray(object1[property]) && Array.isArray(object2[property])) {
      return eqArrays(object1[property], object2[property]) 
    }
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



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc))


const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd2, cd))