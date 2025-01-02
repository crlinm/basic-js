const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  function addDomainPart(result, domain, currentDNS) {
    const lastIndex = domain.lastIndexOf('.') > 0 ? domain.lastIndexOf('.') : 0;
    currentDNS += (lastIndex > 0 ? '' : '.') + domain.slice(lastIndex);
    if (result[currentDNS]) {
      result[currentDNS] += 1;
    } else {
      result[currentDNS] = 1;
    }
    domain = domain.slice(0, lastIndex);
    return [result, domain, currentDNS];
  }

  let result = {};
  for (let domain of domains) {
    let currentDNS = '';
    while (domain.lastIndexOf('.') > 0) {
      [result, domain, currentDNS] = addDomainPart(result, domain, currentDNS);
    }
    [result, domain, currentDNS] = addDomainPart(result, domain, currentDNS);
  }
  return result;
}

module.exports = {
  getDNSStats
};
