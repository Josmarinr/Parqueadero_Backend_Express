const PropietarioDao = require('../DAO/PropietarioDAO')

const CreatePropietario = async (Data) => {
    return await PropietarioDao.CreatePropietario(Data)
}

const GetAllPropietarios = async () => {
    return await PropietarioDao.GetAllPropietarios()
}

module.exports = {CreatePropietario, GetAllPropietarios}