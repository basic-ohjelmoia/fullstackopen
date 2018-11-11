import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Statistic from './Statistic';


const Keskiarvo = (state) => {
   
    return (Math.round(
     ( ((state.huono*-1) + state.hyva) / (state.hyva+state.huono+state.neutraali))
    *10)||0)/10
     }
 
     const Positiviisia = (state) => {
        return    Math.round(state.hyva/(state.hyva+state.neutraali+state.huono)*100)||0
     }

     const table = (state) => {
         return (
             <table>
        <tbody>
        <Statistic text='Hyvä' value={state.hyva||0}/>
        <Statistic text='Neutraali' value={state.neutraali||0}/>
        <Statistic text='Huono' value={state.huono||0}/>
       
        <Statistic text='keskiarvo' value={Keskiarvo(state)}/>
        <Statistic text='positiivisia' value={''+Positiviisia(state)+' %'}/>
        {/* <p>{state.palaute}</p> */}
        </tbody>
        </table>
         )
     }

const Statistics =({ state })=>  {


        return (
  
   <div>
          <h1>statistiikka</h1>
     
     {table(state)}
      </div>
        
        )
  }


export default Statistics;
