'use strict'

var express = require('express')

var autoController = require('../controllers/autoController');

var api = express.Router();

api.post("/autos", autoController.guardar)
api.get("/autos", autoController.listar)

module.exports = api;