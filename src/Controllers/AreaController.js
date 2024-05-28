const AreaService = require('../Services/areaService')

const createArea = async (req, res) => {
    try{
        const area = await AreaService.createArea(req.body)
        res.status(201).json(area)
    }catch (err){
        res.status(500).json({ message: err.message })
    }
}

const getAllArea = async (req, res) => {
    try{
        const areas = await AreaService.getAllArea()
        res.json(areas)
    } catch (err){
        res.status(500).json({ message: err.message })
    }
}

module.exports = {createArea, getAllArea}

