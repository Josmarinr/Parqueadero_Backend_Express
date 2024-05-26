require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
  user:  process.env.DB_USER,
  password:  String(process.env.DB_PASSWORD),
  host:  process.env.DB_HOST,
  name:  process.env.DB_NAME,
  port:  process.env.DB_PORT,
})

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Connected to PostgreSQL successfully.');
  } catch (err) {
    console.error('Failed to connect to PostgreSQL:', err);
  }
};

module.exports = { pool, connectDB}
