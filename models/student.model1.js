// Define the schema of the students collection to be stored in the DB

const mongoose = require('mongoose')

// Schema
const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    age: {
        type: Number,
        min:10
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        minLength : 15
    },
    subjects : [String],
    createdAt:{
        type: Date,
        immutable: true,
        default : ()=>{
            return Date.now()
        }
    }
})


// Go ahead and create corresponding collection in the DB and make it module
// So that we can call from anywhere
module.exports = mongoose.model("Student", studentSchema)