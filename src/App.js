import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Option from './Option'
import States from './StateDistrict'
class App extends React.Component {
  state={
    stateOption: []
  }

  

  componentDidMount(){
    console.log(States)
    this.setState({stateOption: States})
    console.log(this.state.stateOption)
  }

  render(){
    // console.log('loaded')
      const states = this.state.stateOption.map(choice =>{
      return <Option thisState= {choice.state} />
    })
    return (
      <div className="App">
        <select className='selectStates'>
          {states}
        </select>
      </div>
    );
  }
  
}

export default App;
