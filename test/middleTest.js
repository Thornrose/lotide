const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {

  it("should return empty array when given array with only one element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return empty array when given array with only two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return one middle element when given array with odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return two middle elements when given array with even number of elements", () => {
    assert.deepEqual(middle(["one", "two", "three", "four", "five", "six"]), ["three", "four"]);
  });
  
});