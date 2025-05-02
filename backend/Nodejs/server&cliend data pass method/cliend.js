const WebSocket =require('ws');
const cliend=new WebSocket('ws://localhost:8000');

cliend.on('open',()=>{
    console.log('connected to server');
    cliend.send('hello,server');
});

cliend.on('message',(message)=>{
    console.log(`received:${message}`);
});

cliend.on('close',()=>{
    console.log('disconnected from server')
});
