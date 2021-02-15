import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  constructor(props){
    super(props)
    this.state = {
      asdf: 'asdf'
    }
  }

  static getDerivedStateFromProps(props, state) {
    // console.log('[Persons.js] getDerivedStateFromProps')
    // console.log('[Persons.js] state: ', state)
    return state;
  }
  
  shouldComponentUpdate(nextProps, nextState){
    // console.log('[Persons.js] shouldComponentUpdate nextProps', nextProps)
    return true;
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log('[Persons.js] getSnapshotBeforeUpdate')
    // return null;
    // a way to save some data before the update, and then use it afterwards
    return {message: 'Snapshot!'}
  }
  
  // a way to save some data before the update, and then use it afterwards
  componentDidUpdate(prevProps, prevState, snapshot){
    // console.log('[Persons.js] componentDidUpdate')
    // console.log('[Persons.js] snapshot: ', snapshot)
  }

  componentWillUnmount(){
    // any code you want to run right before the component is removed
    console.log('[Person.js] componentWillUnmount')
  }

  render() {
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        index={index}
        clicked={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={(event) => this.props.changed(event, person.id)} />
    })
  }
}

export default Persons;