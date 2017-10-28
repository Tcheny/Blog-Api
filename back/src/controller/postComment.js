import express from 'express';

import Article from '../models/ArticleModel';
import Comment from '../models/CommentModel';

const api = express.Router();

// POST
// Ajoute un commentaire a un article
// route /app/blog/:id/comment/add
// ============================
api.post('/:id/comment/add', ( req, res ) => {
  let newComment = new Comment( req.body );
  newComment.save( (err, comment) => {
    if ( err ) return res.send( err );
    Article.findByIdAndUpdate(req.params.id, { $push : { comment }}, ( err, article ) => {
      console.log(comment);
      if (err) return res.send(err);
      res.json({ message : `Comment has been created` });
    });
  });
});


export default api;
