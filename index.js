const mongoose = require('mongoose');
const studentModel = require('./models/student.model')
// const studentModel = require('./models/student.model1')

// Write the code to connect with MongoDB
mongoose.connect("mongodb://localhost:27017/be_demodb")

const db = mongoose.connection /// Start the connection with MongoDB

db.on("error",()=>{
    console.log("Error while connecting to DB ")
});

db.once("open",()=>{
    console.log("Connected to MongoDb")
    // Logic to insert data into the db
    init();

    // For running the query on mongodb
    dbQueries();
})

async function init(){
    // Logic to insert data in the DB
    const student = {
        name:"Abhi",
        age:23
        // email:"abc@gamil.com",
        // subjects:["Maths", "English"]
    }

    const std_obj = await studentModel.create(student)
    console.log(std_obj);
}


async function dbQueries(){
    // Read the data
    console.log("Inside the db funtion")

    // Read the data based on the id
    try{
        const student= await studentModel.findById("65d0c699ed81ffbb13227bf5")
        console.log(student)
    } catch(err){
        console.log(err)
    }

    // I want to go and search based on name
    try{
        const student = await studentModel.find({name:"Aarti"})   // []
        // const student = await studentModel.findOne({name:"Aarti"})  // null
        console.log(student)
    } catch(err){
        console.log(err + "Not Present")
    }
    
    // Deal with the multiple conditions
    // const std = await studentModel.where("Age").length("10").where("name").equals("Abhi")
    // console.log(std);


    // Delete one document where name = "Abhi"
    const std1 = await studentModel.deleteOne({name: "Abhi"})
    console.log(std1);
}




