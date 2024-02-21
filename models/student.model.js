// Define the schema of the students collection to be stored in the DB

const mongoose = require('mongoose')

// Schema
const studentSchema = new mongoose.Schema({
    name:String,
    age:Number
},{versionKey : false, timestamps:true})


// Go ahead and create corresponding collection in the DB and make it module
// So that we can call from anywhere
module.exports = mongoose.model("Student", studentSchema)

