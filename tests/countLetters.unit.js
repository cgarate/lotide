const assertEqual = require("./assertEqual");
const countLetters = require("../countLetters");

const testString = "Adieu l'Emile je t'aime bien";
const result = {
  a: 2,
  d: 1,
  i: 4,
  e: 6,
  u: 1,
  l: 2,
  m: 2,
  j: 1,
  t: 1,
  b: 1,
  n: 1,
}

const resultA = countLetters(testString)

assertEqual(resultA['a'], 2);
assertEqual(resultA['d'], 1);
assertEqual(resultA['i'], 4);
assertEqual(resultA['e'], 6);
