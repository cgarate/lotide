const assertEqual = require("./assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], []), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays({}, "hola"), false);
assertEqual(eqArrays([1], [2, 3]), false);
