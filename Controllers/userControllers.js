const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {UserModel}= require('../Models/user.model');

const registerUser = async (req, res) => {
    const {username,email,password}=req.body
 
  try { 

 bcrypt.hash(password,5,async(err,hash)=>{
    if(err){
            res.status(200).send({"error":err})
    }else{
        const user=new UserModel({username,email,password:hash})
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
        const token = jwt.sign({ userID:user._id,username:user.username},process.env.key);
        res.status(200).send({ msg:'Login successful!', "token" : token });
     }else{
        res.status(400).send({ error:'Invalid email or password' });
     }
    })
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

// const logoutUser = async (req, res) => {
//   try {
//     req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
//     await req.user.save();

//     res.status(200).json({ msg: 'User has been logged out' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };, loginUser, logoutUser 

module.exports = {registerUser,loginUser};
