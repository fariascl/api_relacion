'use strict'

var Marca = require('../models/marca.js')
var funciones = require('../helpers/funciones.js')
const marca = require('../models/marca.js')

function guardar(req, res){
    let marca = new Marca()
    marca.nombre = req.body.nombre
    marca.save((err, marcastore) => {
        if (err) res.status(500).send(`Error base de datos> ${err}`)
        res.status(200).send({marca: marcastore})
    })
}

function buscar(req, res){
    let nombrereq = req.query.nombre
    Marca.find({nombre: {$regex: '.*' + nombrereq + '.*'}}, (err, marca) => {
        if (!marca) return res.status(404).send({msg: 'Error, la marca no existe'})
        res.status(200).send({marca})
    }).limit
}

function buscarporID(req, res){
    let idmarca = req.params.idmarca
    Marca.findById(idmarca, (err, persona) => {
        if (err) return res.status(500).send({msg: 'error,al realizar la peticion'})
        if (!marca) return res.status(404).send({msg: 'error, la marca no existe'})

        res.status(200).send({marca})
    })
}

function todos(req, res) {

    Marca.find({}, (err, marca) => {
        if (err) return res.status(500).send({ message: 'Error al realizar la peticion' })
        if (!marca) return res.status(404).send({ message: 'Error la marca no existe' })
        res.status(200).send({marca})
    })
}

module.exports = {
    guardar,
    buscarporID,
    todos
};