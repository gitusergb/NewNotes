const jwt = require('jsonwebtoken');

const auth =(req, res, next) => {
 
   const token = req.headers.authorization?.split(" ")[1];
   if(token){
    jwt.verify(token,`${process.env.key}`,(err,decoded)=>{
        if(decoded){
            console.log("decoded",decoded);
            console.log("userID",decoded.userID);
            req.body.userID=decoded.userID
            req.body.fullname=decoded.fullname
        
            next();
        }else{
            res.send({ msg:"You are not Authorised"})
        }
    });
   }else{
             res.send({ msg:"Please Login!"})
    }
};


module.exports = {auth};