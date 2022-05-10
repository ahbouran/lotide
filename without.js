const eqArrays = require('./eqArrays');
const assertEqual  = require('./assertEqual');

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

module.exports = without;
