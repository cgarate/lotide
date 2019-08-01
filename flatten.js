const flatten = (array) => {
  return array.reduce((accum, current) => {
    return Array.isArray(current)
      ? [...accum, ...current]
      : [...accum, current];
  }, []);
};

module.exports = flatten;