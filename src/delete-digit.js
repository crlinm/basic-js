const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = n.toString();
  const nLength = nStr.length;
  let res = 0;
  for (let i = 0; i < nLength; i++) {
    const currentStr = nStr.slice(0, i) + nStr.slice(i + 1, nLength);
    const currentNumber = Number.parseInt(currentStr);
    if (currentNumber > res) {
      res = currentNumber;
    }
  }
  return res;
}

module.exports = {
  deleteDigit
};
