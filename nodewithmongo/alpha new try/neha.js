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

    }
    catch{
        console.error('Error inserting user:',err)
    }

}
async function getAllUsers(){

    const db=client.db(dbName);
    const collection=db.collection('users');

    try{
        const users = await collection.find({}).toArray();
        console.log('users',users);

    }
    catch(err) {
        console.error('Error retrieving users:', err);
    }
}



async function main(){
    await connectToMongo();

    await insrtUser('anbu','anbu00@gmail.com');

    await getAllUsers();
    await client.close();
}

main();