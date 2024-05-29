const PropietarioDao = require('../DAO/PropietarioDAO')

const CreatePropietario = async (Data) => {
    return await PropietarioDao.CreatePropietario(Data)
}

const GetAllPropietarios = async () => {
    return await PropietarioDao.GetAllPropietarios()
}

const UpdatePropietario = async (Data) => {
    return await PropietarioDao.UpdatePropietario(Data)
}

const DeletePropietario = async (k_num_iden_prop) => {
    return await PropietarioDao.DeletePropietario(k_num_iden_prop)
}

module.exports = {CreatePropietario, GetAllPropietarios, UpdatePropietario, DeletePropietario}