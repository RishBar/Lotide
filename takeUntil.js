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


const takeUntil = function(arr, cb) {
  const newArr = [];
  for (const i of arr) {
    if (cb(i)) {
      return newArr;
    }
    newArr.push(i);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual([1, 2, 5, 7, 2], results1);
assertArraysEqual(["I've", "been", "to", "Hollywood"], results2);