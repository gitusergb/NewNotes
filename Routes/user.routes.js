const express = require('express');
const { registerUser,loginUser} = require('../Controllers/userControllers');
// const authMiddleware = require('../middleware/authMiddleware');

const userRouter = express.Router();

userRouter.post('/register', registerUser);
 userRouter.post('/login', loginUser);
// userRouter.get('/logout', authMiddleware, logoutUser);

module.exports = {userRouter};
