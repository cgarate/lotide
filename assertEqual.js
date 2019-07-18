const assertEqual = (actual, expected) =>
  actual === expected
    ? console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`)
    : console.log(`❌ Assertion Failed: [${actual}] === [${expected}]`);
// Test Code
assertEqual("Carlos", "Karla");
assertEqual(1, 1);
assertEqual("Carlos", "Carlos");
assertEqual(10, 11);

module.exports = assertEqual;