require('dotenv').config()
const express = require('express')
const dbconnect = require('./db')
dbconnect()
var bodyParser = require('body-parser')
const { application } = require('express')
var cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api',require('./routes/createuser'))
app.use('/api',require('./routes/assigntask'))
app.use('/api',require('./routes/fetchuser'))
app.use('/api',require('./routes/fetchtask'))

app.listen(5000,()=>{
    console.log("Server is running")
})