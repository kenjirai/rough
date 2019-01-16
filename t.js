
Web3 = require('web3');

const provider = new Web3.providers.HttpProvider(
  "http://127.0.0.1:8545"
);

const web3 = new Web3(provider);

function check(){
	web3.extend({
	    property: 'ganache',
	    methods: [{
	        name: 'evm_mine',
	        call: 'evm_mine',
	    }]
	});
}

function loadGanacheRPC() {
  web3.extend({
      property: 'ganache',
      methods: [{
          name: 'evm_mine',
          call: 'evm_mine',
      },{
        name: 'evm_increaseTime',
        call: 'evm_increaseTime',
        params: 1,
      }]
  });
}

loadGanacheRPC();

async function workWithTime() {
	var latestBlock = await web3.eth.getBlockNumber();
  console.log('latestBlock', latestBlock);
	console.log('latest Block', latestBlock);
	var current = await web3.eth.getBlock(latestBlock);
	console.log('currentTime', current.timestamp);
}

workWithTime();

web3.ganache.evm_increaseTime(100);
/*
  web3.currentProvider.send({
    jsonrpc: '2.0',
    method: 'evm_increaseTime',
    params: 100,
  }, (err, res) => {
    if(err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
 */

web3.ganache.evm_mine();

workWithTime();

/*
web3.currentProvider.send({
	method: "eth_getBalance",
	params: ['0xc47c009370926C614419a1D1DD41bCcC1Bfb352f', 'latest'],
	jsonrpc: "2.0",
  	id: new Date().getTime()
  }, (err, res) => {
  	if(err) {
  		console.log(err);
  	} else {
  		console.log(res);
  	}
  });
*/




/*
latest().then(console.log)
advanceBlock();
latest().then(console.log)
*/