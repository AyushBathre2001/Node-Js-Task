const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    task:{
        type:String,
        required:true
    },
    tasktype:{
        type:String,
        required:true
    },
    type:{
      type:String,
      default:'task'  
    }
})

module.exports = mongoose.model('task',taskSchema)