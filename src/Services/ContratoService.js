const ContratoDAO = require('../DAO/ContratoDAO')

const createContrato = async (Data) => {
    return await ContratoDAO.createContrato(Data)
}

const getAllContrato = async () => {
    return await ContratoDAO.getAllContrato()
}

module.exports = {createContrato, getAllContrato}