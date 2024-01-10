
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');


//1 
const express = require('express');
const mongoose = require('mongoose');
 
const {connection} = require("./db")
const {userRouter}= require("./Routes/user.routes");
const { noteRouter } = require('./Routes/note.routes');

//2
const app = express();

app.use(express.json())
app.use(express.static('public'));
 app.use(cors())

  

app.use("/users",userRouter)
app.use("/notes",noteRouter)


  const PORT = process.env.PORT || 3000;

    async function startServer() {
        try {
          await connection;
          console.log("Database connection Established");
        } catch {
          console.log("Database connection Failed");
        }
      
        app.listen(PORT,() => {
          console.log(`Server is running at http://localhost:${PORT}`);
          console.log("Server Started");
        });
      }
      
      startServer();