
const middle = (array) => {
  const isArray = Array.isArray;
  if (isArray(array)) {
    if (array.length < 3) {
      return [];
    }
    if (array.length % 2 !== 0) {
      const halfForOdd = Math.round(array.length / 2) - 1;
      return [array[halfForOdd]];
    } else {
      const halfForEven = (array.length / 2) - 1;
      return [array[halfForEven], array[halfForEven + 1]];
    }
  } else {
    return [];
  }
};

module.exports = middle;
