const http=require('http');
const fs=require('fs');
http.createServer(function(req,res){

    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all domains (for development)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    fs.readFile('anbu.json',function(err,data){
        res.writeHead(200,{"constent-type":"text/json"});
        res.write(data);
        return res.end();
    });
})
.listen(8883,()=>{
    console.log('server is running on port 8883');
})