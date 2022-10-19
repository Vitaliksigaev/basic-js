const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    if (arr.some(elem => Array.isArray(elem))) { //проверяет, проходит ли хотя бы один элемент в массиве проверку
      arr = arr.flat() //  подмассивов были рекурсивно "подняты" 
      count += this.calculateDepth(arr);
      return count;
    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};
