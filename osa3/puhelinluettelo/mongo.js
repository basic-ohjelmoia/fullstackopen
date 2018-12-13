

const mongoose = require('mongoose')

const url = 'mongodb://fullstack:5ekred@ds125392.mlab.com:25392/ocp'


let args = process.argv.slice(2)







mongoose.connect(url, { useNewUrlParser: true })

const Person = mongoose.model('Person', {
  name: String,
  number: String,
  id: Number
})

if (args.length===2) {

    let name = args[0]
    let number = args[1]

const person = new Person({
    name: name,
  number: number,
  id: 0
})

person
  .save()
  .then(response => {
    console.log('person '+name+', '+number+' saved!')
    mongoose.connection.close()
  })

} else {
    console.log('Puhelinluettelo:')
    Person
  .find({})
  .then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })


}