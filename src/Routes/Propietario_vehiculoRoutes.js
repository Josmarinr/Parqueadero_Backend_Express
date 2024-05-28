const express = require('express')
const Propietario_vehiculoController = require('../Controllers/Propietario_vehiculoController')
const router = express.Router()

router.post('/propietario_vehiculos', Propietario_vehiculoController.createPropietario_vehiculo)
router.get('/propietario_vehiculos', Propietario_vehiculoController.getAllPropietario_vehiculo)

module.exports = router