import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Button =({ handleClick, text })=>  {
        return (
      <div>
            <button onClick={handleClick}>{text}</button>
        </div>
        
        )
  }


export default Button;
