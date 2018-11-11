import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const Statistic =({ text, value })=>  {
        return (
    
          <tr><td>
          <p><b>{text}</b></p>
          </td>
          <td>
          <p> {value}</p>
          </td></tr>
  
        
        )
  }


export default Statistic;
