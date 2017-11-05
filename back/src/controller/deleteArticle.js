import express from 'express';

import Article from '../models/ArticleModel';

const api = express.Router();

// GET
// Supprimer un article :id
// route /app/blog/delete/:id
// ============================
api.get('/delete/:id', ( req, res ) => {
  Article.findByIdAndRemove( req.params.id, err => {
    if ( err ) return res.send( err );
    res.redirect( 'http://localhost:3000/' );
  });
});

export default api;
