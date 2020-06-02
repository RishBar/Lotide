const middle = function(array) {
  let arrayMid = (Math.round(array.length / 2) - 1);
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    return [array[arrayMid], array[arrayMid + 1]];
  } else {
    return [array[arrayMid]];
  }
};

module.exports = middle;
