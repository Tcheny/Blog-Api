import express from 'express';

import Article from '../models/ArticleModel';

const api = express.Router();

// GET
// Supprimer un article :id
// route /app/blog/delete/:id
// ============================
api.get('/delete/:id', ( req, res ) => {
  Article.findByIdAndRemove(req.params.id, req.body, err => {
    if ( err ) return res.send(err);
    res.json({ success : `Article was remove` })
  })
});

export default api;
