const express = require('express');
const {createNote,seeNote,IdgetNote,updateNote,deleteNote} = require('../Controllers/noteControllers');
const {auth} = require('../middleware/auth.middleware');

const noteRouter = express.Router();
//restricted

noteRouter.post('/create',auth, createNote);
noteRouter.get('/',auth,seeNote);
noteRouter.get('/:noteID',auth,IdgetNote);
noteRouter.patch('/update/:noteID',auth,updateNote);
noteRouter.delete('/delete/:noteID',auth,deleteNote);

module.exports = {noteRouter};