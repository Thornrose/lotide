const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

// should all pass
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// some fail tests
assertArraysEqual(middle([1, 2]), [1]);
assertArraysEqual(middle([2, 6, 2, 8]), [1, 2, 3, 4]);