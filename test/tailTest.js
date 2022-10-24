const tail = require("../tail");
const assertEqual = require("../assertEqual");

// Test Case 1-3:
const result0 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result0.length, 2); // ensure we get back two elements
assertEqual(result0[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result0[1], "Labs"); // ensure second element is "Labs"

// Test Case 4-6:
const result = tail([5, 7, 23]);
assertEqual(result.length, 2);
assertEqual(result[0], 7);
assertEqual(result[1], 23);

// Test Case 7: original array not modified
const numbers = ["four", "eight", "fifteen", "sixteen"];
tail(numbers);
assertEqual(numbers.length, 4);

// Test Cases 8-9: array with one element, empty array
const oneEleResult = tail(["solo"]);
assertEqual(oneEleResult.length, 0);

const emptyResult = tail([]);
assertEqual(emptyResult.length, 0);