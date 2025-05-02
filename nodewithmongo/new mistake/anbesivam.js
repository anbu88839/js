
const{MongoClient}=require('mongodb');

 const uri='mongodb://127.0.0.1:27017';
 const dbName='myappdb';
 const client=new MongoClient(uri);


 async function connectToMongo(){

    try{
    await client.connect();
    console.log('MongoDB connected');
    }
    catch(err){
        console.error('Connection error:', err);
    }
 }

 
async function insrtUser(name,email){

    const db=client.db(dbName);
    const collection=db.collection('user');
    const newUser={name,email};


    try{
        const insertResult= await collection.insertOne(newUser);
        console.log('User insrted:',insertResult);


        console.log(newUser)
    

    }
    catch{
        console.error('Error inserting user:',err)
    }
}

function main(){
insrtUser('arul','arul@gmail.com')

// if('arul'){
//     'yes you are right'
// }
// else{
//     'sorry boiiiii'
// }
}
main()