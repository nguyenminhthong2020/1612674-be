
const EC = require('elliptic').ec;
const ecdsa = new EC('secp256k1');
class Wallet {
    constructor (){
        this.wallet = {
            publicKey : null,
            privateKey : null
        }
    }
    genenatorNewWallet(){
        let key = ecdsa.genKeyPair();
        this.wallet.privateKey = key.getPrivate('hex');
        this.wallet.publicKey = key.getPublic('hex');
        return this.wallet;
    }
    isValidPublicKey (publicKey){
        return ecdsa.keyFromPrivate(this.wallet.privateKey).getPublic('hex') == publicKey;  
    }
}
module.exports = Wallet;