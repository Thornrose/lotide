const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// goal: take in two OBJECTS and return true or false based on perfect === match
// (identical keys with identical values)

const eqObjects = function(obj1, obj2) {

};


// testing grounds

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };
const abc2 = { a: "1", b: "2", c: "3" };


assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

eqObjects(ab, ba); // true
eqObjects(ab, abc); // false
eqObjects(abc, abc2); // true