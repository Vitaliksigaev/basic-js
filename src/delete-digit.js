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
  let st = n.toString();
  let st1 = [];
  for (let i = 0; i < st.length; i++) {
    st1.push(+((st.slice(0,i) + (st.slice(i + 1,st.length)))));
  }
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  return getMaxOfArray(st1)
}


module.exports = {
  deleteDigit
};
