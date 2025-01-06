const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt() {
    if (typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    const str = arguments[0].toUpperCase();
    const key = arguments[1].toUpperCase();

    return this.crypt(str, key, 1);
  }

  decrypt() {
    if (typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    const str = arguments[0].toUpperCase();
    const key = arguments[1].toUpperCase();

    return this.crypt(str, key, -1);
  }

  crypt(str, key, flag) {
    const lenStr = str.length;
    const lenKey = key.length;
    const result = [];
    let shift = 0;
    const aCode = 'A'.charCodeAt(0);
    const zCode = 'Z'.charCodeAt(0);
    for (let i = 0; i < lenStr; i++) {
      const j = (i - shift) % lenKey;
      console.log(aCode, str.charCodeAt(i), key.charCodeAt(j));
      if (str.charCodeAt(i) >= aCode && str.charCodeAt(i) <= zCode) {
        const ch = String.fromCharCode(aCode + (str.charCodeAt(i) - aCode + flag * (key.charCodeAt(j) - aCode) + 26) % 26);
        result.push(ch);
      } else {
        result.push(str[i]);
        shift++;
      }
    }
    return (this.direct ? result : result.reverse()).join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
