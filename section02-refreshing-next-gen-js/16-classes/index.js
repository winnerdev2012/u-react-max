window.addEventListener('DOMContentLoaded', (event) => {
  console.log('index.js loaded ...')
})


class Human {
  constructor() {
    this.gender = 'male'
  }

  printGender() {
    console.log('gender: ', this.gender)
  }
}

class Person extends Human {
  constructor(obj) {
    super() // here because we are using the constructor in a class that extends a superclass
    this.name = obj.name
    this.town = obj.town
    // this.gender = 'trans'
    // this.gender = obj.gender ? obj.gender : null;
    this.gender = obj.gender || this.gender
  }

  showPerson() {
    const mainDiv = document.querySelector('#main')
    mainDiv.innerHTML += (`<div>
    <h2>name: ${this.name}</h2>
    <p>town: ${this.town}</p>
    <p>gender: ${this.gender}</p>
    </div>`)
  }
}

// specifying gender in the obj passed to new Person(obj)
const phil = new Person({ name: 'Phil', town: 'Boston', gender: 'prefer not to say' })

// ommitting reference to gender in obj, defaults gender to male from super class
// const phil = new Person({ name: 'Phil', town: 'Boston' }) 

phil.showPerson()
phil.printGender()
