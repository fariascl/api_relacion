'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MarcaSchema = Schema(
    {
        nombre: String
    })
    
module.exports = mongoose.model('marcas', MarcaSchema)