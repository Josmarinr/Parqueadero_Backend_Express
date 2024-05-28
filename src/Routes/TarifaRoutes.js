const express = require('express')
const TarifaController = require('../Controllers/TarifaController')
const router = express.Router()

router.post('/tarifas', TarifaController.createTarifa)
router.get('/tarifas', TarifaController.getAllTarifa)

module.exports = router
