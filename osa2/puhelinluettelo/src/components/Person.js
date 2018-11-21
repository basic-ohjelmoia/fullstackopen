import React from 'react';

const Person = ({ person,selectForRemoval }) => {

    const label = 'Remove'

    return (
      
     <tr><td>{person.name}</td><td>{person.number} <button onClick={selectForRemoval}>{label}</button></td></tr>    )
  }

  export default Person