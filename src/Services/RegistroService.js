const RegistroDAO = require('../DAO/RegistroDAO')

const createRegistro = async (registro) => {
    return await RegistroDAO.createRegistro(registro)
}

const getAllRegistro = async () => {
    return await RegistroDAO.getAllRegistro()
}

module.exports = {createRegistro, getAllRegistro}