const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // should fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // should fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // should pass