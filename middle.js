// testing functions
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
// testing functions
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log(`✅✅✅ Array Assertion Passed: ${array1} === ${array2}`);
  } else if (!eqArrays(array1, array2)) {
    return console.log(`🔴🔴🔴 Array Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  const arrayMiddle = [];
  const midCount = array.length % 2 === 0 ? 2 : 1;
  const midPoint = Math.ceil(array.length / 2);
  if (array.length <= 2) {
    return arrayMiddle;
  }
  
  arrayMiddle.push(array[midPoint - 1]);
  if (midCount === 2) {
    arrayMiddle.push(array[midPoint]);
  }
  return arrayMiddle;
}

// pre-flight test code
// middle([1, 2, 3, 4, 5]);
// middle([1, 2, 3, 4]);
// middle([1, 2, 3, 4, 5, 6]);

// test code - should all pass
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// some fail tests
assertArraysEqual(middle([1, 2]), [1]);
assertArraysEqual(middle([2, 6, 2, 8]), [1, 2, 3, 4]);