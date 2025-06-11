const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/anbuproduct')
.then(()=>console.log("mongoDB connected"))
.catch(err=>console.error('mongoDB connection error:',err))