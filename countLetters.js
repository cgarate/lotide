const countLetters = (theString) =>
  theString
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, "")
    .split("")
    .reduce((results, currentLetter) => {
      return results[currentLetter]
        ? { ...results, [currentLetter]: results[currentLetter] + 1 }
        : { ...results, [currentLetter]: 1 };
    }, {});

module.exports = countLetters;
