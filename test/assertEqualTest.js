const assert = require('chai').assert;
const assertEqual   = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true for 3, 3", () => {
    assert.strictEqual(assertEqual(3, 3), true);
  });
  it("returns false for 2, 4", () => {
    assert.strictEqual(assertEqual(2, 4), false);
  });
  it("returns true for 'dawg' 'dawg'", () => {
    assert.strictEqual(assertEqual('dawg', 'dawg'), true);
  });
});