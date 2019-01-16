Web3 = require('web3');

const provider = new Web3.providers.HttpProvider(
  "http://127.0.0.1:8545"
);

/*
const SocketProvider = new Web3.providers.WebsocketProvider(
  "wss://127.0.0.1:8545"
);
*/

//let web3Provider = new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws");

const web3 = new Web3(provider);

var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "value",
				"type": "string"
			},
			{
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "emitDouble",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "emitUserAdd",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "title",
				"type": "string"
			},
			{
				"name": "firstName",
				"type": "string"
			},
			{
				"name": "LastName",
				"type": "string"
			}
		],
		"name": "entryInfo",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "entryNumber",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "inputTag",
				"type": "bytes8"
			}
		],
		"name": "entryTheTag",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "value",
				"type": "string"
			},
			{
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "fireBothEvent",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "fireNum",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "value",
				"type": "string"
			}
		],
		"name": "fireString",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "value",
				"type": "string"
			}
		],
		"name": "Message",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "secNum",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "Double",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "entry",
				"type": "bytes8"
			}
		],
		"name": "Tag",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "userAdd",
				"type": "address"
			}
		],
		"name": "User",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "position",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "firstName",
				"type": "string"
			},
			{
				"indexed": true,
				"name": "LastName",
				"type": "string"
			}
		],
		"name": "Info",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNum",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "storeNum",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
	
var address = "0xbf0c30604ec45b26cbd9b05c6ab8aae3c9a3fea3";

var myContract = new web3.eth.Contract(abi, address);

/*
myContract.once('Message', {
    //filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
    fromBlock: 6
}, function(error, event){ console.log(event); });
*/

function loopObj(obj) {
	Object.entries(obj).forEach(([key, value]) => {
		if(key == 'raw') {
			console.log(key, value)
			Object.entries(key).forEach(([key , value]) => {
				console.log(key)
			})
		}
	})
}

function getHash(msg) {
	var msgHash = web3.utils.keccak256(msg);
	return msgHash;
}



//var filter = {  'to': '0x693732204104A6e0e636844C85e021d25306A6Cc'}
//var pastTransferEvents = contractInstance.getPastEvents('Transfer', { filter, fromBlock: 190, toBlock: 'latest'})

function one() {
	myContract.getPastEvents('secNum', {
	    fromBlock: 0,
	    toBlock: 'latest'
	}).then((data) => {
		//console.log(data);
		loopObj(data[0]);
		//loopObj(data[0]);
	})
}


function uintEvent() {
	myContract.getPastEvents('secNum', {
	    fromBlock: 0,
	    toBlock: 'latest',
	    topics: ['0x415e08ae8d9aa6ef8648fda2672e1633982d89600d83431400eb8533e1b5a5cc',
	     '0x0000000000000000000000000000000000000000000000000000000000000064']
	}).then((data) => {
		console.log(data)
	})
}

function stringEvent() {
	myContract.getPastEvents('Message', {
	    fromBlock: 0,
	    toBlock: 'latest',
	    topics: ['0x51a7f65c6325882f237d4aeb43228179cfad48b868511d508e24b4437a819137',
	     '0x1c8aff950685c2ed4bc3174f3472287b56d9517b9c948127319a09a7a36deac8']
	}).then((data) => {
		console.log(data)
	})
}

function eventTopics(eventName, topicsArray) {
	myContract.getPastEvents(eventName, {
	    fromBlock: 0,
	    toBlock: 'latest',
	    topics: topicsArray
	}).then((data) => {
		console.log(data)
	//loopObj(data[0]);

	})
}

topics = ['0x51a7f65c6325882f237d4aeb43228179cfad48b868511d508e24b4437a819137',
	     '0x1c8aff950685c2ed4bc3174f3472287b56d9517b9c948127319a09a7a36deac8']

doubleTopics = ['0xb3fc00c44f787eef9f119916222b18ca3b4c72256e3df043e8541a8741ac9588',
				'0xe13b17b1761f5c44496ba445bbd6344f0ca0b2246ea2b55bf678f67ce54028be',
				'0x000000000000000000000000000000000000000000000000000000000000000f']

emptyTopic = [];

infoTopic = [ '0xe5bef32741e2e33072ea422c4855b60bfb6bdb3491962aa7398900b5fa3653e8',
     '0x321f67ee98719403e215675374f5832e287cf826f6e5b3f3dc4e8b98eb02dba2',
     '0x41b1a0649752af1b28b3dc29a1556eee781e4a4c3a1f7f53f90fa834de098c4d',
     '0x435cd288e3694b535549c3af56ad805c149f92961bf84a1c647f7d86fc2431b4' ] 

//eventTopics('Info', []);




var check = web3.utils.keccak256('secNum(uint256)');
console.log(check)