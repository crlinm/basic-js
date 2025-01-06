const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    return {
      ...this,
      chain: [...this.chain, value]
    };
  },
  removeLink(position) {
    if (typeof position !== 'number'
      || !Number.isInteger(position)
      || position < 1 || position > this.getLength()) {
      throw new Error("You can't remove incorrect link!");
    }
    const chainCopy = [...this.chain];
    chainCopy.splice(position - 1, 1);
    return {
      ...this,
      chain: chainCopy
    };
  },
  reverseChain() {
    return {
      ...this,
      chain: [...this.chain].reverse()
    };
  },
  finishChain() {
    return this.chain
      .map((value) => `( ${value} )`)
      .join('~~');
  }
};

module.exports = {
  chainMaker
};
