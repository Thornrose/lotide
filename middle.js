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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log(`✅✅✅ Array Assertion Passed: ${array1} === ${array2}`);
  } else if (!eqArrays(array1, array2)) {
    return console.log(`🔴🔴🔴 Array Assertion Failed: ${array1} !== ${array2}`);
  }
};

// Goal: take in one array and return the middle element(s) of it as a new array
// consider length - if array length is even, will display two elements. If odd, will display one.
// no middle for arrays with only one or two elements. return empty arrays
// steps:
// read array
// measure array length
// decide what to do if length is even or odd
// extract value from middle
// display as new array
// deal with edge cases: empty array, one element, two elements

const middle = function(array) {
  const arrayMiddle = [];
  const midCount = array.length % 2 === 0 ? 2 : 1;
  const midPoint = Math.ceil(array.length / 2);
  if (array.length <= 2) {
    return arrayMiddle;
  }
  //console.log("middlemost index", midPoint);
  //console.log("How many values should be displayed:", midCount);
  arrayMiddle.push(array[midPoint - 1]);
  //console.log(arrayMiddle);
  if (midCount === 2) {
    arrayMiddle.push(array[midPoint]);
    //console.log(arrayMiddle);
  } else if (midCount === 1) {
  }
  return arrayMiddle;
}

// pre-flight test code
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5, 6]);


// test code - should all pass
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// some fails
assertArraysEqual(middle([1, 2]), [1]);
assertArraysEqual(middle([2, 6, 2, 8]), [1, 2, 3, 4]);