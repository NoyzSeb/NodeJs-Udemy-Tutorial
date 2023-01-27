const mongoose= require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'Name can not be more than 20 characters'],
        
        
    }
    ,completed:{
        
        type:Boolean,
        default:false
    },
})

//the 'name' parameter in the 'model' function, used for to create task's name
module.exports=mongoose.model('Task',TaskSchema)