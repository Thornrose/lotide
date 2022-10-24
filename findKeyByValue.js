const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// goal: function takes in object and value.
// so, this will use for..in.
// go through keys using variable, checking values.
// when you find the value you're looking for, return the actual name of the key.

const findKeyByValue = function(sourceObj, goalVal) {
  for (let key in sourceObj) {
    if (sourceObj[key] === goalVal) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);