const mongoose  = require('mongoose')

const Schema = mongoose.Schema

    const houseModel = Schema({
    provincia : {type: String, required: true},
    municipio: {type: String, required: true},
    ciudad: {type: String, required: true},
    direccion: {type: String, required: true},
    precio: {type: Number, required: true},
    moneda: {type: String, required: true},
    operacion: { type: String, required: true },
    propiedad: { type: String, required: true },
    ambientes: {type: String, required: true},
    supTotal: {type: String, required: true},
    supCubierta: {type: String, required: true},
    cochera: {type: Number, required: true},
    banos: {type: Number, required: true}, 
    aptoCredito : {type: String, required: true},
    habitaciones: {type: Number, required: true},
    antiguedad: {type: Number, required: true},
    descripcion: {type: String, required: true},
    imagenes: [{ url: String, public_id: String }],
    best: {type: Boolean, required: true}, 
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('houses', houseModel)