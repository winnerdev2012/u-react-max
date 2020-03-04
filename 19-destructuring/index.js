window.addEventListener('DOMContentLoaded', (event) => {
  const pets = ['cat', 'bird', 'dog']
  const pets2 = {'cat': 'Minxy', 'bird': 'Tweety', 'dog': 'Fido'}
  const [a, b, c] = pets
  console.log(c)

  const {bird} = pets2

  console.log(bird)
});