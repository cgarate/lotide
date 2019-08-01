const assertArraysEqual = require("./assertArraysEqual");
const without = require("../without");

assertArraysEqual(without([1, 3, 5, 7, 9], [3, 9]), [1, 5, 7]);
assertArraysEqual(without([1, 3, 5, 7, 9], [3, 9, 7, 5]), [1]);
assertArraysEqual(without(["A", "C", 20, 1], ["A"]), ["C", 20, 1]);

const words = ["Hello", "World"];
without(["Hello", "World"], ["World"]);
assertArraysEqual(words, ["Hello", "World"]);
