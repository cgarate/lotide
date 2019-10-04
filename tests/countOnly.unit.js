const assertEqual = require("./assertEqual");
const countOnly = require("../countOnly");

const firstNames = [
  "Luis",
  "Carlos",
  "Masha",
  "Elena",
  "Caro",
  "Masha",
  "Steph",
  "Caro",
  "Carlos",
  "Luis",
  "Masha",
];

const result = countOnly(firstNames, { Luis: true, Masha: true, Carlos: true, Elena: true });

assertEqual(result.Masha, 3);
assertEqual(result.Elena, 1);
assertEqual(result.Carlos, 2);
assertEqual(result.Luis, 2);
assertEqual(result.Margot, undefined);

