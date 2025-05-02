const { MongoClient } = require('mongodb');

// MongoDB URI and Database
const uri = 'mongodb://localhost:27017';
const dbName = 'myappdb';
const client = new MongoClient(uri);




async function getAllUsers() {
    await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('user');


  
  try {
    const users = await collection.find().toArray();
    //console.log('Users:', users);
    let found;

    console.log(users.length)

    for(i=0;i<users.length;i++){
     if (users[i]["name"]=="arul")
     {
      console.log(users[i]["name"])
     }
    }
      

  } catch (err) {
    console.error('Error retrieving users:', err);
  }

  client.close();



}


async function main() {

  await getAllUsers();

 
}

// Run the main function
main();
