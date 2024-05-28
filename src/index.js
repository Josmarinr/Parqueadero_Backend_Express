const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')

const connectDB = require('./Config/config').connectDB
const clientRoutes = require('./Routes/clientRoutes')
const propietarioRoutes = require('./Routes/PropietarioRoutes')
const areaRoutes = require('./Routes/AreaRoutes')
const contratoRoutes = require('./Routes/ContratoRoutes')
const espacioRoutes = require('./Routes/EspacioRoutes')
const pagoRoutes = require('./Routes/PagoRoutes')
const parqueaderoRoutes = require('./Routes/ParqueaderoRoutes')
const propietario_vehiculoRoutes = require('./Routes/Propietario_vehiculoRoutes')
const registroRoutes = require('./Routes/RegistroRoutes')
const tarifaRoutes = require('./Routes/TarifaRoutes')
const vehiculoRoutes = require('./Routes/VehiculoRoutes')
const vigilanteRoutes = require('./Routes/VigilanteRoutes')

dotenv.config()
const app = express()
const port = process.env.PORT || 3000
connectDB()

app.use(bodyParser.json())
app.use(cors())
app.use(clientRoutes)
app.use(propietarioRoutes)
app.use(areaRoutes)
app.use(contratoRoutes)
app.use(espacioRoutes)
app.use(pagoRoutes)
app.use(parqueaderoRoutes)
app.use(propietario_vehiculoRoutes)
app.use(registroRoutes)
app.use(tarifaRoutes)
app.use(vehiculoRoutes)
app.use(vigilanteRoutes)


app.get('/', (req,res) => {
    res.send('Backend Parqueaderos')
})

const server = app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});

module.exports = {app, server}
