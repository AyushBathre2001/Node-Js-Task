const mongoose = require('mongoose')

const URI = "mongodb+srv://ayush:ayush2001@cluster0.dmycucg.mongodb.net/nodetask?retryWrites=true&w=majority"
mongoose.set('strictQuery',true)
const dbconnect = async ()=>{
    mongoose.connect(URI).then(()=>{
        console.log("Connected")
    }).catch(()=>{
        console.log("Not connected")
    })
}

module.exports = dbconnect