const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')

app.use(cors())

app.use(bodyParser.json())
app.use(express.static('build'))



app.use(morgan(':method :url :status :res[Content-Length] - :response-time ms'))


const formatPerson = (person) => {
    return {
      name: person.name,
      number: person.number,
      id: person._id
    }
  }

let persons =  [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Martti Tienari",
      "number": "040-123456",
      "id": 2
    },
    {
      "name": "Arto Järvinen",
      "number": "040-123456",
      "id": 3
    },
    {
      "name": "Lea Kutvonen",
      "number": "040-123456",
      "id": 4
    },
    {
      "name": "dsfdsa",
      "number": "4342",
      "id": 5
    }
  ]


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {

    var date = '<h1>'+new Date()+'</h1>'
    var size = '<h1>puhelinluettelossa '+count+' henkilön tiedot</h1>'
    res.send(''+date+size+'')
  })


  app.get('/api/people', (request, response) => {
    Person
      .find({})
      .then(persons => {
        response.json(persons.map(formatPerson))
      })
  })
  
  app.get('/api/people/:id', (request, response) => {
    Person
      .findById(request.params.id)
      .then(person => {
        if (person) {
          response.json(formatPerson(person))
        } else {
          response.status(404).end()
        }
      })
      .catch(error => {
        console.log(error)
        response.status(400).send({ error: 'malformatted id' })
      })
  })

// app.get('/api/persons', (req, res) => {
//   res.json(persons)
// })

// app.get('/api/persons/:id', (request, response) => {
//   const id = Number(request.params.id)
//   const person = persons.find(note => note.id === id)

//   if (person) {
//     response.json(person)
//   } else {
//     response.status(404).end()
//   }
// })

const generateId = () => {
  let min = persons.length > 0 ? persons.map(n => n.id).sort().reverse()[0] : 1
  
    min = Math.ceil(min+1);
    let max = Math.floor(10000000);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  
  
  
}

app.post('/api/people', (request, response) => {
    const body = request.body
    
  
    if (body.name === undefined) {
        return response.status(400).json({ error: 'name missing' })
      }
      if (body.number === undefined) {
        return response.status(400).json({ error: 'number missing' })
      }
    
    //   const prePerson = persons.find(person=>person.name===body.name)
    
    
    //   if (prePerson!==undefined) {
    //     return response.status(400).json({ error: 'person already exists' }) 
    //   }

      console.log('body',body)
   
  
    const person = new Person( {
        name: body.name || 'Unknown',
        number: body.number || 'Unknown'
     //   id: generateId()
      })

      person
      .save()
      .then(savedPerson => {
        response.json(formatPerson(savedPerson))
      })
      .catch(error => {
        console.log(error)
        // ...
      })
      
  })

// app.post('/api/persons', (request, response) => {
//   const body = request.body

//   if (body.name === undefined) {
//     return response.status(400).json({ error: 'name missing' })
//   }
//   if (body.number === undefined) {
//     return response.status(400).json({ error: 'number missing' })
//   }

//   const prePerson = persons.find(person=>person.name===body.name)


//   if (prePerson!==undefined) {
//     return response.status(400).json({ error: 'person already exists' }) 
//   }

//   const person = {
//     name: body.name || 'Unknown',
//     number: body.number || 'Unknown',
//     id: generateId()
//   }

//   persons = persons.concat(person)

//   response.json(person)
// })

// app.delete('/api/persons/:id', (request, response) => {
//   const id = Number(request.params.id)
//   persons = persons.filter(person => person.id !== id)

//   response.status(204).end()
// })

app.delete('/api/people/:id', (request, response) => {
    Person
      .findByIdAndRemove(request.params.id)
      .then(result => {
        response.status(204).end()
      })
      .catch(error => {
        response.status(400).send({ error: 'malformatted id' })
      })
  })

const PORT = process.env.PORT || 3001
//const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})