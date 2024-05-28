const ContratoService = require('../Services/ContratoService')

const createContrato = async (req, res) => {
    try{
        const contrato = await ContratoService.createContrato(req.body)
        res.status(201).json(contrato)
    }catch (err){
        res.status(500).json({ message: err.message })
    }
}

const getAllContrato = async (req, res) => {
    try{
        const contratos = await ContratoService.getAllContrato()
        res.json(contratos)
    } catch (err){
        res.status(500).json({ message: err.message })
    }
}

module.exports = {createContrato, getAllContrato}