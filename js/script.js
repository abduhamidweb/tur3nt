// console.log($("h1"));
// Modal window start
// let modal = document.getElementById('myModal')

// let btn = document.getElementById('myBtn')

// let span = document.getElementsByClassName('close')[0]

// btn.onclick = function () {
//   modal.style.display = 'block'
// }

// span.onclick = function () {
//   modal.style.display = 'none'
// }

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = 'none'
//   }
// }
// Dark mode start
// moon
const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')
const smMoon = document.querySelector('.sm-moon')
const smSun = document.querySelector('.sm-sun')
moon.addEventListener('click', () => {
  moon.style.display = 'none'
  sun.style.display = 'block'
})
sun.addEventListener('click', () => {
  smMoon.style.display = 'block'
  smSun.style.display = 'none'
})
// sm darkmod

smMoon.addEventListener('click', () => {
  smMoon.style.display = 'none'
  smSun.style.display = 'block'
})
smSun.addEventListener('click', () => {
  smMoon.style.display = 'block'
  smSun.style.display = 'none'
})
// const darkModeBtn = document.getElementById('dark-mode-btn')
smMoon.addEventListener('click', function () {
  document.body.classList.add('dark-moon')
  document.body.classList.remove('dark-sun')
})
smSun.addEventListener('click', function () {
  document.body.classList.add('dark-sun')
  document.body.classList.remove('dark-moon')
})
smMoon.addEventListener('click', function () {
  if (document.body.classList.contains('dark-sun')) {
    localStorage.setItem('dark-mode', 'on')
  } else {
    localStorage.setItem('dark-mode', 'off')
  }
})
smSun.addEventListener('click', function () {
  if (document.body.classList.contains('dark-sun')) {
    localStorage.setItem('dark-mode', 'on')
  } else {
    localStorage.setItem('dark-mode', 'off')
  }
})
if (localStorage.getItem('dark-mode') === 'on') {
  document.body.classList.add('dark-sun')
}
// Input validator function
// let form = document.querySelector('#formRegister')
// let elEmail = $('#email')
// let elNames = $('#names')
// function checkInput(input) {
//   return input.classList.add('input-valid')
// }
// function inputField(field) {
//   return field.classList.add('input-field')
// }
// elEmail.addEventListener('input', () => {
//   if (elEmail.value.length > 0) {
//     checkInput(elEmail)
//   } else {
//     inputField(elEmail)
//   }
// })
// elNames.addEventListener('input', () => {
//   if (elNames.value.length > 0) {
//     checkInput(elNames)
//   } else {
//     inputField(elNames)
//   }
// })
// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   if (elEmail.value.length > 0) {
//     checkInput(elEmail)
//   } else {
//     inputField(elEmail)
//   }
//   if (elNames.value.length > 0) {
//     checkInput(elNames)
//   } else {
//     inputField(elNames)
//   }
//   if (elEmail.value.length > 0 && elNames.value.length > 0) {
//     localStorage.setItem('validation-email', elEmail.value)
//     localStorage.setItem('validation-name', elNames.value)
//     alert('succsess full add ' + elNames.value)
//     elEmail.value = ''
//     elNames.value = ''
//     elEmail.classList.remove('input-valid')
//     elNames.classList.remove('input-valid')
//     elEmail.classList.remove('input-field')
//     elNames.classList.remove('input-field')
//   }
// })

// ochilmasin negadir ishlamayabdi.
// a.forEach((item) => {
//   console.log(item)
//   item.classList.add('spanDarkText')
// })
// $a('.h2DarkText').forEach((item) => {
//   item.classList.add('h2DarkText')
// })
// $a('.h3DarkText').forEach((item) => {
//   item.classList.add('h3DarkText')
// })
// $a('.pDarkText').forEach((item) => {
//   item.classList.add('pDarkText')
// })
// $a('.aDarkText').forEach((item) => {
//   item.classList.add('aDarkText')
// })
// if (!document.body.classList.contains('dark-mode')) {
//   $a('.spanDarkText').forEach((item) => {
//     item.classList.remove('spanDarkText')
//   })
//   $a('.h2DarkText').forEach((item) => {
//     item.classList.remove('h2DarkText')
//   })
//   $a('.h3DarkText').forEach((item) => {
//     item.classList.remove('h3DarkText')
//   })
//   $a('.pDarkText').forEach((item) => {
//     item.classList.remove('pDarkText')
//   })
//   $a('.aDarkText').forEach((item) => {
//     item.classList.remove('aDarkText')
//   })
// }
