const letterPositions = (theString) =>
  theString
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, "")
    .split("")
    .reduce((results, currentLetter, index) => {
      return results[currentLetter]
        ? { ...results, [currentLetter]: [...results[currentLetter], index] }
        : { ...results, [currentLetter]: [index] };
    }, {});

module.exports = letterPositions;
