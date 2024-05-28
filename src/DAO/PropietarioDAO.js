const { pool } = require('../Config/config')

const CreatePropietario = async (Data) => {

    const { k_num_iden_prop, k_tipo_iden_prop,
        n_primer_nom, n_segundo_nom, n_primer_ape, n_segundo_ape, t_num_contacto } = Data

    const query = 'INSERT INTO Propietario(k_num_iden_prop, k_tipo_iden_prop,n_primer_nom, n_segundo_nom, n_primer_ape, n_segundo_ape, t_num_contacto) VALUES ($1, $2, $3, $4, $5, $6, $7)'
    const values = [k_num_iden_prop, k_tipo_iden_prop,
        n_primer_nom, n_segundo_nom, n_primer_ape, n_segundo_ape, t_num_contacto]

    try {
        const res = await pool.query(query, values);
        return res.rows[0];
    } catch (err) {
        throw err
    }
}

const GetAllPropietarios = async () => {
    const query = 'SELECT * FROM Propietario'
    try {
        const res = await pool 
        return res.rows;
        console.log(res.rows)
    }catch (err) {
        console.log(err)
        throw err;
    }
}

module.exports = {CreatePropietario, GetAllPropietarios}