import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let NewComment = new Schema({
  title : {
    type :  String,
    required : true
  },
  blog : [
    {
    type : Schema.Types.ObjectId,
    ref : 'Comment'
  }
]
},{ versionKey : false });

export default mongoose.model('Comment', NewComment);
