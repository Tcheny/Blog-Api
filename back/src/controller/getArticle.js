import express from 'express';

import Article from '../models/ArticleModel';

const api = express.Router();

// GET
// Récupère un article par :id
// route /app/blog/:id
// ============================
api.get('/:id', (req, res) => {
  Article.findById(req.params.id, ( err, article ) => {
    if (err) return res.send(err);
    res.send(article)
  });
});

export default api;
