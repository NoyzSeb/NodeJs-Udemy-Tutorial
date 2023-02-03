require('dotenv').config()

//async errors

const express = require("express")
const app= express()
const connectDB=require("./db/connect")
const productsRouter = require("./routes/products")

//Error middlewares

const notFoundMW= require('./middleware/not-found')
const errorHandlerMW= require('./middleware/error-handler')


//Roots
app.use(express.json())

//Routes
app.get("/",(req,res)=>{
    res.send('<h1> Store API </h1> <a href="/api/v1/products">Products route</a>')
})

app.use('/api/v1/products', productsRouter)


app.use(errorHandlerMW)
app.use(notFoundMW)

const port = process.env.PORT || 3000
const start = async()=>{
    
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Connected to ${port} port`))
    } catch (error) {
        console.log(`Can not connected to port.\n msg:${error}` )
    }
}

start()
