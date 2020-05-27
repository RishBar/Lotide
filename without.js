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


const without = function(arrayOne, arrayTwo) {
  let newArray = [...arrayOne];
  for (let i = 0; i < arrayTwo.length; i++) {
    for (let u = 0; u < arrayOne.length; u++) {
      if (arrayTwo[i] === arrayOne[u]) {
        newArray.splice(u, 1);
      }
    }
  }
  console.log(newArray, arrayOne);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);