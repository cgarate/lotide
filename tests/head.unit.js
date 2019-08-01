const assertEqual = require("./assertEqual");
const head = require("../head")

// Test code
assertEqual(head([3, 2, 1]), 3);
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);