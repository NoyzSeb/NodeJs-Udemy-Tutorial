const Task = require("../models/Task")



const getAllTasks = (req,res)=>{
    res.json('all items from the file')
}

const createTask = async (req,res)=>{
    const task= await Task.create(req.body)
    res.status(201).json({task})
}

const getSingleTask = (req,res)=>{
    res.json(req.params)
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