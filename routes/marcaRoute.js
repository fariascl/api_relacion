'use strict'

var express = require('express');

var marcaController = require('../controllers/marcaController');
const marca = require('../models/marca');

var api = express.Router();

api.post('/marcas', marcaController.guardar);
api.get('/marcas', marcaController.todos);
api.get('/marca/:id', marcaController.buscarporID);

module.exports = api;