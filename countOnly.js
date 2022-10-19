
// "take in a collection of items (array of strings) and return counts for a specific subset (object)"
// result is based on truthiness


//for testing
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// should RETUTRN an object - a "report" of how many of each specified string exists in array.
// first thoughts - can make empty object, add keys based on itemsToCount, and update values of keys before outputting

// TIMER 25 min so far - resume before continuing
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (results[item]) {
    results[item] += 1;
  } else {
    results[item] = 1;
  }
  }
  return results;
}

//testing
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}); // take out quotes later? shouldn't need?

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);