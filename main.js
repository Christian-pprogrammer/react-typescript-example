//illustrate the working technology of blockchain
const SHA512 = require('crypto-js/sha512')
class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash()
  }
  calculateHash() {
    return SHA512(this.index + this.timestamp + this.data + this.previousHash).toString();
  }
}

class Blockchain {
  constructor() {
    this.blocks = [this.createGenesisBlock()];
  }
  addBlock(newBlock) {
    const previousBlock = this.blocks[this.blocks.length - 1];
    const addedBlock = new Block(this.blocks.length, newBlock.timestamp, newBlock.data, previousBlock.hash);
    this.blocks.push(addedBlock);
  }
  createGenesisBlock() {
    return new Block(0, "1/1/2022", {amount: 100}, '0');
  }
}

const myBlockchain = new Blockchain();
myBlockchain.addBlock({timestamp: "2/1/2022", data: {amount: 4000}});
myBlockchain.addBlock({timestamp: "3/1/2022", data: {amount: 5000}});
myBlockchain.addBlock({timestamp: "4/1/2022", data: {amount: 6000}});
myBlockchain.addBlock({timestamp: "5/1/2022", data: {amount: 7000}});
console.log(myBlockchain.blocks)