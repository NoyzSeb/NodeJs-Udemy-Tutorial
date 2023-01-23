const connectDB=require('./database/connect')
const express = require('express')
const app = express()
const port = 3000;
const tasks = require('./routes/tasks')
require('dotenv').config()

//middleware
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)


app.get('/hello', (req,res)=>{
    res.send('Hello friendly neighborhood')
})

//this will provide us the start server only if we succesfully conntected to database.
const start= async()=>{
    try {
        connectDB(process.env.MONGO_DB_URI)
        app.listen(port,()=>console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()

