const head = require("../head");
const assertEqual = require("../assertEqual");

assertEqual(head([1, 4, 4]), 1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([2]), 2);