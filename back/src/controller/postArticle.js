import express from 'express';

import Article from '../models/ArticleModel';

const api = express.Router();

// POST
// Ajoute des articles
// route /app/blog/add
// ============================
api.post('/add', ( req, res ) => {
  const newArticle = new Article( req.body );
  newArticle.save( err => {
    if ( err ) return res.send( err );
    return res.json({ success : `New article added` })
  });
});

export default api;
