const express = require('express')
const router = express.Router()
const {
    getPeoples,
    createPeople,
    updatePeople,
    deletePeople
} = require('../controllers/people')

//Alternative way to use router with controller constants.

router.route('/').get(getPeoples).post(createPeople)
router.route('/:id').put(updatePeople).delete(deletePeople)




/*
//Shows all persons.
router.get('/', getPeoples)

//Shows person by name.

router.post('/',createPeople)
//Change the id's person's name with input name.

router.put('/:id', updatePeople)

//Delete the person with input id.
router.delete('/:id',deletePeople)
*/
module.exports=router