import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Randolph',
    case: 'down'
  }

  nameHandler = (event) => {
    console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }

  nameReverser = () => {
    const newName = this.state.username.split('').reverse().join('')
    console.log('newName: ', newName)

    this.setState({
      username: newName
    })
  }

  titleCaser = () => {
    let phrase = this.state.username.toLowerCase().split(" ");
      for(let i = 0; i< phrase.length; i++){
        phrase[i] = phrase[i][0].toUpperCase() + phrase[i].slice(1);
      }
    console.log('phrase: ', phrase)
    this.setState({
      username: phrase.join(' ')
    })
  }

  nameUpcaser = () => {
    const newName = this.state.username.toUpperCase()
    this.setState({
      username: newName,
      case: 'up'
    })
  }

  render (){

    return (
      <div className="App">
      <ol>
        <li>Create TWO new components: UserInput and UserOutput</li>
        <li>UserInput should hold an input element, UserOutput two paragraphs</li>
        <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
        <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
        <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
        <li>Add a method to manipulate the state (=> an event-handler method)</li>
        <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
        <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
        <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
        <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
      </ol>

      <UserInput 
        changer={this.nameHandler}
        username={this.state.username} />
      <hr />
      <hr />
      <UserOutput 
        username={this.state.username}
        reverser={this.nameReverser}
        upcaser={this.nameUpcaser}
        titlecaser={this.titleCaser}
        />
    </div>
    );
  }
}

export default App;
