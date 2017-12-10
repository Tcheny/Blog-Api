import express from 'express'; // middleware express
import cors from 'cors'; // middleware cors

import config from './config/config'; // config pour le port 8080
import route from './route/route'; // route

const app = express();

// Parser le formulaire 'urlencoded'
app.use(express.urlencoded({ extended: false }));
// Utilise cors 'Cross-origin'
app.use(cors());
// Utilise la route '/app...' puis appelle route
app.use('/app', route);

// Lance le server
app.listen(config.port,()=>{
  console.log(`Server is listening on port ${config.port}`);
});

export default app;
