const express = require('express');
const { registerUser,loginUser,logoutUser} = require('../Controllers/userControllers');
 const {auth} = require('../middleware/auth.middleware');

const userRouter = express.Router();

userRouter.post('/register', registerUser);
 userRouter.post('/login', loginUser);
userRouter.get('/logout', auth,logoutUser);

module.exports = {userRouter};
