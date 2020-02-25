import React from 'react';
// import ReactDOM from 'react-dom';

function Person() {
  return (<div className="person">
    <h1>Brad</h1>
    <p>Your age: 57</p>
  </div>);
}

ReactDOM.render(<Person />, document.querySelector('#p1'));