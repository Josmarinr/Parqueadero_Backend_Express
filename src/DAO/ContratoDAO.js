const { pool } = require('../Config/config')

const createContrato = async (Data) => {

    const { k_num_contrato , k_placa_veh , i_tipo_contrato ,k_iden_parq ,k_num_iden_prop,k_tipo_iden_prop } = Data

    const query = 'INSERT INTO Contrato ( k_num_contrato , k_placa_veh , i_tipo_contrato ,k_iden_parq ,k_num_iden_prop,k_tipo_iden_prop)  VALUES ($1, $2, $3, $4, $5, $6);'
    const values = [ k_num_contrato , k_placa_veh , i_tipo_contrato ,k_iden_parq ,k_num_iden_prop,k_tipo_iden_prop]
    
    try{
        const res = await pool.query(query, values);
        return res.rows[0];
    }catch (err) {
        throw err
    }
}

const getAllContrato = async () => {
    const query = 'SELECT * FROM Contrato'
    try {
        const res = await pool.query(query)
        return res.rows;
        console.log(res.rows)
    } catch (err) {
        console.log(err)
        throw err;
    }
}

module.exports = {createContrato, getAllContrato}