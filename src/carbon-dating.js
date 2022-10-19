const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  console.log(sampleActivity);
  let num = Number(sampleActivity);
  // console.log(num);
  if(isNaN(num)== true || (sampleActivity == Infinity) == true || num < 0 || typeof sampleActivity !== 'string') {
    console.log('infi');
    return false;
  } else {
    num = Math.ceil((Math.log(15/num))/(0.693/HALF_LIFE_PERIOD));
    console.log(num);
    if(num<0 || num == Infinity) {
      console.log('menshe 0');
      return false;
    } else {
      console.log(num);
      return num;
    }
  }
}

module.exports = {
  dateSample
};
