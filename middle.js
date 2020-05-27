const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion failed: [${actual}] !== [${expected}]`);
  } else {
    console.log(`✅✅✅ Assertion passed: [${actual}] === [${expected}]`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(array) {
  let arrayMid = (Math.round(array.length / 2) - 1);
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    return [array[arrayMid], array[arrayMid + 1]];
  } else {
    return [array[arrayMid]];
  }
};

assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); // => [2, 3]
assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true); // => [3, 4]
assertEqual(eqArrays(middle([1]), []), true);