const {MongoClient}=require('mongodb');

const url='mongodb://localhost:27017';
const dbName='changeright';
const client=new MongoClient(url);


async function connectToMongo(){

    try{
        await client.connect();
        console.log('yes mongo conected');
    }
    catch( err){
        console.log('error connecting monngodb:',err);
    }
}

async function insertUser(){

    const db=client.db(dbName);
    const collection=db.collection('users');

    const newUser=[{name:'rohith', age:37,address:'chennai',salary:33000},{name:'kannan', age:33,address:'chennai',salary:40000},{name:'neha', age:20,address:'trichy',salary:44000},{name:'yomahesh', age:44,address:'trichy',salary:22000},{name:'gayu', age:33,address:'chennai',salary:20000},{name:'thaman', age:36,address:'salem',salary:50000},{name:'ananth', age:55,address:'chengalpattu',salary:77000}]
     try{
        const insertResult=await collection.insertMany(newUser);
        console.log('user inserted:');
     }
     catch{
        console.error('error insrting user:'.err);
     }
}

async function getAllUsers(){
    const db=client.db(dbName);
    const collection= db.collection('users')
    try{
        const users = await collection.find({}).toArray();
   

        
    for(i=0;i<users.length;i++){
        console.log(i)
        if (users[i].age>30 && users[i].salary >30000)
        {

            console.log(users[i]['name'],users[i]['age'],users[i]['salary'])
         }
        
        }
     
    

       
    }

    catch(err) {
        console.error('Error retrieving users:', err);
    }
    
}
async function main() {
      await connectToMongo()

     await insertUser()

   await getAllUsers()


    
}
main();





