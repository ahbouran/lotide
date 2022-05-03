const assertEqual = function(actual, expected) {
  let statement;
  if (actual === expected) {
    statement = console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    statement = console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
  return statement;
};

const tail = function(array) {
  let lastItems = [];
  for (let i = 1; i < array.length; i++) {
    lastItems.push(array[i]);
    console.log(lastItems);
  }
  return lastItems;
};


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3);
