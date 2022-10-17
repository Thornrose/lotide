
// Function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    return console.log("🔴🔴🔴 Assertion Failed: " + actual + " !== " + expected);
  }
};

// Test code
assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("words and words", "words and worDs");
// assertEqual(23, 22);
// assertEqual("Yes", "Yes");