const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')

const connectDB = require('./Config/config').connectDB
const clientRoutes = require('./Routes/clientRoutes')

dotenv.config()
const app = express()
const port = process.env.PORT || 3000
connectDB()

app.use(bodyParser.json())
app.use(cors())
app.use(clientRoutes)


app.get('/', (req,res) => {
    res.send('Backend Parqueaderos')
})

const server = app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});

module.exports = {app, server}
