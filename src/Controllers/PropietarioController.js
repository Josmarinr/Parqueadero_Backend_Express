const PropietarioService = require('../Services/PropietarioService')

const CreatePropietario = async (req, res) => {
    try{
        const propietario = await PropietarioService.CreatePropietario(req.body)
        res.status(201).json(propietario)
    }catch (err){
        res.status(500).json({ message: err.message })
    }
}

const GetAllPropietarios = async (req, res) => {
    try{
        const propietarios = await PropietarioService.GetAllPropietarios()
        res.json(propietarios)
    } catch (err){
        res.status(500).json({ message: err.message })
    }
}

module.exports = {CreatePropietario, GetAllPropietarios}

