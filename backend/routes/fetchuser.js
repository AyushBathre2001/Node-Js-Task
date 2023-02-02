
const express = require('express')
const mongoose = require('mongoose')

const User = require('../models/user')


const router = express.Router()

router.get('/fetchuser',async(req,res)=>{
    try {
        const users = await User.find({type:'user'})
        res.json(users)

    } catch (error) {
        res.send("Internal server error")
    }
})

module.exports = router