const words = ["ground", "control", "to", "major", "tom"];
const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

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


const map = (arr, fn) => {
  const newArr = [];
  for (const i of arr) {
    newArr.push(fn(i));
  }
  return newArr;
};

const results1 = map(words, word => word[0]);
const lighResut = map(lighthouses, word => word[0]);

assertArraysEqual(results1, words.map(x => x[0]));
assertArraysEqual(lighResut, lighthouses.map(x => x[0]));