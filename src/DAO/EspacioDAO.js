const { pool } = require('../Config/config')

const createEspacio = async (Data) => {

    const { k_v_tipo_vehiculo, k_num_espacio,k_placa_veh,k_num_area,v_num_cupos} = Data

    const query = 'INSERT INTO Espacio ( k_v_tipo_vehiculo, k_num_espacio,k_placa_veh,k_num_area,v_num_cupos)  VALUES ($1, $2, $3, $4, $5);'
    const values = [ k_v_tipo_vehiculo, k_num_espacio,k_placa_veh,k_num_area,v_num_cupos]
    
    try{
        const res = await pool.query(query, values);
        return res.rows[0];
    }catch (err) {
        throw err
    }
}

const getAllEspacio = async () => {
    const query = 'SELECT * FROM Espacio'
    try {
        const res = await pool.query(query)
        return res.rows;
        console.log(res.rows)
    } catch (err) {
        console.log(err)
        throw err;
    }
}

module.exports = {createEspacio, getAllEspacio}