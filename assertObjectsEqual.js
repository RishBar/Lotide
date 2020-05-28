const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (typeof(object1[key]) === 'object') {
      for (let x in object1[key]) {
        if (Object.keys(object1[key]).length !== Object.keys(object2[key]).length || object1[key].length !== object2[key].length) {
          return false;
        } else if (object1[key][x] !== object2[key][x]) {
          return false;
        }
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj3 = { a: 1, b: 2, c: { a: 1, b: 2 }, d: { x: 1, y: 2 } };
const obj4 = { d: { x: 1, y: 2 }, a: 1, c: { a: 1, b: 2 }, b: 2 };

assertObjectsEqual(obj3, obj4); // => true

const obj5 = { a: 1, b: 2, c: { a: 1, b: 3 }, d: { x: 1, y: 2 } };
const obj6 = { d: { x: 1, y: 2 }, a: 1, c: { a: 1, b: 2 }, b: 2 };

assertObjectsEqual(obj5, obj6); // => false