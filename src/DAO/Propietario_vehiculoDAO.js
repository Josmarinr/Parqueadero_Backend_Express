const { pool } = require('../Config/config')

const createPropietario_vehiculo = async (Data) => {

    const {k_num_iden_prop , _num_contrato, k_placa_veh, k_tipo_iden_prop } = Data

    const query = 'INSERT INTO Propietario_vehiculo (k_num_iden_prop , _num_contrato, k_placa_veh, k_tipo_iden_prop)  VALUES ($1, $2, $3, $4);'
    const values = []
    
    try{
        const res = await pool.query(query, values);
        return res.rows[0];
    }catch (err) {
        throw err
    }
}

const getAllPropietario_vehiculo = async () => {
    const query = 'SELECT * FROM Propietario_vehiculo'
    try {
        const res = await pool.query(query)
        return res.rows;
        console.log(res.rows)
    } catch (err) {
        console.log(err)
        throw err;
    }
}

module.exports = {createPropietario_vehiculo, getAllPropietario_vehiculo}