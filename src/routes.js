const express = require('express');
const DadosController = require('./controllers/DadosController');
const JobsController = require('./controllers/JobsController');
const JobsViewController = require('./controllers/JobViewsControllers');

const routes = express.Router();

routes.post('/cadastrarOrdem/dados', DadosController.store);
routes.post('/executarJob/:job', JobsController.pistolagem);
routes.get('/viewJob/:job/:number', JobsViewController.viewPistolagemLog);


module.exports = routes;