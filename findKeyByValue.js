const findKeyByValue = (inputObject, value) => {
  let result;
  for (let key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      if (inputObject[key] === value) {
        result = key;
      }
    }
  }
  return result;
};

module.exports = findKeyByValue;
