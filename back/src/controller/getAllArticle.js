import express from 'express';

import Article from '../models/ArticleModel';

const api = express.Router();

// GET
// Récupère tous les articles
// route /app/blog/
// ============================
api.get('/', ( req, res ) => {
  Article.find()
         .populate( 'comment' )
         .exec(( err, articles )=> {
           if ( err ) return res.send( err );
           res.json( articles )
      });
});

export default api;
