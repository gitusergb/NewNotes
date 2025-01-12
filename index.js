
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');

const express = require('express');
const mongoose = require('mongoose');
 
const {connection} = require("./db")
const {userRouter}= require("./Routes/user.routes");
 const {cartRouter} = require('./Routes/cart.routes');

const app = express();

app.use(express.json())
app.use(express.static('public'));
 app.use(cors())


 app.use("/carts",cartRouter)
app.use("/users",userRouter)


  const PORT = process.env.PORT || 4000;

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