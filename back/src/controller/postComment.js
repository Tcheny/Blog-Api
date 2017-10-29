import express from 'express';

import Article from '../models/ArticleModel';
import Comment from '../models/CommentModel';

const api = express.Router();

// POST
// Ajouter un commentaire à un article
// route /app/blog/:id/comment/add
// ============================
api.post('/:id/comment/add', ( req, res ) => {
  const newComment = new Comment( req.body );
  newComment.save((err, comment) => {
    if ( err ) return res.send( err );
    Article.findByIdAndUpdate(req.params.id, { $push : { comment : comment._id }}, ( err, article ) => {
      if ( err ) return res.send( err );
      res.json({ success : `Comment has been created` });
    });
  });
});


export default api;
