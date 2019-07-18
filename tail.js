assertEqual = require("./assertEqual");

const tail = (array) => (array.length ? array.slice(1) : []);

// Test code
testArray = [1, 10, 20, 30];
// Original Array was not modified
tail(testArray);
assertEqual(testArray.length, 4);

// Tail was returned correctly
tailedArray = tail(testArray);
assertEqual(tailedArray.toString(), "10,20,30");

// Array with one element returns empty array
testArray = [1];
assertEqual(tail(testArray).length, 0);

// Empty array returns empty array
testArray = [];
assertEqual(tail(testArray).length, 0);
assertEqual(Array.isArray(tail(testArray)), true);
