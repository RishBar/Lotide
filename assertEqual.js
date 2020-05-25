const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion failed: [${actual}] !== [${expected}]`);
  } else {
    console.log(`✅✅✅ Assertion passed: [${actual}] === [${expected}]`);
  }
};

// TEST CODE
assertEqual("yo", "yo");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 1);
