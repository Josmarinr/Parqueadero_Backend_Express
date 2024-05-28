const TarifaDAO = require('../DAO/TarifaDAO')

const createTarifa = async (tarifa) => {
    return await TarifaDAO.createTarifa(tarifa)
}

const getAllTarifa = async () => {
    return await TarifaDAO.getAllTarifa()
}

module.exports = {createTarifa, getAllTarifa}

