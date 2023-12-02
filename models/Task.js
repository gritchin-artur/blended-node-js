const mongoose = require("mongoose")
const tasks = require("../routes/tasks")

const schema = mongoose.Schema({
   title: {type: String, required: true},
   completed: {type: Boolean, default: false},
    })

    const Task = mongoose.model('task', schema) 

    module.exports = Task