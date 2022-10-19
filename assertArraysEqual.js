
// eqArrays function
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


// light testing
assertArraysEqual([4, 5, 6], [3, 5, 8]);
assertArraysEqual([1], [1]);