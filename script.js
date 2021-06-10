//connect the button to function with user input
document.getElementById('button').addEventListener('click', click)
let userAge = 0
let userDate = 'Friday'

function click () {
  //connect the input box to user's input
  userAge = document.getElementById('input-one')
  userAge = parseInt(userAge)

  userDate = document.getElementById('input-two')

  //checks the date and age to see where to go
  if ((userAge < 18) && (userDate !== 'Saturday' && userDate !== 'Sunday')) {
    document.getElementById('answer').innerHTML = 'Get ready to go to school!'
  } else if ((userAge < 18) && (userDate === 'Saturday' || userDate === 'Sunday')) {
    document.getElementById('answer').innerHTML = 'Stay home or go outside to relax'
  } else if ((userAge >= 18) && (userDate !== 'Saturday' && userDate !== 'Sunday')) {
    document.getElementById('answer').innerHTML = 'Get ready to go to work'
  } else if ((userAge >= 18) && (userDate === 'Saturday' || userDate === 'Sunday')) {
    document.getElementById('answer').innerHTML = 'You can stay home and relax'
  } else {
    document.getElementById('answer').innerHTML = 'Invalid. Please try again'
  }
}