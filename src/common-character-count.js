const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  function counter(s) {
    const res = {};
    for (const item of s) {
      if (res[item]) {
        res[item] += 1;
      } else {
        res[item] = 1;
      }
    }
    return res;
  }

  const countS2 = counter(s2);
  let res = 0;

  for (const item of s1) {
    if (countS2[item]) {
      res += 1;
      if (countS2[item] == 1) {
        delete countS2[item];
      } else {
        countS2[item] -= 1;
      }
    }
  }

  return res;
}

module.exports = {
  getCommonCharacterCount
};
