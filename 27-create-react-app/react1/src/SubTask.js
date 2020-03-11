import React, { Component } from 'react';

class SubTask extends Component {
  render(){
    return (
      <div>
        <h3>{this.props.subtitle}</h3>
      </div>
    )
  }
}

export default SubTask;