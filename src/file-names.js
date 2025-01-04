const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let dict = {};
  const res = names;
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (dict[name] >= 0) {
      dict[name] += 1;
      res[i] = `${name}(${dict[name]})`;
      dict[res[i]] = (dict[res[i]]) ? dict[res[i]]++: 0;
    } else {
      dict[name] = 0;
    }
  }
  return res;
}

module.exports = {
  renameFiles
};
