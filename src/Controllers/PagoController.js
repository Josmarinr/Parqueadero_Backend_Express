const PagoService = require('../Services/PagoService')

const createPago = async (req, res) => {
    try{
        const pago = await PagoService.createPago(req.body)
        res.status(201).json(pago)
    }catch (err){
        res.status(500).json({ message: err.message })
    }
}

const getAllPago = async (req, res) => {
    try{
        const pagos = await PagoService.getAllPago()
        res.json(pagos)
    } catch (err){
        res.status(500).json({ message: err.message })
    }
}

module.exports = {createPago, getAllPago}