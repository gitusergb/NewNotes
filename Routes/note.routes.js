const express = require('express');
const {createNote,seeNote, updateNote,deleteNote} = require('../Controllers/noteControllers');
const {authMiddleware} = require('../middleware/auth.middleware');

const noteRouter = express.Router();
//restricted

noteRouter.post('/create',authMiddleware, createNote);
noteRouter.get('/',authMiddleware,seeNote);
noteRouter.patch('/update/:noteID',authMiddleware, updateNote);
noteRouter.delete('/delete/:noteID',authMiddleware, deleteNote);

module.exports = {noteRouter};