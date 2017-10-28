import mongoose from 'mongoose'; // middleware mongoose

// Création du Schema et model
const Schema = mongoose.Schema;
let NewComment = new Schema({
  author : {
    type : String,
    required : false
  },
  title : {
  type : String,
  required : true
  },
  comment : {
    type :  String,
    required : true
  },
  date : {
    type : Date,
    default: Date.now
  },
  blog : [
    {
    type : Schema.Types.ObjectId,
    ref : 'Comment'
  }
]
},{ versionKey : false });

export default mongoose.model('Comment', NewComment);
