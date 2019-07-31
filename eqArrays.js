assertEqual = require("./assertEqual");

const eqArrays = (arrayOne, arrayTwo) => {
  const isArray = Array.isArray;
  if (isArray(arrayOne) && isArray(arrayTwo)) {
    if (arrayOne.length !== arrayTwo.length) {
      return false;
    } else {
      const numberOfMatchedItems = arrayOne.reduce(
        (accum, arrayItem, index) => {
          return (accum += arrayItem === arrayTwo[index] ? 1 : 0);
        },
        0,
      );
      return numberOfMatchedItems === arrayOne.length;
    }
  } else {
    return false;
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], []), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays({}, "hola"), false);
assertEqual(eqArrays([1], [2, 3]), false);
