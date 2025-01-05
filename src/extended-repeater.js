const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let repeatTimes = 'repeatTimes' in options ? options['repeatTimes'] : 1;
  let separator = 'separator' in options ? options['separator'] : '+';

  if ('addition' in options) {

    let addition = options['addition'] + '';
    let additionRepeatTimes = 'additionRepeatTimes' in options ? options['additionRepeatTimes'] : 1;
    let additionSeparator = 'additionSeparator' in options ? options['additionSeparator'] : '|';

    const additionPart = new Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

    const resStr = (str + '') + additionPart;

    return new Array(repeatTimes).fill(resStr).join(separator);
  }
  return new Array(repeatTimes).fill(str.toString()).join(separator);
}

module.exports = {
  repeater
};
