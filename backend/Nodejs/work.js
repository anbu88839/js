const fs = require('fs');
const readStream = fs.createReadStream('side.txt');
const writeStream = fs.createWriteStream('outbox.txt');


readStream.on('data', (chunk) => {
  const modifiedChunk = {
    if(readStream="end"){
        writeStream.write(chunk);
    },
        
    }
  
});

readStream.on(() => {
    writeStream.write(modifiedChunk);
 
  });