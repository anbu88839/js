
/*
const fs =require('fs');

const readStream=fs.createReadStream('input.txt');
const writeStream=fs.createWriteStream('output.txt');

readStream.on('data',(chunk)=>{
    writeStream.write(chunk);
})

readStream.on('end',()=>{
    writeStream.end();
});
*/



/*
const fs =require('fs');
const readStream =fs.createReadStream('input.txt');
const writeStream=fs.createWriteStream('anbu.txt');
let bufferData='';
readStream.on('data',(chunk)=>{
    const modifiedchunk=chunk.toString().toLocaleUpperCase();
    bufferData+=modifiedchunk;
});

readStream.on('end',()=>{
    writeStream.write(bufferData);
    writeStream.end();
});

readStream.on('finish',()=>{
    console.log('data has been written to output');
});

readStream.on('error',()=>{
    console.error('error reading from input.txt;',err)
    ;

});

readStream.on('error',(err)=>{
    console.error('error writting to output.txt:',err);

});*/


//  server consept
/*
const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
const writeStream=res;
for (let i=0;i<100;i++){
    writeStream.write(`<p> ${i}:this is a line of text.</p>`);

}
writeStream.end();
});

server.listen(6660,()=>{
    console.log('server is running on port 3000');
});
*/
var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    //Open a file on the server and return its content: 
 fs.readFile('k.json',function(err,data){
    res.writeHead(200,{"content-type":"text/json"});
    res.write(data);
    return res.end();
 });   
})
.listen(3000,()=>{
    console.log('server is running on port 3000');
});  









