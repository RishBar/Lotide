const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    console.log(`❌❌❌ Assertion failed: [${arrayOne}] !== [${arrayTwo}]`);
    return;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      console.log(`❌❌❌ Assertion failed: [${arrayOne}] !== [${arrayTwo}]`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion passed: [${arrayOne}] === [${arrayTwo}]`);
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      continue;
    } else if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);


console.log(letterPositions('abbcccddddeeeeeffffffggggggghhhhhhhhiiiiiiiiijjjjjjjjjjkkkkkkkkkkk'));

