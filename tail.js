const assertEqual = require('./assertEqual'); 


const tail = function(array) {
  let lastItems = [];
  for (let i = 1; i < array.length; i++) {
    lastItems.push(array[i]);
  }
  return lastItems;
};

module.exports = tail

