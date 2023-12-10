
const cors = require('cors');
require('dotenv').config();

//1 
const express = require('express');
const mongoose = require('mongoose');
 
const {connection} = require("./db")
const {userRouter}= require("./Routes/user.routes");
const { noteRouter } = require('./Routes/note.routes');

//2
const app = express();

app.use(express.json())
 app.use(cors())

app.use("/users",userRouter)
app.use("/notes",noteRouter)

app.get('/', (req, res) => {
    res.send('Welcome To Notes App page');
  });


  const PORT = process.env.PORT || 3000;
  //3
  app.listen(PORT,async()=> {
    try {
        //8
        await connection
        console.log("Database connection Established")
        console.log(`Server is running at http://localhost:${PORT}`);
    }
    catch {
        console.log("Database connection Failed")
    }
    console.log("Server Started")
    })

   