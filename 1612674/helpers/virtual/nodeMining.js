
// miner ảo : chọn ra trong list node m65t node ngẫu nhiên để miner transaction
module.exports  = () =>{
    let randomAddress = listNode[Math.floor(Math.random() * listNode.length)];
    blockChain.miningPendingTransactions(randomAddress);
}