const express = require('express')
const morgan = require('morgan')
const router = require('./routes/router')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

let app = express()
let PORT = process.env.PORT

app.use(morgan('short'))
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});