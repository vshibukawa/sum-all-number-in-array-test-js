function sumItems(array) {
  // Sum all the numbers in the array

  let sum = 0;

  array.forEach((item) => {
    if (Array.isArray(item)) {
      return sum += sumItems(item);
    } else {
      return sum += item;
    }
  });

  return sum;
}

module.exports = sumItems;
