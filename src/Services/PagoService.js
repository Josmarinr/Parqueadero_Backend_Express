const PagoDAO = require('../DAO/PagoDAO')

const createPago = async (userData) => {
        return await PagoDAO.createPago(userData)
}

const getAllPago = async () => {
    return await PagoDAO.getAllPago()
}

module.exports = {createPago, getAllPago}