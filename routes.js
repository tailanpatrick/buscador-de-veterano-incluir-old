const express = require('express')
const homeController = require('./src/controllers/homeController');

const route = express.Router();

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);



module.exports = route;