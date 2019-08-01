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

module.exports = eqArrays;
