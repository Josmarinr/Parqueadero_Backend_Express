const clientDAO = require('../DAO/clienteDAO')

const createClient = async (userData) => {
        return await clientDAO.createClient(userData)
}

const getAllClients = async () => {
    return await clientDAO.getAllClients()
}

module.exports = {createClient, getAllClients}