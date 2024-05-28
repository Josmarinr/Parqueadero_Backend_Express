const RegistroService = require('../Services/RegistroService')

const createRegistro = async (req, res) => {
    try {
        const response = await RegistroService.createRegistro(req.body)
        res.status(201).send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }  
}

const getAllRegistro = async (req, res) => {
    try {
        const response = await RegistroService.getAllRegistro()
        res.send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = {createRegistro, getAllRegistro}
