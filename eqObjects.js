const eqArrays = require("./eqArrays");

const eqObjects = (objectOne, objectTwo) => {
  const isArray = Array.isArray;
  const arrayKeyOne = Object.keys(objectOne);
  const arrayKeyTwo = Object.keys(objectTwo);
  if (arrayKeyOne.length !== arrayKeyTwo.length) {
    return false;
  }

  const matches = arrayKeyOne.reduce((accum, currentKey) => {
    if (!isArray(objectOne[currentKey])) {
      return (accum +=
        objectTwo[currentKey] && objectTwo[currentKey] === objectOne[currentKey]
          ? 1
          : 0);
    } else {
      return (accum +=
        objectTwo[currentKey] &&
        eqArrays(objectTwo[currentKey], objectOne[currentKey])
          ? 1
          : 0);
    }
  }, 0);
  return matches === arrayKeyOne.length;
};

module.exports = eqObjects;
