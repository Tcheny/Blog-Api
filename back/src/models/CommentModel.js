import mongoose from 'mongoose'; // middleware mongoose
import moment from 'moment';

// Création du Schema et model
const Schema = mongoose.Schema;
let NewComment = new Schema({
  author : {
    type : String,
    required : true
  },
  comment : {
    type :  String,
    required : true
  },
  date : {
    type : String,
    default: moment().calendar()
  }
},{ versionKey : false });

export default mongoose.model('Comment', NewComment);
