const express = require('express');
const {createNote,seeNote,updateNote,deleteNote} = require('../Controllers/noteControllers');
const {auth} = require('../middleware/auth.middleware');

const noteRouter = express.Router();
//restricted

noteRouter.post('/create',auth, createNote);
noteRouter.get('/',auth,seeNote);
noteRouter.patch('/update/:noteID',auth,updateNote);
noteRouter.delete('/delete/:noteID',auth,deleteNote);

module.exports = {noteRouter};