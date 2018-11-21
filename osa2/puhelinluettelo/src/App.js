import React from 'react';
import axios from 'axios'
import Numbers from './components/Numbers'
import Person from './components/Person'
import numberService from './services/numbers'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      // removeable: '',
      newName: '',
      newNumber: '',
      filter: '',
      message: null
    }
  }

  // componentDidMount() {
  //   axios
  //   .get('http://localhost:3001/persons')
  //   .then(response => {
  //     console.log('promise fulfilled')
  //     this.setState({ persons: response.data })
  //   })
  // }

  componentWillMount() {
    numberService
      .getAll()
      .then(persons => {
        this.setState({ persons })
      })
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value })
  }


  // addName = (event) => {
  //   event.preventDefault()
  //   const nameObject = {
  //     name: this.state.newName,
  //     number: this.state.newNumber
  //     // date: new Date().toISOString(),
  //     // important: Math.random() > 0.5,
  //     // id: this.state.notes.length + 1
  //   }

  //   const included = this.state.persons.map((x) => x.name).includes(nameObject.name)
  //   console.log(included)

  //   const persons = included ? this.state.persons : this.state.persons.concat(nameObject)

  //   this.setState({
  //     persons,
  //     newName: '',
  //     newNumber: ''
  //   })
  // }

  addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    const included = this.state.persons.map((x) => x.name).includes(nameObject.name)
     console.log(included)

     const persons = included ? this.state.persons : this.state.persons.concat(nameObject)

console.log('name obj',nameObject)

     numberService
      .create(nameObject)
      .then(newPerson => {
        this.setState({
          message: 'Luotiin '+newPerson.name+'!',
          persons: this.state.persons.concat(newPerson),
          newName: '',
          newNumber: ''
        })
      })
      setTimeout(() => {this.setState({message: null})
    },3000)
    }
 


  selectForRemoval = (id) => {


    return () => {
      const personToRemove = this.state.persons.find(n => n.id === id)

      if (window.confirm('Poistetaanko '+this.state.persons.find(n => n.id === id).name+'?')) {

      numberService
      .remove(id,personToRemove)
      .then(personToRemove => {

  console.log(personToRemove)
console.log('invidual id: ',id)
  console.log(this.state.persons)
          this.setState({
            message: 'Poistettiin '+this.state.persons.filter(n => n.id === id)[0].name+'!',
            persons: this.state.persons.filter(n => n.id !== id) ,
            removeable:'',
            newName: '',
            newNumber: ''
          })
          setTimeout(() => {this.setState({message: null})
        },3000)

      })
    } else {
      this.setState({
        message: ''+this.state.persons.filter(n => n.id === id)[0].name+' jätettiin puhelinluetteloon!',
      })
      setTimeout(() => {this.setState({message: null})
        },3000)
    }
  }
  }

  render() {

    const namesToShow =
    this.state.filter.length<1 ?
      this.state.persons :
      this.state.persons.filter(person => person.name.toString().toLowerCase().includes(this.state.filter.toString().toLowerCase()))

      const Notification = () => {
        if (this.state.message === null) {
          return null
        }
        return (
          <div className="error">
            {this.state.message }
          </div>
        )
      }

    return (
      <div>
        <h2>Puhelinluettelo</h2>
<Notification/>
                <div>
            rajaa näytettävä: <input
              value={this.state.filter}
              onChange={this.handleFilterChange} />
          </div>

            <h2>Lisää uusi</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input
              value={this.state.newName}
              onChange={this.handleNameChange} />
          </div>
          <div>
            numero: <input
              value={this.state.newNumber}
              onChange={this.handleNumberChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>

<h2>Numerot</h2>
        <table>
          <tbody>
        {/* {namesToShow.map((person) => <tr key={person.id}><td>{person.name}</td><td>{person.number}</td></tr>)} */}
        {namesToShow.map((person,i) => <Person key={i} person={person} selectForRemoval={this.selectForRemoval(person.id)}/>)}
      

       </tbody>
        </table>

  {/* <Numbers namesToShow={namesToShow} selectForRemoval={this.selectForRemoval()}/> */}
        <hr/>
       
        <div>
          debug: {this.state.newName}
        </div>
      </div>
    )
  }
}

export default App