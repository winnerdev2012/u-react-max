import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  // super(props) executes the constructor of the component you are extending
  // ensures things are initialized correctly
  constructor(props){
    super(props)
    console.log('[App.js] constructor')
    console.log('[App.js] props', props)
    // console.log('[App.js] super(props)', super(props))
    // can also set state here, i.e.  state = { persons: [], otherState: 'some value' }
  
    // this.state = {
    //   asdf: 'asdf'
    // }
  
  }

  // this syntax for state, does all of the above for you, constructor, super(props)
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // think of static as a Class method, you are not calling it on an instance of this Class
  // instead, the Class itself has this static method
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps => props:', props)
    return state
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

////////////////////////////////////////////////////
//  these 3 are most used, most important to know
componentDidMount() {
  console.log('[App.js] componentDidMount')
}

shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js] shouldComponentUpdate')
  return true
}

componentDidUpdate() {
  console.log('[App.js] componentDidUpdate(')
}
////////////////////////////////////////////////////

// replaced by getDerivedStateFromProps
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] render')
    let persons = null;
    let cockpit = <Cockpit
      title={this.props.appTitle}
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.togglePersonsHandler} />

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        {/* <h1>{this.props.appTitle}</h1> */}
        {cockpit}
        {persons}
      </div>
    );
  }
}

export default App;
