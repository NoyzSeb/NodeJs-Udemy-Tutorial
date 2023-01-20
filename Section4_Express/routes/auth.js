const express = require('express')
const { upperFirst } = require('lodash')
const router = express.Router()

router.post('/',(req,res)=>{
    const {name} = req.body
    if(name) {
        const Upname = upperFirst(name);
        return res.status(200).send(`Welcome ${Upname} `)

    }
    return res
    .status(400)
    .json({success:false, msg:'Please provide Credantials.'})
})

module.exports=router