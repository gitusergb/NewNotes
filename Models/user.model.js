const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  fullname: { type:String,required:true},
  email: { type:String,required:true , unique: true },
  password: { type:String,required:true,minlength:8}
 
},{
    versionKey:false,
    timestamps: true
});

const UserModel = mongoose.model('User', userSchema);
module.exports = {UserModel};
