const express=require("express")
const app= express()
let {people} = require('./data.js')

app.use(express.static('./methods-public'))
//To reach body parsed string data(with 'false' flag).
app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())

app.get('/api/people', (req,res)=>{
    res.status(200).json({data:people})
})

app.post('/login',(req,res)=>{
    const {name} = req.body
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    
})
//Shows person by name.
app.post('/api/people',(req,res)=>{
    const {name}= req.body
    if(!name){
        return res
        .status(400)
        .json({success:false, msg:'Please provide name value.'})
    }
    res.status(201).json({success:true, people:name})
})
//Change the id's person's name with input name.
app.put('/api/people/:id', (req,res)=>{
    const {id}= req.params
    const {name}= req.body
    const person = people.find((person)=> person.id === Number(id))
    if(!person){
        return res
        .status(400)
        .json({success:false, msg:`No person with id ${id}`})
    }
    
    const newPeople =people.map((person)=>{
        if(person.id == Number(id)){
            person.name = name
        }
        return person

    }) 
    res.status(200).json({success:true,data:newPeople})
})

//Delete the person with input id.
app.delete('/api/people/:id',(req,res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))
    if(!person){
        return res
        .status(400)
        .json({success:false, msg:`No person with id ${req.params.id}`})
    }

    const newPeople= people.filter((person)=> person.id !==Number(req.params.id))
    res.status(200).json({success:true,data:newPeople})
})
app.listen(5000)