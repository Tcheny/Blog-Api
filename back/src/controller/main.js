import express from 'express';

// Main controller qui appelle les autres controllers
import GetAllArticle from './getAllArticle';
import GetArticle from './getArticle';
import PostArticle from './postArticle';
import UpdateArticle from './updateArticle';
import DeleteArticle from './deleteArticle';

import GetComment from './getComment';
import PostComment from './postComment';
import UpdateComment from './updateComment';
import DeleteComment from './deleteComment';

const api = express.Router();

api.use( GetAllArticle );
api.use( GetArticle );
api.use( PostArticle );
api.use( UpdateArticle );
api.use( DeleteArticle );

api.use( GetComment );
api.use( PostComment );
api.use( UpdateComment );
api.use( DeleteComment );

export default api;
