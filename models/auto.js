'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AutoSchema = Schema(
    {
        patente: String,
        anio: Number,
        marca: { type: Schema.ObjectId, ref: "marcas"}
    })

module.exports = mongoose.model('autos', AutoSchema)