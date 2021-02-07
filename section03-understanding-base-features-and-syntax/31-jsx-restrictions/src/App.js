import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working.</p>
      </div>
    );
    
    // the internals that the JSX above are compiled to...
    // return React.createElement('div', null, 'h1', "I'm a React app!!!!")
    // return React.createElement('div', null, React.createElement('h1', null, "I'm a React app!!!!"))
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, "I'm a React app!!!!"))
  }
}

export default App;
