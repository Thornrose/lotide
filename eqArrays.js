//AssertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// cannot compare arrays directly.
//need to compare each element
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

// Test code
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should pass
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // should fail
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // should fail
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should pass

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // should pass