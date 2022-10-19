const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
let arrT = [...arr];

arrT.map((elem, index, array) => {console.log(index + " - " + elem + ' - ' + array);
  if( elem == '--discard-prev' ){
    if (array[index - 1]) {
      array[index] = "-";
      array[index - 1] = "-";
      // array.splice(index-1,2)
    } else {
      array.splice(index,1)
    }    
  }
  if( elem == '--discard-next'){
    array[index] = "-";
    array[index + 1] = "-";
    // array.splice(index,2)
    // console.log('check')
  }
  if( elem == '--double-next'){
    if (array[index + 1]) {
      array[index] = array[index + 1];
    } else {
      array.splice(index,1);
    }
    console.log('check')
  }
  if( elem == '--double-prev'){
    if (array[index - 1]) {
      array[index] = array[index - 1];
    } else {
      array.splice(index,1);
    }
  }
})
return arrT.filter((elem) => elem !== "-");;
}




module.exports = {
  transform
};
