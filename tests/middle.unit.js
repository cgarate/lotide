const assertArraysEqual = require("./assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,4,5]), [2,4]);
assertArraysEqual(middle(['A','B','C','D','E']), ['C']);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1]), []);