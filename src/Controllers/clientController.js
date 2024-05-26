const clientService = require('../Services/clientService')

const createClient = async (req, res) => {
    try{
        const client = await clientService.createClient(req.body)
        res.status(201).json(client)
    }catch (err){
        res.status(500).json({ message: err.message })
    }
}

const getAllClients = async (req, res) => {
    try{
        const clients = await clientService.getAllClients()
        res.json(clients)
    } catch (err){
        res.status(500).json({ message: err.message })
    }
}

module.exports = {createClient, getAllClients}