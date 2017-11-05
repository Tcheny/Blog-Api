import express from 'express';

import Article from '../models/ArticleModel';
import Comment from '../models/CommentModel';

const api = express.Router();

// GET
// Supprimer un commentaire d'un article
// route /app/blog/:id/comment/:commentid/delete
// ============================
api.get('/:id/comment/:commentid/delete', ( req, res ) => {
  Comment.findByIdAndRemove( req.params.commentid, ( err, deleteComment ) => {
    if ( err ) return res.send( err );
    Article.findByIdAndUpdate( req.params.id, { $pull : { comment : deleteComment._id }}, err => {
      if ( err ) return res.redirect( 'http://localhost:3000' );
      res.redirect( 'http://localhost:3000' );
    });
  });
});

export default api;
