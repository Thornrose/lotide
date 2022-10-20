const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
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
  let counter1 = 0;
  let counter2 = 0;
  for (let item in obj1) {
    
    counter1++;
    if (obj1[item] !== obj2[item]) {
      return false;
    }
  //   // console.log("key is", item);
  //   // console.log("value is", obj1[item]);
   }
  // // console.log("counter1 counts", counter1);
    for (let item in obj2) {
    counter2++;
  //   // console.log("key is", item);
  //   // console.log("value is", obj2[item]);
    }
  // // console.log("counter2 counts", counter2);
   if (counter1 !== counter2) {
    return false;
  }
  return true;
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