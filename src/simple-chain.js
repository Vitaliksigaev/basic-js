const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },


addLink(value) {
  if (value === undefined) {
    this.chain.push("");
  } else {
    this.chain.push(value);
  }
  console.log(this);
  return this;
},


removeLink(position) {
  if (this.chain.length === 0 || position < 1 || position >= this.getLength() ||    typeof position !== "number" ||!Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
  }
  this.chain.splice(position-1, 1);
  return this;
},




  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    console.log(this.chain);
    let r = this.chain.map(elem => elem = '( ' + elem + ' )')
    console.log(r);
    this.chain = [];
    return r.join("~~");
  },
};


module.exports = {
  chainMaker
};
