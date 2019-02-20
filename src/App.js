import React, { Component } from "react";
import "./App.css";
import dogData from './dogs'
import Dog from './Components/Dog'

class App extends Component {
  render() {
    console.log("what is dog", dogData)
    return dogData.dogs.map(dog => <Dog name={dog.name}/>);
    {/*return (<Dog name={dogData.dog.name} />)*/}
  }
}

export default App;
