# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @thornrose/lotide`

**Require it:**

`const _ = require('@thornrose/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently available:
- ✅ = tested with Mocha testing framework
- 🛑 = requires further testing and refactoring

### __Array Functions__
* 🛑 `countOnly(allItems, itemsToCount)`: Takes in an array of strings and a key string, returning the number of instances of the key string in the array.
####
* ✅ `eqArrays(array1, array2)`: Takes in two arrays and returns a boolean value based on whether they are deeply equal or not.
  * ✅ `assertArraysEqual(array1, array2)`: (CLI test) Takes in two arrays and logs whether they are deeply equal or not.
####
* 🛑 `flatten(array)`: Takes in an array with any level of nested arrays and returns an un-nested array with all values at the top level.

* ✅ `head(array)`: Takes in an array and returns the first element (index 0).
* 🛑 `map(array, callback)`: Takes in an array and a callback function, returning a corresponding array where the values of the original array have all been modified by the callback.
* ✅ `middle(array)`: Takes in an array and returns the value(s) at the middle index(es) (one or two values depending on the length of the array).
* ✅ `tail(array)`: Takes in an array, removes the first element (index 0) and returns a new array.
* 🛑 `takeUntil(array, callback)`: Takes in an array and a callback function, builds a new array that ends when it reaches a value provided by the callback.
* 🛑 `without(array, itemsToRemove)`: Takes in an array and removes all matching instances of elements given in a second array (itemsToRemove).

### __Object Functions__
* 🛑 `eqObjects(obj1, obj2)`: Takes in two objects and returns a boolean value based on whether they are deeply equal or not.
  * 🛑 `assertObjectsEqual(actual, expected)`: (CLI test) Takes in two objects and logs whether they are deeply equal or not.
####
* 🛑 `findKey(object, callback)`: Takes in an object and a callback function, returning the first key that matches a value provided by the callback.

* 🛑 `findKeyByValue(object, keyValue)`: Takes in an object and a value of any type, returning the key that matches the given value.

### __String / Variable Functions__
* ✅ `assertEqual(actual, expected)`: (CLI test) Takes in two values and logs whether they are deeply equal or not.

* 🛑 `countLetters(sentence)`: Takes in a string and returns an object with the character count for each character in the string (whitespace not included).
* 🛑 `letterPositions(sentence)`: Takes in a string and returns an object containing arrays with index values for every instance of each character in the string (whitespace not included).