const assert = require('chai').assert;
const assertArraysEqual   = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns true for [1,2,3], [1,2,3]", () => {
    assert.strictEqual(assertArraysEqual([1,2,3], [1,2,3]), true);
  });
  it("returns false for [1,2,3], ['dawg']", () => {
    assert.strictEqual(assertArraysEqual([1,2,3], ['dawg']), false);
  });
  it("returns true for ['dawg'] ['dawg']", () => {
    assert.strictEqual(assertArraysEqual(['dawg'], ['dawg']), true);
  });
});