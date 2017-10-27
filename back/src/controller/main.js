import express from 'express';

// Main controller qui appelle les autres controllers
import GetAllBlog from './getAllBlog';
import GetBlog from './getBlog';
import PostBlog from './postBlog';


const api = express.Router();

api.use(GetAllBlog);
api.use(GetBlog);
api.use(PostBlog);

export default api;
