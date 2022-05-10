const assertEqual  = require('./assertEqual');


const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (value === object[key]) {
      return key
    }
  }
};

module.exports = findKeyByValue;

/*const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"))
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"))
console.log(findKeyByValue(bestTVShowsByGenre, "That 70's show"))*/ 
