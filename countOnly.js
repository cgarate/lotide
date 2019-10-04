/**
 * countOnly will be given an array and an object.
 * It will return an object containing counts of everything that the input object listed.
 */

const countOnly = (allItems, itemsToCount) =>
  (result = allItems.reduce((result, currentItem) => {
    return itemsToCount && itemsToCount[currentItem]
      ? result[currentItem]
        ? { ...result, [currentItem]: result[currentItem] + 1 }
        : { ...result, [currentItem]: 1 }
      : { ...result };
  }, {}));

module.exports = countOnly;
