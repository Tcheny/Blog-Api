import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let NewArticle = new Schema({
  title : {
  type : String,
  required : true
  },
  article : {
    type : String,
    required : true
  },
  comment : [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
}, {versionKey : false});

export default mongoose.model("Article", NewArticle);
