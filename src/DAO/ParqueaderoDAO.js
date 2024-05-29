const { pool } = require('../Config/config')

const createParqueadero = async (Data) => {

    const { k_iden_parq, v_zona_ciudad, v_dir_parqueadero, v_nivel_parq, i_tipo , id_tarifa } = Data

    const query = 'INSERT INTO Parqueadero (k_iden_parq, v_zona_ciudad, v_dir_parqueadero, v_nivel_parq, i_tipo , id_tarifa) VALUES ($1, $2, $3, $4, $5, $6, $7);'
    const values = [k_iden_parq, v_zona_ciudad, v_dir_parqueadero, v_nivel_parq, i_tipo , id_tarifa]
    
    try{
        const res = await pool.query(query, values);
        return res.rows[0];
    }catch (err) {
        throw err
        console.log(err)
    }
}

const getAllParqueadero = async () => {
    const query = 'SELECT * FROM Parqueadero'
    try {
        const res = await pool.query(query)
        return res.rows;
        console.log(res.rows)
    } catch (err) {
        console.log(err)
        throw err;
    }
}

module.exports = {createParqueadero, getAllParqueadero}