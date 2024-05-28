const { pool } = require('../Config/config')

const createVigilante = async (Data) => {

    const {  k_num_iden_vig , k_num_area, k_tipo_iden_vig, n_primer_nom , n_segundo_nom , n_primer_ape, n_segundo_ape , i_compa_can,
        k_iden_parq} = Data

    const query = 'INSERT INTO VIgilante ( k_num_iden_vig , k_num_area, k_tipo_iden_vig, n_primer_nom , n_segundo_nom , n_primer_ape, n_segundo_ape , i_compa_can, k_iden_par) VALUES ($1, $2, $3, $4, $5, $6, $7,$8);'
    const values = [ k_num_iden_vig , k_num_area, k_tipo_iden_vig, n_primer_nom , n_segundo_nom , n_primer_ape, n_segundo_ape , i_compa_can,
        k_iden_par]
    
    try{
        const res = await pool.query(query, values);
        return res.rows[0];
    }catch (err) {
        throw err
    }
}

const getAllVigilante = async () => {
    const query = 'SELECT * FROM Vigilante'
    try {
        const res = await pool.query(query)
        return res.rows;
        console.log(res.rows)
    } catch (err) {
        console.log(err)
        throw err;
    }
}

module.exports = {createVigilante, getAllVigilante}