
// Assert checker function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

// Test Case 1:
// const result0 = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result0.length, 2); // ensure we get back two elements
// assertEqual(result0[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result0[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2:
// const result = tail([5, 7, 23]);
// assertEqual(result.length, 2);
// assertEqual(result[0], 7);
// assertEqual(result[1], 23);

// // Test Case: original array not modified
// const numbers = ["four", "eight", "fifteen", "sixteen"];
// tail(numbers);
// assertEqual(numbers.length, 4);

// // Test Cases: array with one element, empty array

// const oneEleResult = tail(["solo"]);
// assertEqual(oneEleResult.length, 0);

// const emptyResult = tail([]);
// assertEqual(emptyResult.length, 0);

