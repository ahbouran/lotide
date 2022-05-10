const assertEqual = require('./assertEqual'); 


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

module.exports = eqArrays;

