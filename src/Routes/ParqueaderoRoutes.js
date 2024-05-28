const express = require('express')
const ParqueaderoController = require('../Controllers/ParqueaderoController')
const router = express.Router()

router.post('/parqueaderos', ParqueaderoController.createParqueadero)
router.get('/parqueaderos', ParqueaderoController.getAllParqueadero)

module.exports = router