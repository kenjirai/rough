
var chai = require('chai');      
var should = chai.should();
 var expect = chai.expect;  
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

function eventSigHash(declaredEvent) {
	if(typeof declaredEvent != 'string') {
		return new Error(`${declaredEvent} is not a string.`);
	}
	return (web3.utils.keccak256(declaredEvent))
}

//console.log(eventSigHash('Message(string)'))

var value = '0x0000000000000000000000000000000000000000000000000000000000000b'

console.log(web3.utils.hexToNumber(value))