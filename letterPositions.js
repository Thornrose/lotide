// testing
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


// goal: return all indexes in the string where each character is found.
// sounds similar to previous, but changing what values are returned.
// may need to return vaules as arrays within the object.

// so, steps:
// read sentence/word
// log indices as we read through
// output list of letters and indices.
// maybe do in two parts?

const letterPositions = function(sentence) {
  const results = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      results[letter] = [];
    }
  }
  for (let i = 0; i < sentence.length; i++) {
    results[sentence[i]].push(i);
  }
  return results;
};

module.exports = letterPositions;

const testResult = letterPositions("hello");

assertArraysEqual(testResult["h"], [0]);
assertArraysEqual(testResult["e"], [1]);
assertArraysEqual(testResult["l"], [2, 3]);
assertArraysEqual(testResult["o"], [4]);