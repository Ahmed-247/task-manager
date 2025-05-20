import taskModel from "../models/taskModel.js";


const postTask = async (req, res) =>{
    res.json(await taskModel.create({...req.body, owner:req.user.userid}))
}

const getTask = async (req, res) =>{
    
    res.json(await taskModel.find({ owner: req.user.userid }))
}

const getTaskId = async (req, res) => {
    res.json(await taskModel.findById(req.params.id))
}

const putTask = async (req,res) =>{
    res.json(await taskModel.findByIdAndUpdate(req.params.id, req.body, {new:true}))
       
}

const delTask = async (req, res) =>{
    res.json(await taskModel.findByIdAndDelete(req.params.id))
}

export {postTask, getTask, putTask, delTask, getTaskId};