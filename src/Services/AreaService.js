const AreaDAO = require('../DAO/AreaDAO')

const createArea = async (Data) => {
        return await AreaDAO.createArea(Data)
}

const getAllArea = async () => {
    return await AreaDAO.getAllArea()
}

module.exports = {createArea, getAllArea}