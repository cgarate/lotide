const assertArraysEqual = require("./assertArraysEqual");
const letterPositions = require("../letterPositions");

const testString = "Hello, is it me you're looking for?";

const result = letterPositions(testString);

assertArraysEqual(result.h, [0]);
assertArraysEqual(result.e, [1,10,15]);
assertArraysEqual(result.l, [2,3,16]);
assertArraysEqual(result.o, [4,12,17,18,24]);
