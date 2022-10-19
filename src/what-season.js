const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


 function getSeason(date) {
  let dat = date;
  console.log(dat);
  if(dat == undefined) {
    let str1 = 'Unable to determine the time of year!';
    console.log('Unable to determine the time of year!')
    return str1;
  }
  try {
    date.getTime()
  } catch (e) {
      throw new Error('Invalid date!')
  }
  
  let m = dat.getMonth();
  console.log(m);

  if(m<2 || m>10) {
    console.log('winter');
    return('winter')
  }
  if(m>1 && m<5) {
    console.log('spring');
    return('spring');
  }
  if(m>4 && m<8) {
    console.log('summer');
    return('summer');
  }
  if(m>7 && m<11) {
    console.log('autumn');
    return('autumn');
  }
}


module.exports = {
  getSeason
};
