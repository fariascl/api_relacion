'use strict'

var Auto = require('../models/auto.js');

function guardar(req, res){
    let auto = new Auto()
    console.log("Estoy aqui")
    auto.patente = req.body.patente
    auto.marca = req.body.idMarca
    auto.anio = req.body.anio
    auto.save((err, autoguardado) => {
        res.status(200).send({autoInsertado: autoguardado})
    })
}

function listar(req, res){
    Auto.find()
    .populate('marca').exec((err, autoconmarca) => {
        res.status(200).send({autoconmarca})
    })
}

module.exports = {
    guardar,
    listar
}