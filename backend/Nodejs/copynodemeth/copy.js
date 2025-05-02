const fs=require('fs');
const{Transform}=require('stream');

const readStream=fs.createReadStream('input.txt');
const writeStream=fs.createWriteStream('output.txt');

const transformStream=new Transform({
    transform(chunk,encoding,callback){
        const transformedChunk=chunk.toString().split('').reverse().join('');
        this.push(transformedChunk);
        callback();
    }
});

readStream.pipe(transformStream).pipe(writeStream);
writeStream.on('finish',()=>{
    console.log('Data transformed and written successfull');
}

);
writeStream.on('error',(err)=>{
    console.log('Error occurred while writing data',err);
});