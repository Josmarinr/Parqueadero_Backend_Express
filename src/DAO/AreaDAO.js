const { pool } = require('../Config/config')

const createArea = async (Data) => {
    const {k_num_area ,k_iden_parq ,k_num_iden_vig , k_tipo_iden_vig , k_num_espacio 
    } = Data

    const query = 'INSERT INTO Area (k_num_area ,k_iden_parq ,k_num_iden_vig , k_tipo_iden_vig , k_num_espacio )VALUES ($1, $2, $3, $4, $5);'
    const values = [k_num_area ,k_iden_parq ,k_num_iden_vig , k_tipo_iden_vig , k_num_espacio 
    ]
    
    try{
        const res = await pool.query(query, values);
        return res.rows[0];
    }catch (err) {
        throw err
    }
}

const getAllArea = async () => {
    const query = 'SELECT * FROM Area'
    try {
        const res = await pool.query(query)
        return res.rows;
        console.log(res.rows)
    } catch (err) {
        console.log(err)
        throw err;
    }
}

module.exports = {createArea, getAllArea}