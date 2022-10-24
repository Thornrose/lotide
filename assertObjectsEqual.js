// required for eqObjects
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

// eqObjects required for Assert function
const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key of Object.keys(obj1)) {
    if (obj1[key].isArray) {   // <-- for proper syntax, i think it's this way - but it also works as  "if (Array.isArray(obj1[key]))"
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

// assert function implementation
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅ Object Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (!eqObjects(actual, expected)) {
    return console.log(`🔴🔴🔴 Object Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

assertObjectsEqual({ a: 1 }, { a: 1 });

module.exports = assertObjectsEqual;