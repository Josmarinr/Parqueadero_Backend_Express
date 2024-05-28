const { pool } = require('../Config/config')

const createPago = async (Data) => {

    const {id_pago, f_pago, v_pagado_total, f_forma_pago } = Data

    const query = 'INSERT INTO Pago (id_pago, f_pago, v_pagado_total, f_forma_pago) VALUES ($1, $2, $3, $4);'
    const values = [id_pago, f_pago, v_pagado_total, f_forma_pago]
    
    try{
        const res = await pool.query(query, values);
        return res.rows[0];
    }catch (err) {
        throw err
    }
}

const getAllPago = async () => {
    const query = 'SELECT * FROM Pago'
    try {
        const res = await pool.query(query)
        return res.rows;
        console.log(res.rows)
    } catch (err) {
        console.log(err)
        throw err;
    }
}

module.exports = {createPago, getAllPago}