


const mongoose = require('mongoose')

// const url = 'mongodb://fullstack:5ekred@ds125392.mlab.com:25392/ocp'
// const url = process.env.MONGODB_URI
if ( process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config()
  }
  
  const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true })
mongoose.Promise = global.Promise

const Person = mongoose.model('Person', {
  name: String,
  number: String
})



module.exports = Person