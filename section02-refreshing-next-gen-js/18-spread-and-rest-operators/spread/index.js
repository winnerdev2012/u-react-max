window.addEventListener('DOMContentLoaded', (event) => {
  const numbers = [1,2,3,4,5]
  const pets = ['cat', 'bird', 'dog']
  const newNumbers = [...numbers, 33]
  const people = {
    brad: {
      town: 'bedford',
      age: 59
    },
    fred: {
      town: 'boston',
      age: 24
    },
    jane: {
      town: 'andover',
      age: 52
    }
  }


  console.log('DOM fully loaded and parsed');
  console.log('numbers: ', numbers);
  console.log('newNumbers: ', newNumbers);
  console.log('people: ', people);
  
  
  const people2 = {...people, tim: { town: 'charlotte', age: 55 }, brad: {...people.brad}, food: 'veggies'}
  
  console.log('people2: ', people2);

debugger;

  let main = document.getElementById('main')
  
  main.append(numbers.toString())
  main.append([...pets, 'chicken'].toString())

  const person = {
    name: 'Max'
  }

  const newPerson = {
    ...person, 
    age: 24
  }

  main.append(newPerson.name.toString())
  
  const filter = (...args) => {
    return args.filter(el => el === 1);
  }
  console.log(filter([1,2,3]));
});