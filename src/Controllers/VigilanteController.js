const VigilanteService = require('../Services/VigilanteService')

const createVigilante = async (req, res) => {
    try {
        const response = await VigilanteService.createVigilante(req.body)
        res.status(201).send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }  
}

const getAllVigilante = async (req, res) => {
    try {
        const response = await VigilanteService.getAllVigilante()
        res.send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = {createVigilante, getAllVigilante}