const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {

  it("should return two elements when given array of 3 elements", () => {
    assert.lengthOf(tail(["Hello", "Lighthouse", "Labs"]), 2);

  });

  it("should return old element[1] at element[0] and [2] at [1] when given array of 3 strings", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

  });

  it("should return old element[1] at element[0] and [2] at [1] when given array of 3 numbers", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);

  });

  it("should not modify the original array", () => {
    const arr = [true, false, true];
    const result = tail(arr);
    assert.deepEqual(arr, [true, false, true]);

  });

  it("should return empty array when given array with only one element", () => {
    assert.deepEqual(tail([1]), []);

  });

  it("should return empty array when given empty array", () => {
    assert.deepEqual(tail([]), []);

  });


});