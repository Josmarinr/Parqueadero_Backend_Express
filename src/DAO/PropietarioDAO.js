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

const UpdatePropietario = async (Data) => {
    const { k_num_iden_prop, k_tipo_iden_prop, n_primer_nom, n_segundo_nom, n_primer_ape, n_segundo_ape, t_num_contacto } = Data

    const query = `
        UPDATE Propietario
        SET 
            k_tipo_iden_prop = $2,
            n_primer_nom = $3,
            n_segundo_nom = $4,
            n_primer_ape = $5,
            n_segundo_ape = $6,
            t_num_contacto = $7
        WHERE k_num_iden_prop = $1;
    `
    const values = [k_num_iden_prop, k_tipo_iden_prop, n_primer_nom, n_segundo_nom, n_primer_ape, n_segundo_ape, t_num_contacto]

    try {
        const res = await pool.query(query, values);
        return res.rowCount; // Retorna el número de filas afectadas
    } catch (err) {
        throw err;
    }
}

const DeletePropietario = async (k_num_iden_prop) => {
    const query = 'DELETE FROM Propietario WHERE k_num_iden_prop = $1;';
    const values = [k_num_iden_prop];
    
    try {
        const res = await pool.query(query, values);
        return res.rowCount; // Retorna el número de filas afectadas
    } catch (err) {
        throw err;
    }
}

module.exports = {CreatePropietario, GetAllPropietarios, UpdatePropietario, DeletePropietario}