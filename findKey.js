const assertEqual = function(actual, expected) {
  let statement;
  if (actual === expected) {
    statement = console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    statement = console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
  return statement;
};

const findKey = function(object, callback) {
  for (let key in object) {
    //console.log("Keys are", key, "Values are", object[key]) 
    if (callback(object[key])) {
      return key
    } 
  } 
  return undefined
};



console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 7)) 

let objExam = {
  "Blue Hill" : {stars:3}
}
//console.log(objExam['Blue Hill'].stars)