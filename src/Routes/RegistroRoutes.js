const express = require('express')
const RegistroController = require('../Controllers/RegistroController')
const router = express.Router()

router.post('/registros', RegistroController.createRegistro)
router.get('/registros', RegistroController.getAllRegistro)

module.exports = router
