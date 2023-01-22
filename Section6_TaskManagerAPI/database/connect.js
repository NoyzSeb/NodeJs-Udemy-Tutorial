const mongoose = require('mongoose')

const connectionString= 
'mongodb+srv://Noyz:1234@taskmanager03.ps1afmd.mongodb.net/TaskManagerDB?retryWrites=true&w=majority'

const connectDB = (url) =>{
    return mongoose
    .connect(connectionString,{
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
    .then(()=>console.log('CONNECTED TO THE DB'))
    .catch((err)=>console.log(err))
}



module.exports=connectDB