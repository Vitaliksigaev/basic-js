const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */


 function getCommonCharacterCount( s1, s2 ) {
  let num1 = 0;
  let arr1 = s1.split('');
  console.log(arr1);
  let arr2 = s2.split('');
  console.log(arr2);
  let sortArr = [...arr1,...arr2].sort();
  console.log(sortArr);
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] === sortArr[i + 1]) {
      num1++;
      console.log(num1 + ' - ' + i);
      i++;
    }
  }
  console.log(num1);
  let arr = [num1, arr1.length, arr2.length].sort();
  return arr[0]
}




module.exports = {
  getCommonCharacterCount
};
