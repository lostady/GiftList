const list = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const tree = new MerkleTree(list);
console.log(tree.getRoot());