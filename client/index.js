const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list?
  const tree = new MerkleTree(niceList);
  const index = 0;
  const validName = niceList[index];
  const proof = tree.getProof(index);

  const { data: giftA } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    name: validName,
    proof: proof
  });
  console.log({ giftA });

  const invalidName = 'Unlucky Person';
  const { data: giftB } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    name: invalidName,
    proof: proof
  });
  console.log({ giftB });

}

main();