const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {NoteModel}= require('../Models/note.model');


//post
const createNote = async (req, res) => {
  try { 
const note = new NoteModel(req.body)
await note.save()
res.status(200).json({ msg:'A new note has been Created',Note:note});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//get
const seeNote =async( req ,res)=>{
    try { 
        const notes = await NoteModel.find({userID:req.body.userID})
        res.status(200).send(notes);
          } catch (error) {
            res.status(400).send({ error: error.message });
          }

}


//update/patch
const updateNote =async(req ,res)=>{
const {noteID}=req.params
    try { 
        const note = await NoteModel.findOne({_id:noteID})
        if(req.body.userID===note.userID){
       await NoteModel.findByIdAndUpdate({_id:noteID},req.body)
       res.status(200).send({ msg:`Note with Id:${noteID} has been updated`});}
       else{
        res.status(400).send({ msg:`You are not Authorised`});}
       
          } catch (error) {
            res.status(400).send({ error: error.message });
          }

}


//delete
const deleteNote =async(req ,res)=>{
    const {noteID}=req.params
        try { 
            const note = await NoteModel.findOne({_id:noteID})
            if(req.body.userID===note.userID){
           await NoteModel.findByIdAndDelete({_id:noteID})
           res.status(200).send({ msg:`Note with Id:${noteID} has been deleted`});}
           else{
            res.status(400).send({ msg:`You are not Authorised`});}
           
              } catch (error) {
                res.status(400).send({ error: error.message });
              }
    
    }

module.exports = {createNote,seeNote,updateNote,deleteNote};