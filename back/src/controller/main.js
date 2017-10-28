import express from 'express';

// Main controller qui appelle les autres controllers
import GetAllArticle from './getAllArticle';
import GetArticle from './getArticle';
import PostArticle from './postArticle';
import UpdateArticle from './updateArticle';
import DeleteArticle from './deleteArticle';
import PostComment from './postComment';
import GetComment from './getComment';

const api = express.Router();

api.use( GetAllArticle );
api.use( GetArticle );
api.use( PostArticle );
api.use( UpdateArticle );
api.use( DeleteArticle );
api.use( PostComment );
api.use( GetComment );

export default api;
