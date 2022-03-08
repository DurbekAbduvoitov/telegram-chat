let input = document.querySelector('#massage'),
    send = document.querySelector('.send'),
    msgBlock = document.querySelector('main');

function sendMassage(){
    send.addEventListener('click' , ()=>{
        let blockquote = document.createElement('blockquote');

        blockquote.innerHTML = `${input.value}`;
        msgBlock.append(blockquote);

        input.value = '';
    });
}

sendMassage();