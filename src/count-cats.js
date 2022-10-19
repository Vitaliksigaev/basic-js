const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats( matrix ) {
  let cats1 = [];
  let cats = matrix.forEach(elem =>cats1.push((elem.filter(elem1 => elem1 == '^^'))));
  // let stat = cats.length;
  console.log(cats1.flat().length);
  return cats1.flat().length;
}

module.exports = {
  countCats
};
