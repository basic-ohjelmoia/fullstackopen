import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      anectodes: props.anecdotes,
      pisteet: props.pisteet,
      mostVotes: -1,
      mostVotedIndex: undefined

    }
  }

  anectodizer = (anectodes,pisteet) => {

   const min = 0;
   const max = anectodes.length-1;
   let chosen= Math.round((min + Math.random() * (max - min))*100/100,0);


    return (
    <div>
      {/* <p>{index} vs {chosen}</p> */}
      <p>{anecdotes[chosen]} - Votes... {pisteet[chosen]||0}</p>
      <button onClick={this.vote(pisteet, chosen)}>Vote this!</button> 
    
    </div>
    )

  }

  vote = (pisteet,chosen) => () => {
    // let pisteetNew = pisteet
    
    
    if (this.state.mostVotes<=pisteet[chosen]+1) {
      this.setState({mostVotes: pisteet[chosen]+1, mostVotedIndex: chosen})
  }
    pisteet[chosen]=pisteet[chosen]+1
    


    return (this.setState({pisteet: pisteet})
    )
  }

  moar = () => () => {
    return (this.setState({selected:this.state.selected+1})
    )
  }

  render() {
    console.log(this.props.anecdotes)

const popular = () => {
  if (this.state.mostVotes>0) {
  return (<div>
  <p>{this.state.anectodes[this.state.mostVotedIndex]||'-'}</p> 
  <p><b>with {this.state.mostVotes} votes</b></p>
  </div>)} else {
    return ( 
      <div><p>No anectodes voted yet!</p></div>
    )
  }
}

    return (
      <div>

      {this.anectodizer(this.state.anectodes,this.state.pisteet)}
      <button onClick={this.moar()}>Moar anecdote!!</button>

        <h1>anectode with most votes:</h1> 
{popular()}
    </div>

    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const pisteet = [
  0,
  0,
  0,
  0,
  0,
  0
]

ReactDOM.render(
  <App anecdotes={anecdotes} pisteet={pisteet} />,
  document.getElementById('root')
)

export default App;
