import express from 'express';
import fs from 'fs'; // file Systeme

import Article from '../models/ArticleModel';

const api = express.Router();

// GET
// Supprimer un article :id
// route /app/blog/delete/:id
// ============================
api.get('/delete/:id', ( req, res ) => {
  Article.findOne({ _id: req.params.id }, ( err, article ) => { // find id de l'article
    console.log(req.params.id, article);
    if(article.image) { // check si il y a une image
      fs.unlinkSync(`../front/public/my_uploads/${article.image}`) // fait le chemin pour retirer la photo
    }
    Article.findByIdAndRemove( req.params.id, err => {
      if ( err ) return res.send( err );
      res.redirect( 'http://localhost:3000/' );
    });
  });
});

export default api;
