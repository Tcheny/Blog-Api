import express from 'express';

import Article from '../models/ArticleModel';

const api = express.Router();

// POST
// Update un article:id
// route /app/blog/update/:id
// ============================
api.post('/update/:id', ( req, res ) => {
  Article.findByIdAndUpdate( req.params.id, req.body, ( err, article ) => {
    if ( err ) return res.send( err );
    res.json({ success : `${article.author} was updated` })
  })
})

export default api;
