const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion failed: [${actual}] !== [${expected}]`);
    return false;
  } else {
    console.log(`✅✅✅ Assertion passed: [${actual}] === [${expected}]`);
    return true;
  }
};

module.exports = assertEqual;