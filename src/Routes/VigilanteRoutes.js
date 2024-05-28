const express = require('express')
const VigilanteController = require('../Controllers/VigilanteController')
const router = express.Router()

router.post('/vigilantes', VigilanteController.createVigilante)
router.get('/vigilantes', VigilanteController.getAllVigilante)

module.exports = router