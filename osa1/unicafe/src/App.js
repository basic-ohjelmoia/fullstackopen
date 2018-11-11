import React, { Component } from 'react';
import Button from './Button';
import Statistics from './Statistics';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
     
      
        hyva: 0,
        neutraali: 0,
        huono: 0
      
      
    }
    // this.hyvaPalaute = this.hyvaPalaute.bind(this)
    // this.neutraaliPalaute = this.neutraaliPalaute.bind(this)
    // this.huonoPalaute = this.huonoPalaute.bind(this)
  }


  // hyvaPalaute = () => 
  //  () => { 
  //   this.setState({ hyva: this.state.hyva +1 })
  // }

  // neutraaliPalaute = () => 
  //   () => {
  //   this.setState({ neutraali: this.state.neutraali +1 })
  // }

  // huonoPalaute = () => 
  //  () => {
  //   this.setState({ huono: this.state.huono +1 })
  // }

 keskiarvo = () => {
   
   return Math.round(
     (((this.state.huono*-1) + this.state.hyva) / (this.state.hyva+this.state.huono+this.state.neutraali))
   *10)/10
    }

    positiviisia = () => {
       return    Math.round(this.state.hyva/(this.state.hyva+this.state.neutraali+this.state.huono)*100)
    }
    
  TopHalf = () => {

    
  const  setValue = (hyva,neutraali,huono) => 
    () => {
      this.setState({ hyva: this.state.hyva+hyva, neutraali: this.state.neutraali+neutraali, huono: this.state.huono+huono })
    }

return (
  <div>
    <h1>anna palautetta</h1>
 
      <div className="button-row">
      <Button handleClick={setValue(1,0,0)} text={'Hyvä v2'}/>
      <Button handleClick={setValue(0,1,0)} text={'Neutraali v2'}/>
      <Button handleClick={setValue(0,0,1)} text={'Huono v2'}/>

     </div>
     </div>
)
  }

  render() {


    console.log(this.state.palaute)

    if (this.state.hyva+this.state.neutraali+this.state.huono>0) {
    return (
      <div className="App"> 

         {this.TopHalf()}
          <Statistics state={this.state}/>
       
      </div>
    )
  }
  else {
    return (
      <div className="App"> 

         {this.TopHalf()}
<p>Ei tilastoitavaa palautetta vielä.</p>
         </div>
    )
 }
}
}

export default App;
