import express from 'express';
import bodyParser from 'body-parser';

import config from './config/config';
import route from './route/route';

const app = express();

app.use( bodyParser.urlencoded({ extended: false }))
app.use( '/app', route );

app.listen( config.port, () => {
  console.log( `Listen on port : ${config.port}` );
});

export default app;
