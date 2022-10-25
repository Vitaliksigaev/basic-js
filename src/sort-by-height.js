const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  // console.log(arr.sort());
  console.log(arr.filter(e => e > 0).sort((a,b) => a-b));
  let arr2 = arr.filter(e => e > 0).sort((a,b) => a-b);
  let i = 0;
  let r = arr.map( elem => {
    if (elem<0) {
      return elem;
    } else {
      i++;
      return arr2[i-1]
    }
  })
  console.log(r);
  return r
}

module.exports = {
  sortByHeight
};
