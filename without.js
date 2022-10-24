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

// should return new array, not edit existing
const without = function(source, itemsToRemove) {
  const clippedArray = [];
  for (element of source) {
    clippedArray.push(element);
  }
  for (let item of itemsToRemove) {
    for (let i = 0; i < clippedArray.length; i++) {
      if (clippedArray[i] === item) {
          clippedArray.splice(i, 1); // splice would make new array anyway? came up in a study group

        }
      }
    }
  return clippedArray;
}

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // should pass
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // should pass
// assertArraysEqual(without([1], [1]), []); // should pass
// assertArraysEqual(without(["1", "2"], [5]), [5]); // should fail 

// // testing to confirm original array not altered
// const words = ["hello", "world", "lighthouse"];
// console.log(words);
// without(words, ["lighthouse"]); 
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); // should pass
// console.log(words);