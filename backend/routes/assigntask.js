const express = require('express')
const Task = require('../models/task')

const router = express.Router()

router.post('/assign',async (req,res)=>{
    try {
        let success = false
        const {name,email,task,tasktype} = req.body
        const tk = await Task.create({name,email,task,tasktype})
        if(tk){
            success = true
            res.json({"success":success})
        }
        else{
            res.json({"success":success})
        }
    } catch (error) {
        res.send("Internal server error")
    }
})

module.exports = router