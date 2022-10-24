const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// goal: take in two OBJECTS and return true or false based on perfect === match
// (identical keys with identical values)
// simple: two objects are equal when they have same number of keys and key values match keys
// so, steps:
// read object length?
// read keys in both objects.
// read values of all keys.
// confirm keys match.

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key of Object.keys(obj1)) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

// below is OLD - awkward wrong approach, at least not easy to edit into something that can handle arrays
// had the right idea in some places, though

// const eqObjects = function(obj1, obj2) {
//   let counter1 = 0;
//   let counter2 = 0;
//   for (let item in obj1) {
//     counter1++;
//     if (obj1[item] !== obj2[item]) {
//       return false;
//     }
//   }
//   for (let item in obj2) {
//     counter2++;
//   }
//   if (counter1 !== counter2) {
//     return false;
//   }
//   return true;
// };

// testing grounds
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);