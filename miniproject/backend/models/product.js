const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    address:{type:String, required:true},
    age:{type:Number,required:true}
})

module.exports= mongoose.model('product', userSchema);