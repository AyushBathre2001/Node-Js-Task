
const express = require('express')
const mongoose = require('mongoose')

const Task = require('../models/task')


const router = express.Router()

router.get('/fetchtask',async(req,res)=>{
    try {
        const tasks = await Task.find({type:'task'})
        res.json(tasks)

    } catch (error) {
        res.send("Internal server error")
    }
})

module.exports = router