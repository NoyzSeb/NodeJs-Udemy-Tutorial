
let {people} = require('../data.js')

const getPeoples = (req,res)=>{
    res.status(200).json({data:people})
}

const createPeople= (req,res)=>{
    const {name}= req.body
    if(!name){
        return res
        .status(400)
        .json({success:false, msg:'Please provide name value.'})
    }
    res.status(201).json({success:true, people:name})
}

const updatePeople = (req,res)=>{
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
}

const deletePeople = (req,res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))
    if(!person){
        return res
        .status(400)
        .json({success:false, msg:`No person with id ${req.params.id}`})
    }

    const newPeople= people.filter((person)=> person.id !==Number(req.params.id))
    res.status(200).json({success:true,data:newPeople})
}

module.exports = {
    getPeoples,
    createPeople,
    updatePeople,
    deletePeople
}