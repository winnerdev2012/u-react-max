window.addEventListener('DOMContentLoaded', (event) => {
  // primitive types: numbers, strings, booleans
  // stored in variable, copies the value
  const number = 1;
  const num2 = number;
  console.log(num2)
  
  //reference types 
  const person = {
    name: 'Max'
  };

  // this only makes a pointer to the object
  const pointerPerson = person;
  person.name = 'Frank'

  console.log('pointerPerson: ', pointerPerson)
  {name: 'Frank'}

  // this makes a true copy, because of spread operator
  // objects and arrays are reference types
  // to truly copy them, use spread operator
  const copiedPerson = {...person};
  person.name = 'Frank'

  console.log('person: ', person)
  console.log('copiedPerson: ', copiedPerson)
  // {name: 'Frank'}

});