const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// goal: take in string, return object with letters as keys and number as values
// limitation: skip spaces
// steps:
// read each letter of sentence
// count letters as they come in
// output totals as object at the end

const countLetters = function(sentence) {
  const letterCount = {};

  for (letter of sentence) {
    if (letter !== " ") {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
}
  return letterCount;
}

console.log(countLetters("lighthouse in the house"));

const testResult = countLetters("coffeepot coffee cup");

assertEqual(testResult["c"], 3);
assertEqual(testResult["o"], 3);
assertEqual(testResult["f"], 4);
assertEqual(testResult["e"], 4);
assertEqual(testResult["p"], 2);
assertEqual(testResult["t"], 1);
assertEqual(testResult["u"], 1);
assertEqual(testResult[" "], undefined);