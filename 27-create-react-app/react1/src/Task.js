import React,  { Compononet } from 'react';

class Task extends Component {
  render(){
    return (
      <div className="Task">
        <h1 className="Task-title">{this.props.title}</h1>
      </div>
    )
  }
}

export default Task;