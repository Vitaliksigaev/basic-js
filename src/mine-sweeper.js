const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let matrixSum = matrix.map(function (item) {
    return [...item]
  })
  
  function sumM( i , j ) {
    if(matrix[i][j]==1) {
      return matrixSum[i][j] = 1;      
    }
    let startI;
    let finishI;
    let startJ;
    let finishJ;
    if(i == 0) {
      startI = 0;
      finishI = 1;
    }
    if(i > 0 && i < matrix.length-1) {
      startI = i - 1;
      finishI = i + 1;
    }
    if(i == matrix.length-1) {
      startI = i - 1;
      finishI = i;
    }
    if(j == 0) {
      startJ = 0;
      finishJ = 1;
    }
    if(j > 0 && j < matrix[0].length-1) {
      startJ = j - 1;
      finishJ = j + 1;
    }
    if(j == matrix[0].length-1) {
      startJ = j - 1;
      finishJ = j;
    }

    let sum = 0; 
    for( let i = startI; i <= finishI; i++) {
      for( let j = startJ; j <= finishJ; j++) {
          sum += matrix[i][j];
      }
    }
    matrixSum[i][j] = sum;
    return sum;
  }
  
  for( let i = 0; i< matrix.length; i++){
    for( let j = 0; j< matrix[0].length; j++){
      console.log(sumM(i,j))
    }
  }
return matrixSum;
}

module.exports = {
  minesweeper
};
