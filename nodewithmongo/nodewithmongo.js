const { MongoClient } = require('mongodb');

// MongoDB URI and Database
const uri = 'mongodb://localhost:27017';
const dbName = 'myappdb';
const client = new MongoClient(uri);

// Connect to MongoDB
async function connectToMongo() {
  try {
    await client.connect();
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

// Insert a new user into the 'users' collection
async function insertUser(name, email) {
  const db = client.db(dbName);
  const collection = db.collection('users');


  
  const newUser = { name, email };
  try {
    const insertResult = await collection.insertOne(newUser);
    console.log('User inserted:', insertResult);
  } catch (err) {
    console.error('Error inserting user:', err);
  }
}

// Get all users from the 'users' collection
async function getAllUsers() {
  const db = client.db(dbName);
  const collection = db.collection('users');


  
  try {
    const users = await collection.find().toArray();
    //console.log('Users:', users);
    let found;

    console.log(users.length)
    for(i=0;i<users.lenght;i++){
     
      console.log(users[i])
    }
      

  } catch (err) {
    console.error('Error retrieving users:', err);
  }





}

// Main function that connects to MongoDB and calls insert and get functions
async function main() {
  await connectToMongo();

  // Insert a new user
  //await insertUser('John Doe', 'johndoe@example.com');

  // Retrieve all users
  await getAllUsers();

  // Close the connection
  await client.close();
}

// Run the main function
main();
