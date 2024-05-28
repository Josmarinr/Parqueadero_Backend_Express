const { pool } = require('../Config/config')

const createRegistro = async (Data) => {

    const { k_num_registro, k_placa_veh ,  v_pago_total ,v_tarifa ,f_hora_in , f_hora_out,id_persona ,k_num_espacio } = Data

    const query = 'INSERT INTO Registro (k_num_registro, k_placa_veh ,  v_pago_total ,v_tarifa ,f_hora_in , f_hora_out,id_persona ,k_num_espacio )  VALUES ($1, $2, $3, $4, $5, $6, $7);'
    const values = [k_num_registro, k_placa_veh ,  v_pago_total ,v_tarifa ,f_hora_in , f_hora_out,id_persona ,k_num_espacio ]
    
    try{
        const res = await pool.query(query, values);
        return res.rows[0];
    }catch (err) {
        throw err
    }
}

const getAllRegistro = async () => {
    const query = 'SELECT * FROM Registro'
    try {
        const res = await pool.query(query)
        return res.rows;
        console.log(res.rows)
    } catch (err) {
        console.log(err)
        throw err;
    }
}

module.exports = {createRegistro, getAllRegistro}