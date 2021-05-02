var socket = io('/');
socket.on('storeSocketId', (socketId) =>{
    if($('.socketId')){
        $('.socketId').val(socketId);
    }
});
socket.on('registerSuccess', (address) =>{
    $('#register').css('display','none');
    $('#success').css('display','block');
});
socket.on('block', (blocks) =>{
    let listBlocks = JSON.parse(blocks);
        let html = `
        <tr>
        <td style="overflow-wrap: break-word;max-width: 315px; text-align:left ">
            ${ listBlocks.previousHash}
        </td>
        <td style="overflow-wrap: break-word; max-width: 315px; text-align:left">
           ${ listBlocks.hash}
        </td>
        <td> ${ listBlocks.timestamp}</td>
        </tr>`;
        $('#list-block').append(html);
});
socket.on('transaction', (transactions) =>{
  
    let listTransaction = JSON.parse(transactions);
    console.log(listTransaction)
    listTransaction.forEach( (e) =>{
        let html = `
        <tr>
            <td style="overflow-wrap: break-word;max-width: 315px; text-align:left ">
                ${e.fromAddress ? e.fromAddress : 'Hệ thống thưởng bchain'}
            </td>
        <td style="overflow-wrap: break-word; max-width: 315px; text-align:left">
            ${e.toAddress}
        </td>
        <td>${e.amount}</td>
        <td> ${e.timestamp}</td>
        </tr>`;
       
        $('#list-transaction').append(html);
        if(e.fromAddress == $('#address').val() || e.toAddress == $('#address').val() ){
            let total = e.toAddress == $('#address').val() ? parseInt($('#total').text()) + parseInt(e.amount) : parseInt($('#total').text()) - parseInt(e.amount) ;
            console.log(total)
            $('#total').text(total);
            $('#transaction').append(html);
        }
    })
});


