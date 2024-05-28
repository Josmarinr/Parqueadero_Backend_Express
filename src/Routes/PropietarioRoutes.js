const express = require('express')
const PropietarioController = require('../Controllers/PropietarioController')
const router = express.Router()

router.post('/propietarios', PropietarioController.CreatePropietario)
router.get('/propietarios', PropietarioController.GetAllPropietarios)

module.exports = router
