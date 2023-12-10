const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
  title: { type:String,required:true},
  body: { type:String,required:true},
  userID:{ type:String},
  username:{type:String}
},{
    versionKey:false
});

const NoteModel = mongoose.model('note', noteSchema);

module.exports = {NoteModel};
