import express from 'express';

// Main controller qui appelle les autres controllers
import GetAllArticle from './getAllArticle';
import GetArticle from './getArticle';
import PostArticle from './postArticle';
import DeleteArticle from './deleteArticle';

const api = express.Router();

api.use(GetAllArticle);
api.use(GetArticle);
api.use(PostArticle);
api.use(DeleteArticle);

export default api;
