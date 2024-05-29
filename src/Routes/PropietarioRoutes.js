const express = require('express')
const PropietarioController = require('../Controllers/PropietarioController')
const router = express.Router()

router.post('/propietarios', PropietarioController.CreatePropietario)
router.get('/propietarios', PropietarioController.GetAllPropietarios)
router.put('/propietarios', PropietarioController.UpdatePropietario)
router.delete('/propietarios', PropietarioController.DeletePropietario)

module.exports = router
