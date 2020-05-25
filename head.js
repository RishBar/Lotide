const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion failed: [${actual}] !== [${expected}]`);
  } else {
    console.log(`✅✅✅ Assertion passed: [${actual}] === [${expected}]`);
  }
};

const head = function(array) {
  return array[0]
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head([1]));
console.log(head([]));