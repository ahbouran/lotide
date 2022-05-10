const assert = require('chai').assert;
const assertEqual  = require('../assertEqual');



describe("#assertEqual", () => {
  it("returns true for 1 and 1", () => {
    assert.strictEqual(assertEqual(1, 1))
  })
  it("returns false for 'Lighthouse Labs and Bootcamp", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"))
  })
})