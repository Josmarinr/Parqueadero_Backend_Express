const Propietario_vehiculoDAO = require('../DAO/Propietario_vehiculoDAO')

const createPropietario_vehiculo = async (propietario_vehiculo) => {
    return await Propietario_vehiculoDAO.createPropietario_vehiculo(propietario_vehiculo)
}

const getAllPropietario_vehiculo = async () => {
    return await Propietario_vehiculoDAO.getAllPropietario_vehiculo()
}

module.exports = {createPropietario_vehiculo, getAllPropietario_vehiculo}