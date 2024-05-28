const ParqueaderoService = require('../Services/ParqueaderoService')

const createParqueadero = async (req, res) => {
    try {
        const response = await ParqueaderoService.createParqueadero(req.body)
        res.status(201).send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }  
}

const getAllParqueadero = async (req, res) => {
    try {
        const response = await ParqueaderoService.getAllParqueadero()
        res.send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = {createParqueadero, getAllParqueadero}
