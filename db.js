
const mongoose = require("mongoose")
require("dotenv").config()

 const connection = mongoose.connect(process.env.mongoconnect, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    console.log('Connected to MongoDB');
    module.exports = {
        connection
    }

     
 
    