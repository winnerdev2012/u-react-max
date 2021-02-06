import React, { Component } from 'react';

class SubTask extends Component {
  render(){
    return (
      <div>
        <h3 className='subTask'>{this.props.subtitle}</h3>
      </div>
    )
  }
}

export default SubTask;
