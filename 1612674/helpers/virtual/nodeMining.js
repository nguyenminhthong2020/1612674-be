
module.exports  = () =>{
    let address = listNode[Math.floor(Math.random() * listNode.length)];
    blockChain.miningPendingTransactions(address);
}