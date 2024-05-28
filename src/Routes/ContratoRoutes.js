const express = require('express')
const ContratoController = require('../Controllers/ContratoController')
const router = express.Router()

router.post('/contratos', ContratoController.createContrato)
router.get('/contratos', ContratoController.getAllContrato)

module.exports = router