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
  console.log(domains);
  let obj = {};
  let arr = domains.map(elem => check(elem.split('.').map(elem => '.'+ elem).reverse()));
function check(elem) {
  let num = '';
  for( let i = 0 ; i< elem.length; i++) {
    num += elem[i];
    obj.hasOwnProperty(num) ? obj[num]++ : obj[num] = 1;
  }
}
  console.log(obj);
  return obj;
}

module.exports = {
  getDNSStats
};
