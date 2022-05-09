const assertEqual = require('./assertEqual'); 


const tail = function(array) {
  let lastItems = [];
  for (let i = 1; i < array.length; i++) {
    lastItems.push(array[i]);
    console.log(lastItems);
  }
  return lastItems;
};

module.exports = tail

