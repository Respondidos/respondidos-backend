const mongoose = require('mongoose')
require('dotenv').config()

const user = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0-t7gke.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose