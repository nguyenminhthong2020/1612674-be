const SHA256 = require("crypto-js/sha256");
const EC = require('elliptic').ec;
const ecdsa = new EC('secp256k1');
class Transaction{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.timestamp = Date.now()
    }
    signTransaction(signingKey) {
        if (signingKey.getPublic('hex') !== this.fromAddress) {
          return -1
        }
        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx);
        this.signature = sig.toDER('hex');
    }
    isValid() {
        if (this.fromAddress === null) return true;
    
        if (!this.signature || this.signature.length === 0) {
          throw new Error('No signature in this transaction');
        }
    
        const publicKey = ecdsa.keyFromPublic(this.fromAddress, 'hex');
        return publicKey.verify(this.calculateHash(), this.signature);
    }
    calculateHash(){
        return SHA256(this.fromAddress + this.toAddress + this.amount + this.timestamp).toString();
    }
}
module.exports = Transaction;