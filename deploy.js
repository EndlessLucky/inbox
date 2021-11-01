const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'call grow acoustic vintage front ring trade assist shuffle mimic volume reject',
  'https://rinkeby.infura.io/v3/247d5e920ce2491e81eb889bdf9baae6'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there!']})
    .send({from: accounts[0], gas: '1000000'});

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();