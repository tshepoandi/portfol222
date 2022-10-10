/** @format */

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
let menuItemToHighLight = []

menu.onclick = () => {
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}

// navbar.onclick = () => {
//   menu.classList.toggle('active')
//   navbar.classList.toggle('fa-times')
// }

navbar.children[0].onclick = () => {
  navbar.children[0].style.borderBottom = 'thick solid #01a29c'
  navbar.children[2].style.borderBottom = 'none'
  navbar.children[3].style.borderBottom = 'none'
  navbar.children[4].style.borderBottom = 'none'
  navbar.children[1].style.borderBottom = 'none'
}

navbar.children[1].onclick = () => {
  navbar.children[1].style.borderBottom = 'thick solid #01a29c'
  navbar.children[0].style.borderBottom = 'none'
  navbar.children[2].style.borderBottom = 'none'
  navbar.children[3].style.borderBottom = 'none'
  navbar.children[4].style.borderBottom = 'none'
}
navbar.children[2].onclick = () => {
  navbar.children[2].style.borderBottom = 'thick solid #01a29c'
  navbar.children[0].style.borderBottom = 'none'
  navbar.children[1].style.borderBottom = 'none'
  navbar.children[3].style.borderBottom = 'none'
  navbar.children[4].style.borderBottom = 'none'
}
navbar.children[3].onclick = () => {
  navbar.children[3].style.borderBottom = 'thick solid #01a29c'
  navbar.children[0].style.borderBottom = 'none'
  navbar.children[1].style.borderBottom = 'none'
  navbar.children[2].style.borderBottom = 'none'
  navbar.children[4].style.borderBottom = 'none'
}
navbar.children[4].onclick = () => {
  navbar.children[4].style.borderBottom = 'thick solid #01a29c'
  navbar.children[0].style.borderBottom = 'none'
  navbar.children[1].style.borderBottom = 'none'
  navbar.children[2].style.borderBottom = 'none'
  navbar.children[3].style.borderBottom = 'none'
}

window.onscroll = () => {
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')
}
