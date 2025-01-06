const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const n = arr.length;
  const result = [];
  const previous = new Array(n).fill(0);
  let i = 0;
  while (i < arr.length) {
    switch (arr[i]) {
      case '--discard-next':
        if (i + 1 < n) {
          previous[i+1] -= 1;
        }
        break;
      case '--discard-prev':
        if (i - 1 >= 0) {
          previous[i-1] -= 1;
        }
        break;
      case '--double-next':
        if (i + 1 < n) {
          previous[i+1] += 1;
        }
        break;
      case '--double-prev':
        if (i - 1 >= 0) {
          previous[i-1] += 1;
        }
        break;
      default:
        if (previous[i] >= 0) {
          previous[i] += 1;
        }
        break;
    }
    i++;
  }

  for (let i = 0; i < n; i++) {
    if (previous[i] === 1) {
      result.push(arr[i]);
    }
    if (previous[i] > 1) {
      for (let k = 0; k < previous[i]; k++) {
        result.push(arr[i]);
      }
    }
  }

  return result;
}

module.exports = {
  transform
};
