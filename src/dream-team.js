const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  console.log(members);
  if(!Array.isArray(members)) {
    console.log('NO Array');
    return false;
  } else {
    let sortTeam = members.filter(elem => typeof elem == 'string');
    // sortTeam.forEach(elem => elem.split(' ').join(''))
    console.log(sortTeam);
    let push1 =[];
    sortTeam.forEach(elem => push1.push(elem.split(' ').join('').substring(0, 1).toUpperCase()));
    let teamName = push1.join('').split('').sort().join('');
    console.log(teamName);
    return teamName;
  }
}

module.exports = {
  createDreamTeam
};
