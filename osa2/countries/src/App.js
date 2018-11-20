import React from 'react';
import axios from 'axios'
import Countries from './components/Countries'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      filter: '',
      countries: []
    }
  }

  componentDidMount() {

    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('promise fulfilled for countries')
      console.log(response.data)
      this.setState({ countries: response.data })
    })
   
  }


  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value })
  }




 

  render() {

 
      const countriesToShow =
      this.state.filter.length<1 ?
        [] :
        this.state.countries.filter(country => country.name.toString().toLowerCase().includes(this.state.filter.toString().toLowerCase())).length<=10 ? 
        this.state.countries.filter(country => country.name.toString().toLowerCase().includes(this.state.filter.toString().toLowerCase())) : []
      
        const numberOfCountriesFound = this.state.countries.filter(country => country.name.toString().toLowerCase().includes(this.state.filter.toString().toLowerCase())).length

    return (
      <div>

        <h2>Maaluettelo</h2>

<div>
rajaa maa: <input
value={this.state.filter}
onChange={this.handleFilterChange} />
</div>
<div><p>Matches found: {numberOfCountriesFound}</p></div>
<Countries countriesToShow={countriesToShow} numberOfCountriesFound={numberOfCountriesFound}/> 
        <hr/>
        <div>
          debug: {this.state.filter}
        </div>
      </div>
    )
  }
}

export default App