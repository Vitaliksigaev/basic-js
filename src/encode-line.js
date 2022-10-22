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
  let strArr = str.split('');
  let counter = 1;
  let array = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) {
      counter++;
    } else {
      if (counter !== 1) {
        array.push(counter);
      }
      array.push(strArr[i]);
      counter = 1;
    }
  }
  console.log(array.join(''))
  return array.join('');
}

module.exports = {
  encodeLine
};
