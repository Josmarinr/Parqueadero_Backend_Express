const TarifaService = require('../Services/TarifaService')

const createTarifa = async (req, res) => {
    try {
        const response = await TarifaService.createTarifa(req.body)
        res.status(201).send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }  
}

const getAllTarifa = async (req, res) => {
    try {
        const response = await TarifaService.getAllTarifa()
        res.send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = {createTarifa, getAllTarifa}