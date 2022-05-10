const assertEqual  = require('./assertEqual');
const eqArrays = require('./eqArrays'); 

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

module.exports = eqObjects;
