import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value })
  }

  deleteCharHandler = (index) => {
    const chars = this.state.userInput.split('')
    chars.splice(index, 1)
    const updatedChars = chars.join('')
    this.setState({ userInput: updatedChars})
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return (
        <Char
          character={ch}
          id={index}
          key={index + ch}
          clicked={() => this.deleteCharHandler(index)} />
      )
    })

    return (
      <div className="App">
        <input
          type="text"
          className="input"
          value={this.state.userInput}
          onChange={this.inputChangedHandler} />
        <div>{this.state.userInput}</div>
        <hr />
        <div className="results">
          <h3>the length is:</h3>
          <p id="results-length">{this.state.userInput.length}</p>
        </div>
        <ValidationComponent inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
