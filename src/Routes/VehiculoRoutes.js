const express = require('express')
const VehiculoController = require('../Controllers/VehiculoController')
const router = express.Router()

router.post('/vehiculos', VehiculoController.createVehiculo)
router.get('/vehiculos', VehiculoController.getAllVehiculo)

module.exports = router