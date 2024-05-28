const express = require('express')
const EspacioController = require('../Controllers/EspacioController')
const router = express.Router()

router.post('/espacios', EspacioController.createEspacio)
router.get('/espacios', EspacioController.getAllEspacio)

module.exports = router
