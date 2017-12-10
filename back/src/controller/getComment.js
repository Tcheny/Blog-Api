import express from 'express';

import Article from '../models/ArticleModel';
import Comment from '../models/CommentModel';

const api = express.Router();

// GET
// Récupérer les commentaires d'un article
// route /app/blog/:id/comment/
// ============================
api.get('/:id/comment', ( req, res ) => {
  Article.findById( req.params.id )
         .populate( 'comment' )
         .exec(( err, article ) => {
           if ( err ) return res.redirect( 'http://localhost:3000/' );
           res.json( article )
         });
});

export default api;
