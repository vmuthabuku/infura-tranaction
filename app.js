const Web3 = require("web3");


const App = async () => {
    // contract methods
    const MyContract = [
    {
        "inputs": [],
        "name": "buyAd",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lastPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
  const provider = 'https://rinkeby.infura.io/v3/9fcb61339d334e1cad5ee75de6999144';

  const web3 = new Web3(new Web3.providers.HttpProvider(provider));

//   const web3 = new Web3(new Web3.providers.HttpProvider(ethNetwork));
  const networkId = await web3.eth.net.getId();
  const myContract = new web3.eth.Contract(
    MyContract
    
  );

  console.log(await myContract.methods.data().call());
  console.log(`Old data value: ${await myContract.methods.data().call()}`);
  const receipt = await myContract.methods.setData(3).send({ from: address });
  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`New data value: ${await myContract.methods.data().call()}`);
}

App();