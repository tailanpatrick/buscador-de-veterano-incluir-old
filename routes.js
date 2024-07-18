const express = require('express')
const homeController = require('./src/controllers/homeController');
const buscarController = require('./src/controllers/buscarController');

const route = express.Router();

// Rota da home
route.get('/', homeController.paginaInicial);

// Rota buscar
route.get('/buscar', buscarController.buscar);



module.exports = route;