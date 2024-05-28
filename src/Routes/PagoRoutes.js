const express = require('express')
const PagoController = require('../Controllers/PagoController')
const router = express.Router()

router.post('/pagos', PagoController.createPago)
router.get('/pagos', PagoController.getAllPago)

module.exports = router