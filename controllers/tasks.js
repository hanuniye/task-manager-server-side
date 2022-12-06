const taskModel = require("../models/task");
const asyncWraper = require("../middleware/asyn")

// routeka koowaad waxan ku samaynay refactor ama soo gaabin 
const getAllTasks = asyncWraper( async (req, res) => {
    const task = await taskModel.find()
    res.status(200).json({sucess: true, task})
})

const createTasks = async (req, res) => {
  try {
    const task = await taskModel.create(req.body);
    res.status(200).json({sucess: true, task});
  } catch (error) {
    res.status(400).json({sucess: false, error:error.errors.name.message})
  }
  
}
const getTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findOne({_id:id});

    if(!task){
      return res.status(404).json({sucess: false, data:"not found"})
    }

    res.status(200).json({sucess: true, task});
  } catch (error) {
    res.status(500).json({sucess: false, error})
  }
}
const updateTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findByIdAndUpdate(id, req.body,{
      new:true, runValidators:true
    });
    if(!task){
      res.status(404).json({sucess: false, data:`no task with id:${id}`})
    }
    res.status(200).json({sucess: true, task});

  } catch (error) {
    res.status(400).json({sucess: false, error})
  }
}
const deleteTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskModel.findByIdAndDelete(id)
    if(!task){
      return res.status(404).json({sucess: false, data:`not task with ${id}`})
    }
    res.status(201).json({sucess: true, task})
  } catch (error) {
    res.status(500).json({sucess: false, error})
  }
}

module.exports = {
  getAllTasks,
  createTasks,
  getTasks,
  updateTasks,
  deleteTasks
}