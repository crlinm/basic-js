const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const n = str.length;
  if (n === 0) {
    return '';
  }
  let res = '';
  let current = str[0];
  let k = 0;
  let i;
  for (i = 0; i < n; i++) {
    if (str[i] !== current) {
      res += ((i - k) > 1 ? (i - k).toString() : '') + current;
      current = str[i];
      k = i;
    }
  }
  res += ((i - k) > 1 ? (i - k).toString() : '') + current;
  return res;
}

module.exports = {
  encodeLine
};
