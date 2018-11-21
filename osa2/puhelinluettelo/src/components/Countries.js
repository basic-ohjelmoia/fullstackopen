import React from 'react';
import Country from './Country'

const Countries = ({countriesToShow}) => {
if (countriesToShow.length<1) {
    return (
        <div><p>too many matches, specify another filter</p></div>
    )
} 

let showInfo = countriesToShow.length===1

    return (
      
   <div>
    <h2>Maat</h2>
        <table>
          <tbody>
        {/* {namesToShow.map((person) => <tr key={person.id}><td>{person.name}</td><td>{person.number}</td></tr>)} */}
        {countriesToShow.map((country,i) => <Country key={i} country={country} showInfo={showInfo}/>)}
      

       </tbody>
        </table>
   </div>
    )
  }

  export default Countries