import express from 'express';
import mongoose from 'mongoose';

import config from '../config/config';
import controller from '../controller/postBlog';

const router = express.Router();

mongoose.connect( config.mongoUrl, () => {
  console.log( 'MongoDB initialized...' );
});

router.use( '/blog', controller )

export default router;
