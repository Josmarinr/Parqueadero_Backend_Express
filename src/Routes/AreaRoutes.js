const express = require('express')
const AreaController = require ('../Controllers/AreaController')
const router = express.Router()

router.post('/areas', AreaController.createArea)
router.get('/areas', AreaController.getAllArea)

module.exports = router