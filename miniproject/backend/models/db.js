const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/miniproject')
.then(()=>console.log('mongodb connected with miniproject'))
.catch(err=>console.error('mongodb error',err))