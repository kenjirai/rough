var chai = require('chai');      
var should = chai.should();
var expect = chai.expect;
 
const {web3, eventSigHash , convertToHexWithPadding} = require('../eventTopicsFormat');
const { sigWithEvents } = require('./constants');
//generate array manually

describe('eventTopicsFormat', function() {	

	describe('eventSigHash Test', function() {
		it('throws an error for non string arguments', function() {
			(() => eventSigHash(11)).should.throw(Error);
		});
		
		it('produces correct event signature hash', function() {
			Object.entries(sigWithEvents).forEach(([key , value]) => {
					var eventHash  = eventSigHash(key);
					eventHash.should.be.equal(value, 'incorrect Hashing');
			});
		});
	});

		describe('Error test', function() {
			it('throws an error if an input type is HEX', function() {
				(()=> convertToHexWithPadding('0xff')).should.throw(Error);
			});

		});
		
		context('Number to Hex Conversion', function() {
			before(function () {
				this.num = 11;
				this.outputLen = 64;
				this.result = convertToHexWithPadding(this.num);
			});

			it('outputs hex with correct length of 64', function() {
				(this.result.length).should.be.equal(this.outputLen, 'Hex length should be equal 64');
			});

			it('outputs HEX starting with 0x prefix', function() {
				var prefix = this.result.slice(0,2);
				prefix.should.be.equal('0x', 'Output HEX should start with prefix 0x');
			});

			it('encodes number correctly into HEX format', function() {
				var originalNum = web3.utils.hexToNumber(this.result)	
				originalNum.should.be.equal(this.num, 'must be orginal value');
			});
		});


		context('String to Hex Conversion', function() {
			beforeEach(function () {
				this.outputLen = 64; 
				this.msg = 'Hello World!';
				this.result = convertToHexWithPadding(this.msg);
			});

			it('outputs hex with correct length of 64', function() {
				(this.result.length).should.be.equal(this.outputLen, 'Hex length should be equal 64');
			});

			it('outputs HEX starting with 0x prefix', function() {
				var prefix = this.result.slice(0,2);
				prefix.should.be.equal('0x', 'Output HEX should start with prefix 0x');
			});

			it('encodes number correctly into HEX format', function() {
				var originalNum = web3.utils.hexToString(this.result)	
				originalNum.should.be.equal('Hello World!', 'must be orginal value');
			});
		});
	});	
	
});


