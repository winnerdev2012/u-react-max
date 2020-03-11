import React,  { Component } from 'react';
import SubTask from './SubTask';

class Task extends Component {
  render(){

    const subTasks = this.props.subtasks.split(', ').map(t => {
      return <SubTask subtitle = {t} />
    })

    return (
      <div className="Task">
        <h1 className="Task-title">{this.props.title}</h1>
        {subTasks}
      </div>
    )
  }
}

export default Task;