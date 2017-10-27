import express from 'express'; // middleware express
import mongoose from 'mongoose'; // middleware mongoose

import config from '../config/config'; // config pour mongoUrl
import controller from '../controller/main'; // route du controller

const router = express.Router(); // Router de express

// Connection à la DB
mongoose.connect( config.mongoUrl, { useMongoClient: true }, () => {
  console.log( 'MongoDB initialized...' );
});

// route /app/blog/ puis les routes des controllers
router.use( '/blog', controller )

export default router;
