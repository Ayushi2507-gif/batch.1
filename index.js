const express = require("express");

const app = express();

app.use(express.json())

app.get('/', (req,res) =>{      //   '/' = PATH, REQ = REQUEST TO SERVER , RES = RESPONSE FROM SERVER 
    res.send("WELCOME TO CLASS")
})

app.post('/signup', (req,res) =>{
    res.send("Enter you login details here")

})

app.post('/login', (req,res) =>{
    res.send("you are logged in successfully")

})

app.get('/homepage', (req,res) =>{
    res.send("Your Dashboard")

})


app.get('/student', (req,res) =>{
    res.send("Student Data")

})

app.patch('/updatestudent', (req,res) =>{
    res.send("student details updated successfully")

})

app.delete('/deletestudent', (req,res) =>{
    res.send("Student Deleted")

})


app.listen(8800, () => {
    console.log("server is running")
})








// METHOD         CRUD OPERATION 

// GET       ==>     READ
// POST      ==>     CREATE
// PUT       ==>     UPDATE
// PATCH     ==>     UPDATE
// DELETE    ==>     DELETE