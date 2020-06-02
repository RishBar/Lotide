const assertEqual = require('../assertEqual');
const middle = require('../middle');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); // => [2, 3]
assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true); // => [3, 4]
assertEqual(eqArrays(middle([1]), []), true);