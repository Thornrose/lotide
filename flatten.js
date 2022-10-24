// eqArrays and assertArraysEqual functions for testing
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

// limitation: flatten function to handle one level of nested arrays (more would need recursion)
// Goal: take in one array containing nested arrays, output array containing vaules only, no nesting.
// read array
// check if any values within are arrays
// if so, extract vaules from that array and add to new array
// if not, copy value to new array
// output new array
// tip: utilize .isArray() method

const flatArray = [];
const flatten = function(source) {
  source.forEach((item) => {
    if (Array.isArray(item)) {
      flatten(item);
    } else {
    flatArray.push(item);
    }
  })
  return flatArray;
};

assertArraysEqual(flatten([1, 2, [3, 4, [5]]]), [1, 2, 3, 4, 5]);
