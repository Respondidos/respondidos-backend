let express = require('express')
let morgan = require('morgan')
let router = require('./routes/router')

let app = express()
let PORT = process.env.PORT || 8888

app.use(morgan('short'))
app.use(router)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});