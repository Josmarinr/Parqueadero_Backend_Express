const Propietario_vehiculoService = require('../Services/Propietario_vehiculoService')

const createPropietario_vehiculo = async (req, res) => {
    try {
        const response = await Propietario_vehiculoService.createPropietario_vehiculo(req.body)
        res.status(201).send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }  
}

const getAllPropietario_vehiculo = async (req, res) => {
    try {
        const response = await Propietario_vehiculoService.getAllPropietario_vehiculo()
        res.send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = {createPropietario_vehiculo, getAllPropietario_vehiculo}