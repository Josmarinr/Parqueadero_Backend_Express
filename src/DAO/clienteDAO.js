const { pool } = require('../Config/config')

const createClient = async (userData) => {

    const {num_iden_cliente, tipo_iden_prop, primer_nom, segundo_nom, primer_ape, segundo_ape,
        num_contacto} = userData

    const query = 'INSERT INTO Cliente (K_num_iden_cliente, K_tipo_iden_cliente, N_primer_nom, N_segundo_nom_D, N_primer_ape, N_segundo_ape, T_num_contacto VALUES ($1, $2, $3, $4, $5, $6, $7);'
    const values = [num_iden_cliente, tipo_iden_prop, primer_nom, segundo_nom, primer_ape, segundo_ape, num_contacto]
    
    try{
        const res = await pool.query(query, values);
        return res.rows[0];
    }catch (err) {
        throw err
    }
}

const getAllClients = async () => {
    const query = 'SELECT * FROM Cliente;'
    try {
        const res = await pool.query(query)
        return res.rows;
    } catch (err) {
        throw err;
    }
}

module.exports = {createClient, getAllClients}