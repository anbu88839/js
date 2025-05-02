// day 1

/*const os=require('os')
console.log(os.type())
console.log(os.version())
console.log(os.homedir())
*/


// console.log(__dirname)
// console.log(__filename)



/*const path=require("path")
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))*/

/*const m=require('./math.js')
console.log(m.add(10,20))
console.log(m.sub(20,10))
console.log(m.mul(5,10))*/



// const {add,sub,mul}=require("./math")
// console.log(add(12,8))
// console.log(sub(12,2))
// console.log(sub(10,20))







// day 2

// directory creation
// fs-file System, mkdir- make directory

// const fs=require('fs')
// fs.mkdir('./anbu',(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('Directory created successfully.')
// })


// check the directory
 
// const fs=require('fs')
// fs.readdir('./anbu',(err,files)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('files in the directory')
// })


// const fs=require('fs');
// const filepath='./njs';
// if(fs.existsSync(filepath)){
//     console.log('file exists.');
// }
// else{
//     console.log('file does not exist.');
// }


// write and create a file
/*const fs =require('fs');
const filepath='n.js';
const dataToWrite='console.log("vanakam chennai")';
const encoding='utf8'
fs.writeFileSync(filepath,dataToWrite,encoding,(err)=>{
    if(err){
        console.log(err);
        return;
    }
 console.log('data has been written to the file.');
 
});*/

// day 4

/*setTimeout(()=>{
    console.log('timeout');
},2000);

setImmediate(()=>{
    console.log('immediate');
},);

const timeoutScheduled=Date.now();

setTimeout(()=>{
    const delay=Date.now()-timeoutScheduled;
    console.log(Date.now(),timeoutScheduled)
    console.log(`${delay}ms have passed since the timeout was scheduled.`);
},1000);*/






/*
let a=1
while(a<=10){
    setTimeout(()=>{
        console.log('You stay here until then');
    },10000);

    setImmediate(()=>{
        console.log('alpha');
    });
    a=a+1
}
*/

/*
function ok(){

    for(i=1;i<10;i=i+1)
    {
        setTimeout(()=>{

            console.log('You stay here until then');
        },10000);

        setImmediate(()=>{
            console.log('alpha');
        })}
        
    
        
        
    
}
ok();*/

//for loop
// sum=0;
// for(let i=2; i<=10;i=i+2)
// {
// count=sum+i;
// console.log(count);
// } 


/*
a=1
do{
  setTimeout(() => {
    console.log('timeout');
  }, 1000);
  
  setImmediate(() => {
    console.log(`${a}immediate`);
  });
  a=a+1

}while(a<10) */

// file reading
/*
const fs=require('fs');
const filepath='n.js';
const encoding='utf8';
fs.readFile(filepath,encoding,(err,data)=>{
    if(err){
        console.reeor(err);
        return;
    }
    console.log(data);
});
console.log("it will come fast")
*/

// file rename
/*
const fs=require('fs');
const oldFilePath='n.js';
const newFilePath='n1.js';
const encoding='utf8';
fs.rename(oldFilePath,newFilePath,(err)=>{
    if(err){
        console.error(err);
        return;    }
        console.log("file rename successfully");
});
*/

// file edition date and time
/*
const fs =require('fs');
const filepath='n1.js';
fs.stat(filepath,(err,stats)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('file size (in bytes);',stats.size);
    console.log('last modified :',stats.mtime);
});*/


// file deletion

const {unlink}=require('fs');
unlink('mk.text',(err)=>{
    if(err)throw err;
    console.log('file deleted successfully');
});





















