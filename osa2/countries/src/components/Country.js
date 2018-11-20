import React from 'react';
// import handleCountryClick from '../App'





const Country = ({ country,showInfo }) => {

    if (showInfo) {
        return (
            <div>
            <h1>{country.name}</h1>
            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>
            <img src={country.flag} width="400"/>
            </div>

        )
    }

    return (
      
     <tr><td>{country.name}</td><td>{country.capital}</td><td>{country.subregion}</td></tr>    )
  }

  export default Country