const WebSocket=require('ws');
const server=new WebsSocket.server({port:8000});

server.on('connection',(socket)=>{
    console.log('a cliend connected');

    socket.on('message',(message)=>{
        console.log(`received:${message}`);

        socket.send('server received your message:'+message);
    });

    




socket.on('close',()=>{
    console.log('a client disconnected');
});


});
