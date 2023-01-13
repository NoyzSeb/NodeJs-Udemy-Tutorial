const express = require("express")
const path = require("path")
const app = express()

const { products, people }=require("./data")

//setup static and middleware, these are doesn't need to chance on every request.
app.use(express.static('./NoNeedToChange'))

app.get('/', (req,res)=>{
   res.sendFile(path.resolve(__dirname,"./navbar-app/index.html")) 
   res.json(products)
   
})

app.get('/about', (req,res)=>{
    res.status(200).send('<h1>About Page</h1>')
})

//For the all not found researches
app.all('*', (req,res)=>{
    res.status(404).send('<h1>NOT FOUND</h1>')
} )
app.listen(5000)