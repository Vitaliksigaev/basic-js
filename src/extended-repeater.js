const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
//  function repeater(str, options) {
//   // let string = "";
//   str = String(str);
//   if (options.separator === undefined) {
//     options.separator = "+";
//   } 
//   if (typeof options.separator !== "string") {
//     options.separator = String(options.separator);
//   }
//   if (options.additionSeparator === undefined) {
//     options.additionSeparator = "|";
//   }
//   if (typeof options.additionSeparator !== "string") {
//     options.additionSeparator = String(options.additionSeparator);
//   }
//   if(options.addition === null) {
//     options.addition =String(options.addition);
//   } 


//   let add1 = xxx1(options.addition, options.additionRepeatTimes,  options.additionSeparator);
//   let rez = xxx0(str, options.repeatTimes,  options.separator, add1);

//   function xxx0(str, repeat=1, add , add1) {

//     let arr1=[];
//     for( let i = 1; i<= repeat; i++){
//       arr1.push(str + add1);
//       arr1.push(add);
//     }
//     arr1.pop()
//     console.log(arr1.join(''));
//     // console.log(str); 
//     // console.log(num1);
//     let rez = arr1.join('');
//     return rez;
//   }




//   function xxx1(str, repeat=1, add ) {

//     add = String(add);
//     let arr1=[];
//     for( let i = 1; i<= repeat; i++){
//       arr1.push(str);
//       arr1.push(add);
//     }
//     arr1.pop()
//     console.log(arr1.join(''));
//     console.log(str); 

//     let rez = arr1.join('');
//     console.log(arr1);
//     return rez;
//   }
//   return rez;
// }

function repeater(str, options) {
  str = String(str);
  if (options.separator === undefined) {
    options.separator = "+";
  } 
  if (typeof options.separator !== "string") {
    options.separator = String(options.separator);
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  if (typeof options.additionSeparator !== "string") {
    options.additionSeparator = String(options.additionSeparator);
  }
  if(options.addition === null) {
    options.addition = String(options.addition);
  } 

  let addition = xxx(options.addition, options.additionRepeatTimes,  options.additionSeparator);
  let strN = str + addition;
  let string = xxx(strN, options.repeatTimes, options.separator);

  function xxx(str, repeat=1, add ) {
    let arr1=[];
    for( let i = 1; i<= repeat; i++){
      arr1.push(str);
      arr1.push(add);
    }
    arr1.pop();
    return arr1.join('');
  }
  return string;
}

module.exports = {
  repeater
};
