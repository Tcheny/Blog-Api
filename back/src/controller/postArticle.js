import express from 'express';
import multer from 'multer'; // upload image

import Article from '../models/ArticleModel';

// config multer
const storage = multer.diskStorage({
  destination: (req, file, cb)=> {
    cb(null, '../front/public/my_uploads')
  },
  filename:  (req, file, cb) => {
    cb (null, file.originalname);
  }
});

const upload = multer({ storage : storage})


const api = express.Router();

// POST
// Ajoute des articles
// route /app/blog/add
// ============================
api.post('/add', upload.single('image'), (req, res) => {
  let newArticle = new Article(req.body);
  if (req.file) {
    newArticle.image = `${req.file.filename}`;
  }
  newArticle.save( err => {
    if(err) return res.redirect('http://localhost:3000/');
    res.redirect('http://localhost:3000/')
  });
});

export default api;
