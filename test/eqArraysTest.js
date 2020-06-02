const assert = require('chai').assert;
const eqArrays   = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("returns false for [5], []", () => {
    assert.isNotTrue(eqArrays([5], []));
  });
  it("returns [5,4,5,6,7,3] for [5,4,5,6,7,3]", () => {
    assert.isTrue(eqArrays([5,4,5,6,7,3], [5,4,5,6,7,3]));
  });
});