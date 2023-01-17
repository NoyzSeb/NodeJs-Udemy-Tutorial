const express=require("express")
const app= express()
let {people} = require('./data.js')

app.use(express.static('./methods-public'))
//To reach body parsed string(with 'false' flag).
app.use(express.urlencoded({extended: false}))

app.get('/api/people', (req,res)=>{
    res.status(200).json({data:people})
})

app.post('/login',(req,res)=>{
    const {name} = req.body
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    
})

app.listen(5000)