const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion failed: [${actual}] !== [${expected}]`);
  } else {
    console.log(`✅✅✅ Assertion passed: [${actual}] === [${expected}]`);
  }
};




const countLetters = function(word) {
  let numOfEachLetter = {};
  for (let letter of word) {
    if (letter === ' ') {
    } 
    else if (!numOfEachLetter[letter]) {
      numOfEachLetter[letter] = 1;
    } else {
      numOfEachLetter[letter] += 1;
    }
  }
  return numOfEachLetter;
};


console.log(countLetters('lighthouse labs is super chill'));