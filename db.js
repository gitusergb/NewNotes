
//4
const mongoose = require("mongoose")
require("dotenv").config()

//6
 const connection = mongoose.connect(process.env.mongoconnect, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    console.log('Connected to MongoDB');

    
    //7
    module.exports = {
        connection
    }

     
 
    