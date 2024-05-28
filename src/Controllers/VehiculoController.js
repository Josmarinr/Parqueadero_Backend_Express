const VehiculoService = require('../Services/VehiculoService')

const createVehiculo = async (req, res) => {
    try {
        const response = await VehiculoService.createVehiculo(req.body)
        res.status(201).send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }  
}

const getAllVehiculo = async (req, res) => {
    try {
        const response = await VehiculoService.getAllVehiculo()
        res.send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = {createVehiculo, getAllVehiculo}