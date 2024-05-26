const express = require('express')
const clientController = require('../Controllers/clientController')
const router = express.Router()

router.post('/clients', clientController.createClient)
router.get('/clients', clientController.getAllClients)

module.exports = router