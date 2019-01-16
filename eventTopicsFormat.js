Web3 = require('web3');

const provider = new Web3.providers.HttpProvider(
  "http://127.0.0.1:8545"
);

const web3 = new Web3(provider);

function cl(str, method) {
	console.log(str, method);
}

function eventSigHash(declaredEvent) {
	if(typeof declaredEvent != 'string') {
		throw (new Error(`${declaredEvent} is not a string.`));
	}
	return (web3.utils.keccak256(declaredEvent))
}

function convertToHexWithPadding(strInput){
	const BYTES32LEN = 62;
	const LENGTHWITHPREFIX = BYTES32LEN + 2

	var isHex = web3.utils.toHex(strInput)

	if( isHex === strInput) {
		throw new Error(`${strInput} is in Hex Format. Argument type should be only string and number format`)
	}

	var hexFormat = web3.utils.toHex(strInput);

	if(hexFormat.length < BYTES32LEN) {
		var padLeftHex = web3.utils.padLeft(hexFormat, BYTES32LEN)
		if(padLeftHex.length != LENGTHWITHPREFIX || (padLeftHex.length / 2) != 32) {
			throw new Error(
				`After adding padding to the left side Hex length should be length of 62, Current length is ${padLeftHex.length}`
				)
		}
		return padLeftHex;
	}
	
	return hexFormat;
}

module.exports = {
	web3 : web3,
	eventSigHash : eventSigHash,
	convertToHexWithPadding: convertToHexWithPadding,
}

