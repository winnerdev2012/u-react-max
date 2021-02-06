window.addEventListener('DOMContentLoaded', (event) => {
  console.log('index.js loaded ...')
})

// 1st way
// class Human {
//   constructor() {
//     this.gender = 'male'
//   }

//   printGender() {
//     console.log('gender: ', this.gender)
//   }
// }


// 2nd way
class Human {
  // constructor() {
  // this.gender = 'male'
  gender = 'male'
  // }

  // printGender() {
  printGender = () => {
    console.log('gender: ', this.gender)
  }
}

// 1st way
// class Person extends Human {
//   constructor(obj) {
//     super() // here because we are using the constructor in a class that extends a superclass
//     this.name = obj.name
//     this.town = obj.town
//     this.gender = obj.gender || this.gender
//   }

//   showPerson() {
//     const mainDiv = document.querySelector('#main')
//     mainDiv.innerHTML += (`<div>
//     <h2>name: ${this.name}</h2>
//     <p>town: ${this.town}</p>
//     <p>gender: ${this.gender}</p>
//     </div>`)
//   }
// }

// 2nd way
class Person extends Human {
  constructor(obj) {
    super() // here because we are using the constructor in a class that extends a superclass

    this.name = obj.name
    // name = 'Ann'

    this.town = obj.town
    // town = 'NY'

    this.gender = obj.gender || this.gender
    // gender = 'female'

  }

  // showPerson() {
  showPerson = () => {
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
