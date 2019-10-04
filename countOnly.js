/**
 * countOnly will be given an array and an object.
 * It will return an object containing counts of everything that the input object listed.
 */

const countOnly = (allItems, itemsToCount) =>
  (result = allItems.reduce((countResultObject, currentItem) => {
    return itemsToCount && itemsToCount[currentItem]
      ? countResultObject[currentItem]
        ? {
            ...countResultObject,
            [currentItem]: countResultObject[currentItem] + 1,
          }
        : { ...countResultObject, [currentItem]: 1 }
      : { ...countResultObject };
  }, {}));

module.exports = countOnly;
