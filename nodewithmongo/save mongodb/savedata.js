const {MongoClient}=require('mongodb');

const url= 'mongodb://localhost:27017';
const dbName='rajmanchudb';
const client=new MongoClient(url);


async function connectToMongo(){

try{
    await client.connect();
    console.log('mongodb connected');

}
catch (err){
    console.log("error connnecting mongodb:",err);
}

}


async function insertUser(){
    const db=client.db(dbName);
    const collection=db.collection('users');

const newUser=[{name:'rohith', age:37,address:'chennai',work:'employee'},{ name:'amar', age:28,address:'mayiladuthurai',work:'printer'},{ name:'neha', age:19,address:'karaikudi',work:'student'},{name:'kamalya', age:19,address:'sirkali',work:'student'}];
try{
    const insertResult=await collection.insertMany(newUser);
    console.log('user inserted:');

}
catch{
    console.error('error inserting user:',err);
}


}

async function getAllUsers(){
    const db=client.db(dbName);
    const collection =db.collection('users');
     try{
    const users = await collection.find({}).toArray();
    // console.log(users.age);

    for(i=0;i<users.length;i++){
        if (users[i].age<30)
        {
        //  console.log(users[i]["name"])
         if(users[i].address=='chennai'){
            console.log('users[i]["name"]')
         }
        }

       }



    // if(users.age>30){

    //     console.log(users)
    // }
    // else{
    //     console.log('sorry your mistake')
    // }

}
catch(err) {
    console.error('Error retrieving users:', err);
}
}

async function main() {
    await connectToMongo();

     await insertUser()

    await getAllUsers();


    
}
main();

