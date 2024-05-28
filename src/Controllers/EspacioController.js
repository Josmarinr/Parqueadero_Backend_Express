const EspacioService = require('../Services/EspacioService')

const createEspacio = async (req, res) => {
    try{
        const espacio = await EspacioService.createEspacio(req.body)
        res.status(201).json(espacio)
    }catch (err){
        res.status(500).json({ message: err.message })
    }
}

const getAllEspacio = async (req, res) => {
    try{
        const espacios = await EspacioService.getAllEspacio()
        res.json(espacios)
    } catch (err){
        res.status(500).json({ message: err.message })
    }
}

module.exports = {createEspacio, getAllEspacio}