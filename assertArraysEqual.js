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

module.exports = assertArraysEqual;