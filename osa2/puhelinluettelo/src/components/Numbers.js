import React from 'react';
import Person from './Person'

const Numbers = ({namesToShow}) => {
    return (
      
   <div>
    <h2>Numerot</h2>
        <table>
          <tbody>
        {/* {namesToShow.map((person) => <tr key={person.id}><td>{person.name}</td><td>{person.number}</td></tr>)} */}
        {namesToShow.map((person,i) => <Person key={i} person={person}/>)}
      

       </tbody>
        </table>
   </div>
    )
  }

  export default Numbers