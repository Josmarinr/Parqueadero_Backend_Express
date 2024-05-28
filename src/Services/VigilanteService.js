const VigilanteDAO = require('../DAO/VigilanteDAO')

const createVigilante = async (vigilante) => {
    return await VigilanteDAO.createVigilante(vigilante)
}

const getAllVigilante = async () => {
    return await VigilanteDAO.getAllVigilante()
}

module.exports = {createVigilante, getAllVigilante}
