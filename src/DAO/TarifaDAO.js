const { pool } = require('../Config/config')

const createTarifa = async (Data) => {

    const {id_tarifa,id_parqueadora,k_valor,f_año } = Data

    const query = 'INSERT INTO Tarifa ( id_tarifa,id_parqueadora,k_valor,f_año ) VALUES ($1, $2, $3, $4);'
    const values = [id_tarifa,id_parqueadora,k_valor,f_año ]
    
    try{
        const res = await pool.query(query, values);
        return res.rows[0];
    }catch (err) {
        throw err
    }
}

const getAllTarifa = async () => {
    const query = 'SELECT * FROM Tarifa'
    try {
        await pool.connect();
        const res = await pool.query(query)
        return res.rows;
    } catch (err) {
        throw err;
    }
}

module.exports = {createTarifa, getAllTarifa}