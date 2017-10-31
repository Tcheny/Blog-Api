import mongoose from 'mongoose'; // middleware mongoose
import moment from 'moment';

// Création du Schema et model
const Schema = mongoose.Schema;
let NewArticle = new Schema({
  author : {
    type : String,
    required : true
  },
  title : {
  type : String,
  required : true
  },
  article : {
    type : String,
    required : true
  },
  date : {
    type : String,
    default: moment().format('YYYY-MM-DD, h:mm a')
  },
  comment : [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
}, {versionKey : false});

export default mongoose.model("Article", NewArticle);
