const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log(`✅✅✅ Array Assertion Passed: ${array1} === ${array2}`);
  } else if (!eqArrays(array1, array2)) {
    return console.log(`🔴🔴🔴 Array Assertion Failed: ${array1} !== ${array2}`);
  }
};


const map = function(array, callback) { // taking in two arguments, ARRay and CallBack. Can try initializing with => to see if it works
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const words = ["what", "do", "you", "get", "when", "you", "fall", "in", "love"];
const results1 = map(words, word => word[0]);

const numbers = [5, 8, 2, 77, 88, 102];
const results2 = map(numbers, number => number * 2);

const trick = [5, "5", 10, "ten"];
const results3 = map(trick, element => typeof element === "number" ? true : false);

assertArraysEqual(results1, ["w", "d", "y", "g", "w", "y", "f", "i", "l"]);
assertArraysEqual(results2, [10, 16, 4, 154, 176, 204]);
assertArraysEqual(results3, [true, false, true, false]);