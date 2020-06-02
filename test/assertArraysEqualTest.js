const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertArraysEqual([1,2,3,4,5], [1,2,3,4,5]);
assertEqual(eqArrays([1,2,3,4,5], [1,2,3,4,5]), true);