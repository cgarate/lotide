assertEqual = require("./assertEqual");

const head = (array) => (array.length ? array[0] : undefined);

// Test code
assertEqual(head([3, 2, 1]), 3);
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
