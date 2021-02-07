import React, { Component } from 'react';
import './Person.css';
import NoDataMsg from '../util/NoDataMsg'

class person extends Component {
  render() {
    const childrenDivs = []
    if (this.props.children && this.props.children.length > 0) {
      this.props.children.forEach(child => {
        childrenDivs.push(child)
      })
    }
 
    let personChildDiv = <NoDataMsg />
    if(this.props.children){
      personChildDiv = this.props.children[this.props.children.length - 1]
    }

    return (
      <div className="person">
        <h3>My name is {this.props.person.name} and I am {this.props.person.age} years old.</h3>
        <p>I have a pet {this.props.person.pet}</p>
        <p>My hobbies include: {this.props.person.hobbies.map(h => h).join(' ')}</p>
        <p>My hometown: <span className="hometown">{this.props.person.hometown}</span></p>
        {personChildDiv}
      </div>
    )
  }
}

export default person;
