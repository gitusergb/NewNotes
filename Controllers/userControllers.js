const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {UserModel}= require('../Models/user.model');


const registerUser = async (req, res) => {
    const {fullname,email,password}=req.body
 
  try { 
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });
 bcrypt.hash(password,10,async(err,hash)=>{
    if(err){
            res.status(200).send({"error":err})
    }else{
        const user=new UserModel({fullname,email,password:hash})
        await user.save()
        res.status(200).json({ msg: 'The new user has been registered',registeredUser:user});
    }
 });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async(req, res) => {
    const {email, password} = req.body;
  try {
   
    const user = await UserModel.findOne({email});
    bcrypt.compare(password,user.password,(err, result)=>{
     if(result){
        const token = jwt.sign({ userID:user._id,fullname:user.fullname},process.env.key ,{ expiresIn: '1h' });
        res.status(200).send({ msg:'Login successful!', "token" : token,"userID":user._id,"fullname":user.fullname });
     
      }else{
        return res.status(400).send({ error:'Invalid email or password' });
     }
    })
  } catch (err) {
    res.status(400).json({ error: err });
  }
};


// GET /users/logout
const logoutUser = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    res.status(200).json({ msg: 'User has been logged out' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {registerUser,loginUser, logoutUser };
