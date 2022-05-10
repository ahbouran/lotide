const assertEqual  = require('./assertEqual');

const countLetters = function(sentence) {
  const results = {}; 
  for (let letters of sentence) {
    //console.log(letters)
    if (results[letters]) {
      //console.log(results)
      results[letters] += 1;
    } else {
      results[letters] = 1
    }
    delete results[' ']
  } 
  return results
};

module.exports = countLetters;