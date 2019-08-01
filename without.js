const without = (source, toRemove) => {
  return source.reduce((accum, currentSourceItem) => {
    return !toRemove.includes(currentSourceItem)
      ? [...accum, currentSourceItem]
      : [...accum];
  }, []);
};

module.exports = without;
