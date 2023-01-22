const getAllTasks = (req,res)=>{
    res.send('all items from the file')
}

const createTask = (req,res)=>{
    res.send(req.body)
}

const getSingleTask = (req,res)=>{
    res.send(req.params)
}

const updateTask = (req,res)=>{
    const id = req.params
    const updatedTask = req.body
    res.status(200).json({Tasks_id:id, Updated_Task:updatedTask})
    
}

const deleteTask = (req,res)=>{
    const id = req.params
    res.json({Deleted_Tasks_id:id})
}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}