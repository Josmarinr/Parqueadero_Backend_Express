const EspacioDAO = require('../DAO/EspacioDAO')

const createEspacio = async (Data) => {
    return await EspacioDAO.createEspacio(Data)
}

const getAllEspacio = async () => {
    return await EspacioDAO.getAllEspacio()
}

module.exports = {createEspacio, getAllEspacio}