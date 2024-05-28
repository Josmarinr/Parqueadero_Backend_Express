const VehiculoDAO = require('../DAO/VehiculoDAO')

const createVehiculo = async (vehiculo) => {
    return await VehiculoDAO.createVehiculo(vehiculo)
}

const getAllVehiculo = async () => {
    return await VehiculoDAO.getAllVehiculo()
}

module.exports = {createVehiculo, getAllVehiculo}