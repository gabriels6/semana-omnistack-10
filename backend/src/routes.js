const { Router } = require('express');


const routes = Router();

const devController = require('./controllers/DevController');

const searchController = require('./controllers/SearchController')

//Lista os Devs (Usuarios)
routes.get('/devs', devController.index);

//entrar na especificação/rota
routes.post('/devs', devController.store);

routes.get('/search', searchController.index);

routes.post('/update', devController.update);

routes.delete('/delete/:github_username', devController.destroy);

 

//exportar objeto

module.exports = routes;