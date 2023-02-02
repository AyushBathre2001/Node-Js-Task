const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.post('/createuser',async(req,res)=>{
    try {
        let success = false
        const {name,email,phone} = req.body
        const user = await User.create({name,email,phone})
        if(user){
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
