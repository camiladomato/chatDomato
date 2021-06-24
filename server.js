const express = require ('express')
const cors = require ('cors')
require('dotenv').config()
const router = require ('./routes')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api' , router)

const PORT = process.env.PORT
const HOST = process.env.HOST || '0.0.0.0'

app.listen(PORT , HOST , () => console.log(`App listening on port ${PORT} / ${HOST}`))