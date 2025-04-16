const http=require('http');
const server= http.createServer((req,res)=>{
    if(req.method==='POST'){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk;
        });


        req.on('end',()=>{
            res.setHeader('Content-Type','text/plain');
            res.end('Data received and processed.'+body);
        });
    }
    else{
        res.statuscode=405;
        res.setHeader('Content-Type','text/plain');
        res.end('405 method not allowed');
    }
});
const port =8000;
server.listen(port,()=>{
    console.log(`server is running anbu ${port}`);
});