import { createParr, showContent } from './src/components/Buttons/buttons'
import {
  education,
  experience,
  printEducation,
  printExperience,
  printprojects,
  projects,
  showContentEducation,
  showContentExperience
} from './src/components/Cards/cards'
import {
  lenguages,
  showLenguages,
  showPages
} from './src/components/lenguages/lenguages'
import './style.css'

const header = document.createElement('header')
const imgAlicia = document.createElement('img')
imgAlicia.src = './assets/photo.jpeg'
const titleName = document.createElement('h1')
titleName.textContent = 'Alicia Gálvez Rodríguez'
const nav = document.createElement('nav')
const ulnav = document.createElement('ul')
const elementsList = ['About me', 'Education', 'Experience', 'Projects']

for (const element of elementsList) {
  const listnav = document.createElement('li')
  listnav.textContent = element
  listnav.className = 'listnav'
  ulnav.appendChild(listnav)
}

const menuImg = document.createElement('img')
menuImg.src = '/assets/menu.svg'
menuImg.alt = 'Menu'
menuImg.className = 'menu-img'

header.appendChild(imgAlicia)
header.appendChild(titleName)
header.appendChild(menuImg)
header.appendChild(nav)
nav.appendChild(ulnav)
document.body.appendChild(header)

const mobileNav = document.querySelector('nav ul')

menuImg.addEventListener('click', () => {
  mobileNav.classList.toggle('show-menu')
})

const main = document.createElement('main')
main.setAttribute('class', 'main-content')

createParr()
showContent()

main.appendChild(document.querySelector('.divParr'))

const sectiondirection = document.createElement('section')
sectiondirection.className = 'direction'
const h3direct = document.createElement('h3')
h3direct.textContent = 'Calle del Rey, 62 Aranjuez (Madrid)'
const buttonContact = document.createElement('button')
const aButton = document.createElement('a')
aButton.textContent = 'Contact me'
aButton.href = 'mailto:alicia4079@gmail.com'
buttonContact.appendChild(aButton)
sectiondirection.appendChild(h3direct)
sectiondirection.appendChild(buttonContact)
document.body.appendChild(sectiondirection)

main.appendChild(sectiondirection)

printEducation(education)
printExperience(experience)
showContentEducation(education)
showContentExperience(experience)
main.appendChild(document.querySelector('.divEducation'))
main.appendChild(document.querySelector('.divExperience'))
printprojects(projects)
main.appendChild(document.querySelector('.divProject'))
showLenguages(lenguages)
main.appendChild(document.querySelector('.divLenguages'))
showPages()
main.appendChild(document.querySelector('.divContainer'))

document.body.appendChild(main)

const footer = document.createElement('footer')
const pFooter = document.createElement('p')
pFooter.textContent = '©️ Created by Alicia Gálvez Rodríguez 2023'
footer.appendChild(pFooter)

document.body.appendChild(footer)
