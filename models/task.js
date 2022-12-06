const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type:String,
    required:[true, "mast be provide name"],
    maxLength:[20,"name can not more than 20 characters"],
    trim:true
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

const taskModel = mongoose.model("task", taskSchema);
module.exports = taskModel;