const ParqueaderoDAO = require('../DAO/ParqueaderoDAO')

const createParqueadero = async (userData) => {
        return await ParqueaderoDAO.createParqueadero(userData)
}

const getAllParqueadero = async () => {
    return await ParqueaderoDAO.getAllParqueadero()
}

module.exports = {createParqueadero, getAllParqueadero}
