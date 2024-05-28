const { pool } = require('../Config/config')

const createVehiculo  = async (Data) => {
  const { k_placa_veh,k_num_contrato ,v_color_vehiculo, v_marca_vehiculo
     , v_modelo_vehiculo , v_tipo_vehiculo } = Data 
const query = 'INSERT INTO Vehiculo (k_placa_veh,k_num_contrato ,v_color_vehiculo, v_marca_vehiculo , v_modelo_vehiculo , v_tipo_vehiculo) VALUES ($1, $2, $3, $4, $5, $6);'
const values = [k_placa_veh,k_num_contrato ,v_color_vehiculo, v_marca_vehiculo, v_modelo_vehiculo , v_tipo_vehiculo]
try{
    const res = await pool.query(query, values);
    return res.rows[0];
}catch (err) {
    throw err
}
  }




const getAllVehiculo = async () => {
const query = 'SELECT * Vehiculo '
try {
    const res = await pool.query(query)
    return res.rows;
    console.log(res.rows)
} catch (err) {
    console.log(err)
    throw err;
}

}

module.exports = {createVehiculo , getAllVehiculo}