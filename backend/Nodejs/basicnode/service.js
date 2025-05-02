//first class 

//  const os=require('os')
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())   

/* console.log(__dirname)
console.log(__filename) */
/* 
const path=require("path")
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename)) */


// const m=require('./math.js')
// console.log(m.add(5,8));
// console.log(m.sub(5,8));
// console.log(m.mul(5,8));  

// const {add,sub,mul}=require("./math")
// console.log(add(8,8));
// console.log(sub(5,8));
// console.log(mul(5,8)); 



//Class 2 


// Directory creation
//fs - file system , mkdir - make directory
/* const fs = require('fs');
fs.mkdir("krishna", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Directory created successfully.');
}
)  */


// Check the directory

/* const fs = require('fs');
fs.readdir('./krishn', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Files in the directory');
}); */

// Check the file
 /*const fs = require('fs');
const filePath = './n.js';
if (fs.existsSync(filePath)) {
  console.log('File exists.');
} else {
  console.log('File does not exist.');
}   */


//write and create a file
const fs = require('fs');
const filePath = 'n.js';
const dataToWrite = ' console.log("Vanakkam TamiZha")';
const encoding = 'utf8';
fs.writeFile(filePath, dataToWrite, encoding, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data has been written to the file.');
}); 



//File reading
/*const fs = require('fs');
const filePath = 'n.js';
const encoding = 'utf8';
fs.readFile(filePath, encoding, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  console.log("***********")
});
console.log("ended") */


//File Rename
/* const fs = require('fs');
const oldFilePath = 'n.js';
const newFilePath = 'newfile.txt';
fs.rename(oldFilePath, newFilePath, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File renamed successfully.');
}); */



//file edition date and time
 /*const fs = require('fs');
const filePath = './newfile.txt';
fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File size (in bytes):', stats.size);
  console.log('Last modified:', stats.mtime);
}); */

//file deleting
 /*const { unlink } = require('fs');
unlink('newfile.txt', (err) => {
  if (err) throw err;
  console.log('successfully deleted ');
});*/

/*  function func(a,b,c){
  console.log(a-b+c)
}

const a1=(a,b)=>{
  c=a+b
  console.log(c)
}


const print1=(a,b)=>{
  console.log("********************************")
  console.log("\tAddition")
  console.log("********************************")
  
  console.log("\t",a)
  console.log("\t",b)
  console.log("********************************")
  console.log("\t",a+b)

}

print1(78,56)  */




//Class 4
/* const fs = require('fs');

 function someAsyncOperation(callback) {
  fs.readFile('/n.txt', callback);
} */
// setTimeout(() => {
//   console.log('timeout');
// }, 2000);

// setImmediate(() => {
//   console.log('immediate');
// });


// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;
//   console.log(Date.now(),timeoutScheduled)
//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 1000);


/* someAsyncOperation(() => {
  const startCallback = Date.now();
  while (Date.now() - startCallback < 1000) {
    
  }
});  */


/* const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');

  }, 1200);
  setImmediate(() => {
    console.log('immediate');
  });
}); 
 */


/* 
let a=1
while(a<=10){
setTimeout(() => {
  console.log('timeout');
}, 10000);

setImmediate(() => {
  console.log('immediate');
});
a=a+1
} */

/* a=1
do{
  setTimeout(() => {
    console.log('timeout');
  }, 1000);
  
  setImmediate(() => {
    console.log(`${a}immediate`);
  });
  a=a+1

}while(a<10) */






/* let b;
function someAsyncApiCall(c) {
  c();
}
someAsyncApiCall(() => {
  console.log('b', b); // undefined
}); */




//Day 5

 
/* var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
   console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");  */



 /*   const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

  eventEmitter.on('start', () => {
  console.log('started');
});
eventEmitter.emit('start');

eventEmitter.on('start', number => {
  console.log(`started ${number}`);
});
eventEmitter.emit('start', 23);


eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});
eventEmitter.emit('start', 1, 100);  */

  

   
/* import { createReadStream, ReadStream } from 'fs';

var readStream: ReadStream = createReadStream('./data.txt');

readStream.on('data', chunk => {
  console.log('---------------------------------');
  console.log(chunk);
  console.log('---------------------------------');
});

readStream.on('open', () => {
  console.log('Stream opened...');
});

readStream.on('end', () => {
  console.log('Stream Closed...');
}); */
 

/* const fs = require('fs');

const readableStream = fs.createReadStream('./article.md', {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    process.stdout.write(`[${readableStream.read()}]`);
});

readableStream.on('end', () => {
    console.log('DONE');
});   */


/* const http = require('http');
 const server = http.createServer((req, res) => {
  let body = '';
  req.setEncoding('utf8');
  req.on('data', (chunk) => {
      body += chunk;
  });
  req.on('end', () => {
      console.log(body);
      try {
          // Send 'Hello World' to the user
          res.write('Hello World this is new javascript');
          res.end();
      } catch (er) {
          res.statusCode = 400;
          return res.end(`error: ${er.message}`);
      }
  });
}); 
server.listen(5000, () => {
  console.log('Server is running on port 5000'); 
});  
 */

/* global.x = 5;
setTimeout(() => {
  debugger;
  console.log('world');
}, 0);
console.log('hello'); */    